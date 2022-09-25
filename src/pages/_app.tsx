import type { AppType } from 'next/dist/shared/lib/utils';
import { trpcNext } from 'utils/trpcNext';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpcNext.withTRPC(MyApp);
