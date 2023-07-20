import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { connectDatabase, sequelize } from "./config/db";

sequelize.sync();
// Call the connectDatabase function to establish the database connection

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"], //For React
  })
);
app.use(express.json());

app.get("/api/products", (req: Request, res: Response) => {});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

connectDatabase();
