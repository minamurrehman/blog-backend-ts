import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import blogRoutes from "./src/routes/blog.route";
import { connectToDb } from "@/utils/db";

//For env File
dotenv.config();

connectToDb();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Everything is working fine");
});

app.use("/api/blog", blogRoutes);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
