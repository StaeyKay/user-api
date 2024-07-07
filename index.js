import express from "express";
import { dbConnection } from "./config/db.js";
import userRouter from "./routes/user_routes.js";


// Create an express app
const userApp = express();

dbConnection();

// Add the middleware
userApp.use(express.json());

// Define route
userApp.use(userRouter)

// Listen for incoming requests
userApp.listen(4040, () => {
    console.log("App is listening on port 4040")
})