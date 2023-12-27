import React, { useEffect, useState } from "react";
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



  );
}


export default LoginForm;
