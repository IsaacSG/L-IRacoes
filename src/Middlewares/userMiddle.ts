import { Request, Response, NextFunction } from "express";
import { User } from "../Protocols/userProtocol";
import userSchema from "../Schemas/userSchema";

export function validateUser(req: Request, res: Response, next: NextFunction){
    const user = req.body as User;
    const validation = userSchema.validate(user);

    if(validation.error) {
        console.log(validation.error.message);

        return res.status(400).send("Parametros incorretos")
    }

    next();
}