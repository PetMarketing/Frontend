import { SessionOptions } from 'iron-session';

export const defaultSession: ISession = {
    user: {
        isOnline: false
    }
}

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET!,
    cookieName: 'alex-session',
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    }
}
