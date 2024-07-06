import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import MyUserRoute from "./routes/MyUserRoute";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

mongoose.connect(process.env.MONGODB_CONECTION_STRING as string).then(() => {
  console.log("connected to mongodb");
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health ok!" });
});

app.use("/api/my/user", MyUserRoute);

app.listen(7000, () => {
  console.log("server is running on port 7000");
});
