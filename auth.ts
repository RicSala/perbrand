import { getUserByEmail } from './lib/getUser';
import { db } from './lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import EmailProvider from 'next-auth/providers/email';
import LinkedInProvider from 'next-auth/providers/linkedin';
import { NextAuthOptions } from 'next-auth';

import { config } from './config/shipper.config';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        // LinkedIn recently changed their OAuth flow which is why there is a bit extra code
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID!,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
            client: { token_endpoint_auth_method: 'client_secret_post' }, // default to client_secret_basic
            // scope: 'r_liteprofile r_emailaddress',
            issuer: 'https://www.linkedin.com',
            /**
             * When using an OAuth 2 provider, the user information must be requested
             * through an additional request from the userinfo endpoint.
             *
             * [Userinfo endpoint](https://www.oauth.com/oauth2-servers/signing-in-with-google/verifying-the-user-info)
             */
            userinfo: {
                url: 'https://api.linkedin.com/v2/userinfo',
            },
            // tokenUri: 'https://www.linkedin.com/oauth/v2/accessToken',
            wellKnown:
                'https://www.linkedin.com/oauth/.well-known/openid-configuration',
            authorization: {
                url: 'https://www.linkedin.com/oauth/v2/authorization',
                params: {
                    scope: 'profile email openid w_member_social',
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },

            token: {
                url: 'https://www.linkedin.com/oauth/v2/accessToken',
            },
            jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
            async profile(profile) {
                console.log('profile:-', profile);

                // REVIEW: This is what we will have on the token? or on the session?
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                };
            },
        }),

        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: ' ' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Missing credentials');
                }

                const user = await getUserByEmail(credentials.email);

                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials Custom');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    console.log(
                        'Invalid credentials Custom',
                        isCorrectPassword
                    );
                    console.log('credentials.password', credentials.password);
                    throw new Error('Invalid credentials Custom');
                }

                //REVIEW: does this mean we are gonna have the whole user object in the session
                //  --> No, we are only gonna have name, email, image and whatever we add in the session callback
                return user;
            },
        }),

        EmailProvider({
            server: {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            },
            from: config.email.fromNoReply,
        }),
    ],

    // custom pages
    pages: {
        signIn: '/',
        newUser: '/', // New users will be directed here on first sign in
        error: '/auth/error', // TODO: doesn't exist yet! Do we want to redirect users if sign in fails? or just show an error message?
    },

    debug: process.env.NODE_ENV === 'development', // Set to true to display debug messages
    jwt: {
        // secret: process.env.JWT_SECRET, // deprecated
        // The maximum age of the NextAuth.js issued JWT in seconds.
        // Defaults to `session.maxAge`.
        //   maxAge: 60 * 60 * 24 * 30,
        // You can define your own encode/decode functions for signing and encryption
        //   async encode() {},
        //   async decode() {},
    },

    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    session: {
        maxAge: 30 * 24 * 60 * 60, // How long until the session expires in seconds
        strategy: 'jwt',
        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens (as is the case)
        // updateAge: 24 * 60 * 60, // 24 hours

        // The session token is usually either a random UUID or string, however if you
        // need a more customized session token string, you can define your own generate function.
        //   generateSessionToken: () => {
        //     return randomUUID?.() ?? randomBytes(32).toString("hex")
        //   }
    },

    //REVIEW: When we use the Prisma adapter, who decides which fields are gonna be saved in the session?
    // how do I add more fields to the session?
    // https://next-auth.js.org/configuration/callbacks
    callbacks: {
        // to control if a user is allowed to sign in.
        async signIn({ user, account, profile, email, credentials }) {
            if (account?.provider !== 'email') return true; // We only filter if user is trying to sign in with email (we are implementing the "magic link" feature so they can change their password)

            const userExists = await db.user.findUnique({
                where: { email: user.email! }, //the user object has an email property, which contains the email the user entered.
            });
            if (userExists) {
                return true; //if the email exists in the User collection, email them a magic login link
            } else {
                return false;
            }
        },

        // called anytime the user is redirected to a callback URL (e.g. on signin or signout).
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            // if (url.startsWith('/')) {
            //     console.log('url -->', `${baseUrl}${url}`);
            //     return `${baseUrl}${url}`;
            // }
            // // Allows callback URLs on the same origin
            // // REVIEW
            // else if (new URL(url).origin === baseUrl) return url;
            return url;
        },

        // This callback is called whenever a JSON Web Token is created (i.e. at sign in) or
        // updated (i.e whenever a session is accessed in the client). The returned value will be encrypted,
        // and it is stored in a cookie.
        // The arguments user, account, profile and isNewUser are only passed the first time this callback
        // is called on a new session, after the user signs in. In subsequent calls, only token will be available.
        // whatever this callback returns will be the token that is stored in the cookie.
        async jwt({ token, user, account, profile, session, trigger }) {
            // console.log({ token });
            // console.log({ user });
            // console.log({ account });
            // console.log({ profile });
            // console.log({ session });
            // console.log({ trigger });

            // When the user signes in for the first time, we want to add some extra information to the token
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                // token.role = user.role;
            }

            return token;
        },

        // The session callback is called whenever a session is checked.
        // By default, only a subset of the token is returned for increased security.
        // If you want to make something available you added to the token (like access_token and user.id from above)
        // via the jwt() callback, you have to explicitly forward it here to make it available to the client.
        // When using database sessions, the User (user) object is passed as an argument.
        // When using JSON Web Tokens for sessions, the JWT payload (token) is provided instead.
        async session({ session, token, user }) {
            console.log('session from session callback', session);
            if (session && session.user) {
            }
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    role: token.role,
                },
            };
        },
    },

    // We also have "events"
    // what's the difference between callbacks and events?
    // callbacks modify the default behavior, events can be used to add on top of the default behavior
    // async signIn(message) { /* on successful sign in */ },
    // async signOut(message) { /* on signout */ },
    // async createUser(message) { /* user created */ },
    // async updateUser(message) { /* user updated - e.g. their email was verified */ },
    // async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
    // async session(message) { /* session is active */ },

    // https://dev.to/mfts/how-to-send-a-warm-welcome-email-with-resend-next-auth-and-react-email-576f
    // events: {
    //     async createUser(message) {
    //       const params = {
    //         user: {
    //           name: message.user.name,
    //           email: message.user.email,
    //         },
    //       };
    //       await sendWelcomeEmail(params); // <-- send welcome email
    //     }
    //   },

    //REVIEW: When you supply a session prop in _app.js, useSession won't show a loading state,
    // as it'll already have the session available. In this way, you can provide a more seamless user experience.
    // https://next-auth.js.org/tutorials/securing-pages-and-api-routes
} satisfies NextAuthOptions;

// export const {
//     handlers: { GET, POST },
//     auth,
//     signIn,
//     signOut,
//     update,
// } = NextAuth({
//     ...authMiddlewareOptions,
//     ...authOptions,
// });
