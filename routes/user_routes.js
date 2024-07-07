import { Router } from "express";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user_controller.js";

// Create a router
const userRouter = Router();

// Define routes
userRouter.post('/users', addUser);
userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
userRouter.patch('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

export default userRouter;