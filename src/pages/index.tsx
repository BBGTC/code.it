import { trpcNext } from 'utils/trpcNext';

export default function IndexPage() {
 
  const mutation = trpcNext.auth.signUp.useMutation();

  const handleSubmit = () => {}

  return (
    <div>
      <form action="">
        

      </form>
    </div>
  )

};
