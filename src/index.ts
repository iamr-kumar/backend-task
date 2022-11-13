import express, { Express } from "express";
import dotenv from "dotenv";
import { authorRoutes, authRoutes, bookRoutes } from "./routes";
import { connectDbAndCreateFakeData } from "./config/db";

dotenv.config();

connectDbAndCreateFakeData(3);

const app: Express = express();

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", bookRoutes);
app.use("/api", authorRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
