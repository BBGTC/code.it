import { trpc } from 'server/trpc';

import { userRouter } from './user';
import { projectRouter } from './project';
import { authRouter } from './auth';

export const appRouter = trpc.router({
  user: userRouter,
  project: projectRouter,
  auth: authRouter
});

export type AppRouter = typeof appRouter;  

