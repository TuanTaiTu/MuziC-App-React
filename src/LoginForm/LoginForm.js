<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 340d844284c66e33ccddb96cca37a005d3e99cac
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
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (password.length > 8) {
      alert("Error");
    }
  }, [password]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    axios.post("https://dummyjson.com/auth/login", data)
<<<<<<< HEAD
      .then((response) => {
        alert(response.data.token);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div class="container">
      <h1 style={{ color: 'red' }}>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form1">
        <div>
          <label>Username:</label>
          <input {...register("username")} />
          <p>{errors.username?.message}</p>

        </div>
        <div>
          <label>Password</label>
          <input type="password"
            {...register("username")}
            value={password}
            onChange={handleChange}
          />

          {password.length > 8 && (
            <div style={{ color: "red" }}>Mat khau toi da 8 ky tu</div>
          )}
        </div>
        <button type="submit">Login
        </button>
      </form>
    </div>



=======
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
>>>>>>> 340d844284c66e33ccddb96cca37a005d3e99cac
  );
}


export default LoginForm;
