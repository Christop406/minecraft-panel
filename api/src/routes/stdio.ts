import { WebsocketRequestHandler } from 'express-ws';
import { stdioCache } from '../services';

export const stdioSocketHandler: WebsocketRequestHandler = (ws, req, next) => {
    if (typeof req.query.id !== 'string') {
        ws.send('ID must be a string');
        // ws.terminate();
        // next();
        return;
    }

    console.log('thru');

    const id = req.query.id;
    const streams = stdioCache.get(id);

    if (!streams) {
        ws.send(`ID ${id} not found in stdio cache`);
        // ws.terminate();
        // next();
        return;
    }

    ws.on('message', (data) => {
        const stripped = data.toString('utf-8').trim();

        streams.stdin.write(stripped + '\n');
    });

    streams.stdout.on('data', (chunk: Buffer) => {
        ws.send(chunk.toString('utf-8'));
    });
};