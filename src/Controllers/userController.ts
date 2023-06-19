import { postUser, getUser } from "../Repositories/userRepositories";
import { Request, Response } from "express";
import { User } from "../Protocols/userProtocol";

export function newUser(req: Request, res: Response){
    const newUser = req.body as User;
    postUser(newUser);

    res.status(201).send("Novo usuário cadastrado");
}

export async function findUsers(req: Request, res: Response){
    const find = await getUser();
    res.status(200).send(find);
}