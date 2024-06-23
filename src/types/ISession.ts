import { IUser } from "./IUser"

export interface ISession {
    token: string
    tokenExpires: number
    refreshToken: string
    user: IUser
}