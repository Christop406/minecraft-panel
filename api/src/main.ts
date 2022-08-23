import 'dotenv/config';
import * as express from 'express';
import * as cors from 'cors';
import { serverRoutes, stdioSocketHandler } from './routes';
import * as enableWs from 'express-ws';

const rawApp = express();
const i = enableWs(rawApp);

const app = i.app;

app.use(cors());
app.use(express.json());

app.use('/server', serverRoutes);
app.ws('/stdio', stdioSocketHandler);

const port = process.env.MCPANEL_PORT
    ? Number(process.env.MCPANEL_PORT)
    : 4687;

app.listen(port, () => {
    console.log('Started Listening, port', port);
});