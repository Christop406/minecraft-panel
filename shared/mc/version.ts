export enum MinecraftVersionType {
    Release = 'release',
    Snapshot = 'snapshot',
}

export interface MinecraftVersion {
    id: string;
    type: MinecraftVersionType;
    url: string;
    time: string;
    releaseTime: string;
}

export interface MinecraftVersionsResponse {
    latest: {
        release: string;
        snapshot: string;
    };
    versions: MinecraftVersion[];
}