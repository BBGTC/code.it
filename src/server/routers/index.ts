import { trpc } from 'server/trpc';

import { userRouter } from './user';
import { projectRouter } from './project';

export const appRouter = trpc.router({
  user: userRouter,
  project: projectRouter,
});

export type AppRouter = typeof appRouter;  

