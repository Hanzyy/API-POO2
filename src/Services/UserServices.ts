import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class UserServices{
    constructor(){}

    async listUser(email?: string){
        try{
            if (email){
                const user = await prisma.user.findUnique({
                    where:{
                        email
                    }
                });return user
            }
            else{
                const users = await prisma.user.findMany();
                return users
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async createUser(user: Prisma.UserCreateInput){
        try{
            const newUser = await prisma.user.create({
                data: user
            });
            return newUser
        }catch(error){
            console.log(error)
            return null
        }
    }

    async updateUser(email: string, user: Prisma.UserUpdateInput){
        try{
            const updatedUser = await prisma.user.update({
                where:{
                    email
                },
                data:user
            });return updatedUser
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteUser(email: string){
        try{
            const deletedUser = await prisma.user.delete({
                where:{
                    email
                }
            });return deletedUser
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new UserServices();