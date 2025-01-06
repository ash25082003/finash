// src/server.ts
import express, { Express } from 'express';
import dotenv from 'dotenv';
import companyRoutes from './routes/companyRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.use('/api/companies', companyRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});