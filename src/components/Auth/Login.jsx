import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen  items-center justify-center *:text-white">
      <div className="border-2 rounded-xl p-20 border-emerald-600">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 font-medium border-emerald-600 text-lg outline-none py-2 px-6 rounded-full"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 text-lg font-medium mt-3 outline-none py-2 px-6 rounded-full"
            type="password"
            placeholder="Enter Password"
          />
          <button className="border-none mt-7 bg-emerald-600 font-semibold text-lg outline-none w-65 py-2 px-8 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
