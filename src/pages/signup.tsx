import { Typography } from '@mui/material';
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
  skills: [] as string[],
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

  const dummieSignup = trpcNext.auth.dummieSignup.useMutation();
  const signup = trpcNext.auth.signUp.useMutation();
  
  const [formState, setFormState] = useState(INITIAL_FORM);

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      await signup.mutateAsync(DUMMIE_FORM);
      console.log(formState);
      console.log('data', signup.data);
      console.log('error, ', signup.error);
    } catch(e) {
      console.error(e);
    }
  };


  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {

    if (event.target.name === 'skills') {
      setFormState({
        ...formState,
        skills: event.target.value.split(' '),
      })
    }

    setFormState({
      ...formState,
      [event.target.name]: event.target.type === 'number' ? parseInt(event.target.value, 10) || 0 : event.target.value,
      skills: event.target.value.split(' '),
    });

  }

  return (
    <div>
      { !signup.isLoading && <h1> { signup.data?.name } </h1> }
      <Typography color="white" fontSize={40}>
        SIGNUP!
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder='Email' name='email' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Contraseña' name='password' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Confirma tu contraseña' name='confirmPassword' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Username' name='username' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Tu nombre' name='name' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Tus apellidos' name='lastName' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Tu campus' name='campus' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='De qué semestre eres?' name='semester' type="number" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Tus habilidades' name='skills' type="text" onChange={handleChange} />
        </div>
        <div>
          <input placeholder='Tu carrera' name='major' type="text" onChange={handleChange} />
        </div>
        <button type='submit'> ENVIAR </button>
      </form>

    </div>
  )
}

export default signup