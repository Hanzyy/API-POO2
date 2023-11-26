import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../Services/UserServices";

class UserController{

    constructor(){}

    async createUser(req: Request, res: Response){
        const dados: Prisma.UserCreateInput = req.body;
        
        if(dados.email !== "" && dados.name !== ""){
            const newUser = await UserService.createUser(dados)
            res.status(200).json({
                status: 'ok',
                newUser: newUser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUser(req: Request, res: Response){
        const users = UserService.listUser();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }
    

    async updateUser(req: Request, res: Response){
        const user = UserService.updateUser = req.body;
        const dados: Prisma.UserUpdateInput = req.body;


        if(dados.email !== "" && dados.name !== ""){
            const updatedUser = await UserService.updateUser(user.email, dados)
            res.status(200).json({
                status: 'ok',
                updatedUser: updatedUser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteUser(req: Request, res: Response){
        const user = UserService.deleteUser = req.body;

        if(user.email !== ""){
            const deletedUser = await UserService.deleteUser(user.email)
            res.status(200).json({
                status: 'ok',
                deletedUser: deletedUser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new UserController();