import axios from 'axios';
import { API_URL } from '../environment';

const app = new axios.Axios({
    baseURL: API_URL,
});

export async function getAllServers(): Promise<string[]> {
    const response = await app.get('/server/list');

    return JSON.parse(response.data);
}