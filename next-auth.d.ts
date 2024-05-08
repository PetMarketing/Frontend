import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        token: string
        tokenExpires: number
        refreshToken: string
        user: {
            id: number
            email: string
            name: string
            role: string
            emailVerified: boolean
            isOnline: boolean
        }
    }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        token: string
        tokenExpires: number
        refreshToken: string
        user: {
            id: number
            email: string
            name: string
            role: string
            emailVerified: boolean
            isOnline: boolean
        }
    }
}