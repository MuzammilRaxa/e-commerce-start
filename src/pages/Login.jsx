import React, { useState } from "react";

function Login() {
  const [err] = useState(false);
  const handleSubmit = () => {};
  const inputStyle =
    " p-4 text-base border-b outline-none border-[#5d5b8d] placeholder-gray-300 ";
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#a7bcff]  ">
      <div className="h-[320px]  w-[350px] bg-white px-16 py-4 rounded-xl flex flex-col text-center justify-between gap-2 ">
        <span className="bg-[#a7bcff] font-bold text-2xl rounded-xl">
          Chief
        </span>
        <span className="text-[#5d5b8d] text-xs ">Login</span>
        <div className="flex flex-col"></div>
        <form className="flex-col gap-6" onSubmit={handleSubmit}>
          <input className={inputStyle} type="email" placeholder="email" />
          <input
            className={inputStyle}
            type="password"
            placeholder="password"
          />
          <button className="bg-[#7b96ec] text-white mt-5 p-[8px] font-bold rounded-xl border-none outline-none">
            Log in
          </button>
          {err && <span className="bg-cartNumBg">Somthing went wrong</span>}
        </form>
        <p className="text-xs mt-3 text-[#5d5b8d]">
          You don't have an account? Register
        </p>
      </div>
    </div>
  );
}

export default Login;
