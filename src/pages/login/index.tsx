import Image from "next/image";

import React from "react";

import LoginForm from "@/components/form/auth/login-form";
const LoginPage = () => {
  return (
    <>
      <div className=" relative  h-screen items-center grid lg:grid-cols-2">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="relative" />
          <Image
            src="https://images.unsplash.com/photo-1718631974631-afe2cd201801?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            alt="Authentication"
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>

        <div className="mx-auto flex  flex-col justify-center space-y-6 w-[350px]">
          <div className="flex flex-col space-y-5 items-center justify-center text-center">

            <h1 className="text-2xl font-semibold tracking-tight">
              Login In to Your Account
            </h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
