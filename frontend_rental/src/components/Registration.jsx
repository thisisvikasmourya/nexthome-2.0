// import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const response = await axios.post("/api/register");
    console.log(response.data);
  };

  return (
    <div>
      <h1>Registration</h1>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="name" {...register("fullname")} />
          <input type="text" placeholder="name" {...register("email")} />
          <input type="text" placeholder="name" {...register("username")} />
          <input type="text" placeholder="name" {...register("password")} />
          <input type="file" placeholder="name" {...register("avatar")} />
          <input type="text" placeholder="name" {...register("typeofuser")} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
