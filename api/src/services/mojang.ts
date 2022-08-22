import axios from "axios";
import { MinecraftVersionsResponse } from '../../../shared';

const httpClient = new axios.Axios({});

export async function fetchVersionManifest(): Promise<MinecraftVersionsResponse> {
    return httpClient.get('https://launchermeta.mojang.com/mc/game/version_manifest.json').then(r => {
        return JSON.parse(r.data);
    });
}

export async function fetchVersionInformation(manifestUrl: string): Promise<any> {
    return httpClient.get(manifestUrl, {})
        .then((d) => {
            const data = JSON.parse(d.data);
            console.log(Object.keys(data))
            return data.downloads.server;
        });
}