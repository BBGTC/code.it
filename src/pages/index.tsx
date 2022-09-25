import { trpcNext } from 'utils/trpcNext';

export default function IndexPage() {
  const h = trpcNext.hello.useQuery({ text: 'client' });

  if (!h.data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>{h.data.greeting}</p>
    </div>
  );
};
