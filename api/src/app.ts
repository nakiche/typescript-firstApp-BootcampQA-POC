import express, { Application, Request, Response, NextFunction } from "express";
import config from "./lib/config";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index";

const app: Application = express();
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

interface error {
  status: number;
  message: string;
}

app.use(
  cors({
    origin: config.cors,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  }),
);

app.use((err: error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

app.use("/", routes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("hola typescript!");
});

export default app;
