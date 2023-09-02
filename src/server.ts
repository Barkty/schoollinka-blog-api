import express, { Express } from 'express';
import dotenv from 'dotenv';
import compression from "compression";
import http from "http";
import cors from "cors";
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes';
import notFound from './middlewares/notFound';
import errorHandlerMiddleware from './middlewares/errorHandler';

dotenv.config();

const app: Express = express();

app.use(compression());
app.set("trust proxy", 1);
app.use(express.json({ limit: "3MB" }));
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

app.use(cors());
app.use(morgan("tiny"));
app.use(helmet());

app.use('/api', router)

// Use middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

export default server;