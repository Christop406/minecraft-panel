import { Router } from "express";
import { join, relative, resolve } from "path";
import { copyFile, getStorageLocation, saveFile, stdioCache } from "../services";
import { downloadJar } from "../services/jar-downloader";
import { fetchVersionInformation, fetchVersionManifest } from "../services/mojang";
import { spawn } from "child_process";

export const serverRoutes = Router();

serverRoutes.post('/create', async (req, res) => {
    const jarFile = req.query.jarFile;
    const flavor = req.query.flavor || 'vanilla';
    let version = req.query.version || 'latest';
    const name = 'mc-' + String(req.query.name || Date.now());

    const versions = await fetchVersionManifest();

    if (version === 'latest') {
        version = versions.latest.release;
    }

    const versionToCreate = versions.versions.find((v) => v.id === version);

    console.log('create called', versionToCreate);

    console.log('getting info for', versionToCreate?.url);

    const versionInfo = await fetchVersionInformation(versionToCreate!.url);

    console.log('downloading', versionInfo.url);

    const jarFfile = await downloadJar(versionInfo.url);

    console.log('done!', jarFfile.length);

    const path = '.cache/jars/' + flavor + '/' + version + '.jar';
    const savedPath = saveFile(path, jarFfile);

    console.log('saved to', savedPath);

    copyFile(savedPath, join(getStorageLocation(), 'servers', name, 'server.jar'));

    res.json({ success: true });
});

serverRoutes.post('/start', (req, res) => {
    const id = req.query.id;

    if (typeof id !== 'string') {
        res.status(400).send('Failed');
        return;
    }

    const serverDir = join(getStorageLocation(), 'servers', id);
    const jarPath = join(serverDir, 'server.jar');
    const child = spawn('java', ['-Xms4G', '-Xmx4G', '-jar', jarPath, '--nogui'], {
        cwd: serverDir,
    });
    child.stdout.on('data', (e: Buffer) => {
        console.log(e.toString());
    });
    child.stderr.on('data', (e: Buffer) => {
        console.error(e.toString());
    });

    stdioCache.set(id, {
        stdin: child.stdin,
        stdout: child.stdout,
        stderr: child.stderr,
    });

    child.on('close', () => {
        stdioCache.delete(id);
    });

    res.status(200).send('Success');
});