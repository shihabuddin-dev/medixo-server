import express, { Application } from "express";
import { auth } from "./lib/auth";
import cors from "cors";
import config from "./config";
import { notFound } from "./middlewares/notFound";
import errorHandler from "./middlewares/globalErrorHandler";
import { toNodeHandler } from "better-auth/node";
import { medicineRouter } from "./modules/medicine/medicines.router";
import { orderRouter } from "./modules/order/orders.router";
import { userRouter } from "./modules/user/user.router";

const app: Application = express();

// middlewares
app.use(express.json());

// cross origin resource sharing
app.use(
  cors({
    origin: config.app_url || "http://localhost:5000" || "http://localhost:3000" ||"http://localhost:4000",
    credentials: true,
  })
);

// ROUTES
// better auth 
app.all("/api/auth/*splat", toNodeHandler(auth))

// User Routes
app.use('/api', userRouter)

// Medicine Routes
app.use('/api', medicineRouter)

// Order Routes
app.use('/api', orderRouter)


app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// not found
app.use(notFound)
// global error handler
app.use(errorHandler)

export default app;