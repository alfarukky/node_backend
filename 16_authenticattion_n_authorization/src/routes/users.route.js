import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { adminMilddlere } from '../middleware/admin.middleware.js';
const userRoute = Router();

userRoute.get('/', authMiddleware, adminMilddlere, userController.getAllUsers);

export default userRoute;
