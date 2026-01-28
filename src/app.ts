import express, { Application } from "express";
import cors from "cors";
import config from "./config";
// import errorHandler from "./middlewares/globalErrorHandler";
// import { notFound } from "./middlewares/notFound";

const app: Application = express();

// middlewares
app.use(express.json());

// cross origin resource sharing
app.use(
  cors({
    origin: config.appUrl || "http://localhost:5000" || "http://localhost:3000",
    credentials: true,
  })
);

// ROUTES
// posts
// app.use("/posts", postRouter);



app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// not found
// app.use(notFound)
// global error handler
// app.use(errorHandler)

export default app;