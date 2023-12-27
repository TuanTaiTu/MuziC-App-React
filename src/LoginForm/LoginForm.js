import React from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    axios.post("https://dummyjson.com/auth/login", data)
        .then((response) => {
          alert(response.data.token);
          console.log(data)
        })
        .catch((error) => {
          console.log(error);
        });
      }
  return(
    // <div>
    //   <h1 style={{color:'red'}}>Login</h1>
    //   <form onSubmit={handleSubmit(onSubmit)} className="form1">
    //     <div>
    //       <label>Username:</label>
    //       <input {...register("username")} />
    //       <p>{errors.username?.message}</p>
          
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input type="password" {...register("password")} />
    //       <p>{errors.password?.message}</p>
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>


      <form onSubmit={handleSubmit(onSubmit)} autocomplete='off' class='form'>
        <div class='control'>
          <h1>
            Sign In
          </h1>
        </div>
        <div class='control block-cube block-input'>
        <input {...register("username")} />
        <p>{errors.username?.message}</p>
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
        </div>
        <div class='control block-cube block-input'>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
        </div>
        <button class='btn block-cube block-cube-hover' type='submit'>
          <div class='bg-top'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg-right'>
            <div class='bg-inner'></div>
          </div>
          <div class='bg'>
            <div class='bg-inner'></div>
          </div>
          <div class='text'>
            Log In
          </div>
        </button>
        <div class='credits'>
          <a href='https://codepen.io/marko-zub/' target='_blank'>
            My other codepens
          </a>
        </div>
      </form>
  );
  }


export default LoginForm;