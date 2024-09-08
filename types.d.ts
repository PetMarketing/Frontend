interface ISession {
    token?: string
    tokenExpires?: number
    user: IUser
}

interface IUser {
    id?: number
    email?: string
    imagePath?: any
    imageAlt?: string
    name?: string
    role?: string
    emailVerified?: boolean
    isOnline: boolean
}

interface ILogin {
    email: string;
    password: string;
}

interface IUserUpdate {
    name: string;
    email: string;
}

interface IUserAvatarUpdate {
    imagePath: string,
    imageAlt: string,
}
