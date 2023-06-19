import prisma from "../DB/prisma.js";
import { User, DellUser } from "../Protocols/userProtocol.js";

export async function postUser(newUser: User) {
    const body = newUser;

    try {
        return prisma.user.create({
            data: body
        });
    }
    catch (error) {
        console.log(error)
    }
}

export async function getUser() {
    try {
        return prisma.user.findMany();
    }
    catch (error) {
        console.log(error);    
    }
}