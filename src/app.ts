import express, { Application } from "express";
import cors from "cors";
import config from "./config";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";

// import errorHandler from "./middlewares/globalErrorHandler";
// import { notFound } from "./middlewares/notFound";

const app: Application = express();

// middlewares
app.use(express.json());

// cross origin resource sharing
app.use(
  cors({
    origin: config.app_url || "http://localhost:5000" || "http://localhost:3000",
    credentials: true,
  })
);

// ROUTES
// better auth 
app.all("/api/auth/*splat", toNodeHandler(auth));
// posts
app.use("/api", medicineRouter);


app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// not found
// app.use(notFound)
// global error handler
// app.use(errorHandler)

export default app;