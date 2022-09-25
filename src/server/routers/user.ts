import { trpc } from 'server/trpc';
import { prisma } from 'server/prisma';
import sha256 from 'crypto-js/sha256';
import z from 'zod';

export const userRouter = trpc.router({
  dummieSignup: trpc.procedure
    .mutation(async () => {
      const newUser = {
        email: 'antonio@tecccc.mx',
        password: '123123123',
        username: 'antonietacacaco',
        name: 'Antonio',
        lastName: 'Monroy',
        campus: 'Guadalajara',
        semester: 4,
        skills: ['react', 'python'],
        major: 'ITC',
      }

      return newUser;
    }),
  signUp: trpc.procedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(10),
        confirmPassword: z.string().min(10),
        username: z.string().min(1),
        name: z.string().min(3),
        lastName: z.string().min(3),
        campus: z.string(),
        semester: z.number(),
        skills: z.array(z.string()),
        major: z.string(),
      })
    )
    .mutation(async (req) => {
      try {
        console.log('aaaaa')
        console.log(req);
        const newUser = await prisma.user.create({
          data: {
            ...req.input,
            password: sha256(req.input.password).toString()
          }
        });
        return { ...newUser, password: undefined }

      } catch (e) {
        console.log('Signup failed');
        throw e;
      }
    })
});