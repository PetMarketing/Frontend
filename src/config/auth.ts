import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {},

            async authorize(credentials) {

                const credentialDetails = {
                    email: credentials.email,
                    password: credentials.password,
                };

                const baseURL = process.env.NEXT_PUBLIC_API_KEY

                const res = await fetch(baseURL + "/admin/login", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentialDetails),
                });
                const user = await res.json();

                if (user && user.token) {
                    return user.admin as User;
                } else {
                    console.log('check your credentials');
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}