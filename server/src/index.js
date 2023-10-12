/************** SERVER FILE    ***********/
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

mongoose.set('strictQuery', false);

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Setting prefix to routes and receiving routes from user.js and recipes.js
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

//Connectting the database
mongoose.connect(
  "mongodb+srv://markmugisha:Mark1844@recipeapp.qiwg4cg.mongodb.net/recipeapp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(3001, () => console.log("Server started"));
