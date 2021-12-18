import express, { NextFunction, Request, Response } from 'express';
import { AppError } from './AppError';
import { charactersRoutes } from './routes/character.routes';

const app = express();

const port = 3333;

app.use(express.json());

app.use("/characters", charactersRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return res.status(err.code).json({message: err.message})
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

app.listen(port, () => console.log(`App listening port: ${port}`));