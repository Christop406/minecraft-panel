import { stdioCache } from "./stdio";
import * as fs from 'fs/promises';
import * as path from 'path';
import { getStorageLocation } from "./filesystem";

export const getActiveServers = (): string[] => {
    return Array.from(stdioCache.keys());
};

export const getAllServers = async (): Promise<string[]> => {
    const serverPath = path.join(getStorageLocation(), 'servers');
    const dirEntries = await fs.readdir(serverPath);
    const serverDirs = await Promise.all(
        dirEntries.map(async (name) => {
            const stats = await fs.stat(path.join(serverPath, name));
            return { name, stats };
        })
    ).then((arr) => arr.filter(({ stats }) => stats.isDirectory()));

    return serverDirs.map((dir) => dir.name);
};