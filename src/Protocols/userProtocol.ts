export type UserEntity = {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    adm: boolean
}

export type User = Omit<UserEntity, "id, adm">

export type DellUser = Partial<UserEntity>