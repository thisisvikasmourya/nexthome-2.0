import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

/* `const app = express();` is creating an instance of the Express application. The `express()`
function returns an Express application object, which can be used to define routes, middleware, and
other functionalities for the web application. */
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
