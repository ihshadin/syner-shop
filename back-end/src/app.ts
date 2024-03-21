import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFoundHandler from './app/middlewares/notFoundHandler';
import router from './app/routes';
import cookieParser from 'cookie-parser';
const app = express();

// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// application routes
app.use('/api/v1', router);

//testing routes
const test = (req: Request, res: Response) => {
  const a = 'Hello, world!';
  res.send(a);
};
app.get('/', test);

//global error
app.use(globalErrorHandler);

//Not Found
app.use(notFoundHandler);

export default app;
