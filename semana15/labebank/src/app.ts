import express, { Request, Response } from "express";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
