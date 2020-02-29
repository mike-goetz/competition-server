import * as bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import bearerToken from 'express-bearer-token';
import helmet from 'helmet';
import morgan from 'morgan';
import * as path from 'path';
import * as rfs from 'rotating-file-stream';
import {oktaAuth} from './auth'
import {divisionRouter} from './router';

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
});

dotenv.config();
const app = express()
    .use(helmet())
    .use(compression())
    .use(morgan('combined', {stream: accessLogStream}))
    .use(cors())
    .use(bodyParser.json());

if (process.env.mode === 'Production') {
    app.use(bearerToken());
    app.use(oktaAuth);
}

app.use('/division', divisionRouter);

app.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`Competition Server listening on port ${process.env.PORT}`);
});
