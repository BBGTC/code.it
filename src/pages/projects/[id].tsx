import React from 'react'
import { useRouter } from 'next/router';

const project = () => {
  
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  return (
    <div>[project]</div>
  )
}

export default project;