import { trpc } from 'utils/trpc';

export default function IndexPage() {
  const h = trpc.hello.useQuery({ text: 'client' });

  if (!h.data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>{h.data.greeting}</p>
    </div>
  );
};
