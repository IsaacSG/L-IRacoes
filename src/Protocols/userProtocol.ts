import { type } from "os"

export type UserEntity = {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    adm: boolean
}

type User1 = Omit<UserEntity, "id">

export type User = Omit<User1, "adm">

export type DellUser = Partial<UserEntity>