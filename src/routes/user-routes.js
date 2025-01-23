import { Router } from "express";
import UserController from "../controller/user-controller.js";

const userRouter = Router();

// POST request to fetch products by category
userRouter.route('/get-products').post(UserController.fetchProductsByCategory);

export default userRouter;
