import { Router } from "express";
import UserController from "../Controller/UserController";

const UserRouter = Router();

UserRouter.get('/user', UserController.listUser)

UserRouter.post('/user', UserController.createUser);

UserRouter.put('/user', UserController.updateUser);

UserRouter.delete('/user', UserController.deleteUser);

export default UserRouter;