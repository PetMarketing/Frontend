import type { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials) {
                const credentialDetails = {
                    email: credentials?.email,
                    password: credentials?.password,
                };

                const baseURL = process.env.NEXT_PUBLIC_API_KEY

                const res = await fetch(baseURL + '/admin/login', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentialDetails),
                });

                const user = await res.json();

                if (user && user.token) {
                    return user;
                } else {
                    console.log('check your credentials');
                    return null;
                }
            }
        })
    ],
    session: { strategy: 'jwt' },
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === 'update') {

                return { ...token, ...session.user };
            }
            return { ...token, ...user };
        },
        async session({ token, session }) {
            session.user = token.user;
            session.token = token.token;
            session.tokenExpires = token.tokenExpires;
            session.refreshToken = token.refreshToken;

            return session;
        },
    },
    pages: {
        signIn: '/login'
    }
}
