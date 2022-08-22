import type { Readable, Writable } from 'stream';

interface StdioCacheRecord {
    stdin: Writable;
    stdout: Readable;
    stderr: Readable;
}

export const stdioCache = new Map<string, StdioCacheRecord>();