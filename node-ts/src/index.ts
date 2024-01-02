import express, { Express, Response, Request } from 'express';
import { MOCK } from './mock.js';

const app: Express = express();
const PORT: number = 3000;

app.get('/api', (req: Request, res: Response): void => {
  res.status(200).send(MOCK);
});

app.listen(PORT, (): void => {
  console.log(`Server is runnning on port ${PORT}`);
})