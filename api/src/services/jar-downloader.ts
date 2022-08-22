import { Axios } from "axios";

const httpClient = new Axios({});

export async function downloadJar(jarFile: string): Promise<Buffer> {
    return httpClient.get(jarFile, { responseEncoding: 'binary' })
        .then((d) => {
            return d.data;
        })
}