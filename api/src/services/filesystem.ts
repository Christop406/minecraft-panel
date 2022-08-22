import { mkdirSync, writeFileSync, copyFileSync } from "fs";
import { dirname, join, resolve } from 'path';

export const getStorageLocation = () => {
    return process.env.STORAGE_DIR || '';
}

export const saveFile = (path: string, data: Buffer): string => {
    const dir = getStorageLocation();

    const filePath = join(dir || process.cwd(), path);

    console.log({ dir, filePath })

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, data, { encoding: 'binary' })

    return filePath;
};

export const copyFile = (from: string, to: string): string => {
    const resolvedTo = resolve(to);
    mkdirSync(dirname(resolvedTo), { recursive: true });
    copyFileSync(resolve(from), resolvedTo);
    return resolvedTo;
};