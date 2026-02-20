import express, { Application } from "express";
import cors from "cors";
import config from "./config";
import { medicineRouter } from "./modules/medicine/medicine.router";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import { userRouter } from "./modules/user/user.router";
import { categoryRouter } from "./modules/category/category.router";
import { notFound } from "./middlewares/notFound";
import errorHandler from "./middlewares/globalErrorHandler";
import { orderRouter } from "./modules/order/orders.router";

const app: Application = express();

// middlewares
app.use(express.json());

// cross origin resource sharing (CORS)
app.use(
  cors({
    origin: [
      config.app_url!,
      "http://localhost:5000",
      "http://localhost:3000",
      "https://medixo-client.vercel.app",
      "https://medixo-server.vercel.app",
    ],
    credentials: true,
  }),
);

// **ALL ROUTES**

// better auth
app.all("/api/auth/*splat", toNodeHandler(auth));

//  user
app.use("/api", userRouter);

// posts
app.use("/api", medicineRouter);

// category
app.use("/api", categoryRouter);

// Order
app.use("/api", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello Boss from Server");
});

// not found
app.use(notFound);
// global error handler
app.use(errorHandler);

export default app;
