import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../server/prisma';
import { PrismaClient } from '@prisma/client';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example",
        },
        password: {
          label: "Password",
          type: "password",
        }
      },
      authorize: async (credentials, request) => {

        const user = await prisma.user.findFirst({ where: {
          email: credentials?.email,
          password: credentials?.password
        }});

        if (!user) return null;
        return user;
      }
    })
  ]
})