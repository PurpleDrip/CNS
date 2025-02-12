import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import chalk from "chalk";

import connecttoDB from "./Config/connecttoDB.js";
import connecttoRedis from "./Config/connecttoRedis.js";
import checkforToken from "./Middleware/checkforToken.js";
import loginRoute from "./Routes/loginRoute.js";
import registerRoute from "./Routes/registerRoute.js";
import profileRoute from "./Routes/profileRoute.js";
import filterRoute from "./Routes/filterRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/checkforToken", checkforToken);
app.use("/api/login", loginRoute);
app.use("/api/register", registerRoute);
app.use("/api/profile", profileRoute);
app.use("/api/filter", filterRoute);

connecttoDB();
connecttoRedis();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.bgBlue("Listening on port", PORT));
});
