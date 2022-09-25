import { initTRPC } from "@trpc/server"
import sha256 from 'crypto-js/sha256';
import z from 'zod';

import { trpc } from "server/trpc";
import { prisma } from 'server/prisma';


export const authRouter = trpc.router({
  signUp: trpc.procedure
    .input(
      z.object({
        email: z.string().email().regex(new RegExp('.*@tec.mx')),
        password: z.string().min(10),
        confirmPassword: z.string().min(10),
        username: z.string().min(1),
        name: z.string().min(3),
        lastName: z.string().min(3),
        campus: z.string(),
        semester: z.number().int(),
        skills: z.array(z.string()),
        major: z.string(),
      })
    ) 
  .mutation(async (req) => {
    try {
      const newUser = await prisma.user.create({
        data: {
          ...req.input,
          password: sha256(req.input.password).toString()
        }
      });
      return { ...newUser, password: undefined }

    } catch(e) {
      console.log('Signup failed');
      throw e;
    }
  })
});

// interface SignupRequest {
//   email: string,
//   password: string,
//   confirmPassword: string,
//   name: string;
//   lastName: string;
//   campus: string;
//   major: string;
//   semester: number;
//   skills?: string[];
// }