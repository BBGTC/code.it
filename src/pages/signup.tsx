import { create } from 'domain';
import React, { ChangeEventHandler, useState } from 'react'
import { trpcNext } from 'utils/trpcNext'

const INITIAL_FORM = {
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
  name: '',
  lastName: '',
  campus: '',
  semester: 1,
  skills: [],
  major: '',
}

const DUMMIE_FORM = {
  email: 'antonio@tec.mx',
  password: '123123123',
  confirmPassword: '123123123',
  username: 'antonieto',
  name: 'Antonio',
  lastName: 'Monroy',
  campus: 'Guadalajara',
  semester: 4,
  skills: ['react', 'python'],
  major: 'ITC',
}

const signup = () => {

  const signup = trpcNext.auth.signUp.useMutation();

  const [formState, setFormState] = useState(DUMMIE_FORM);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const createdUser = await signup.mutate(formState);
    console.log(createdUser);
  };


  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input name='email' type="text" onChange={handleChange} />
        </div>
        <div>
          <input name='password' type="text" onChange={handleChange} />
        </div>
        <div>
          <input name='confirmPassword' type="text" onChange={handleChange} />
        </div>
        <div>
          <input name='username' type="text" onChange={handleChange} />
        </div>
        <div>
          <input name='name' type="text" onChange={handleChange} />
        </div>
        <div>
          <input name='lastName' type="text" onChange={handleChange} />
          <div>
            <input name='campus' type="text" onChange={handleChange} />
          </div>
          <div>
            <input name='semester' type="number" onChange={handleChange} />
          </div>
          <div>
            <input name='email' type="text" onChange={handleChange} />
          </div>
          <button type='submit'> ENVIAR </button>
        </div>
      </form>

    </div>
  )
}

export default signup