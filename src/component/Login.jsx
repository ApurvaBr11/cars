import React from "react";
import videoFile from "../assets/video.mp4";

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
     
        <div className="flex relative h-[500px] justify-center items-center">
        <video className="h-[500px] rounded-md" muted loop autoPlay>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="lg:w-[60%] w-[90%] h-[95%]  backdrop-blur-sm  bg-black/25 absolute lg:-left-16 border rounded justify-center text-white items-center flex flex-col">
            <form action="" className="justify-center text-white items-center flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-center">Login</h2>
  
                <input type="text" name="name" className=" bg-transparent border-b-2 border-white pr-20 pl-6 py-2 outline-none" placeholder="Username" id="" />
                <input type="email" name="email" className="bg-transparent border-b-2 border-white pr-20 pl-6 py-2 outline-none " placeholder="Email" id="" />
                <input type="password" name="password" className="bg-transparent border-b-2 border-white pr-20 pl-6 py-2 outline-none" placeholder="Password" id="" />
                <input type="submit" value="Login"  className="bg-black px-12 py-2 mt-8 "/>
                <p className="text-sm font-md">Already have an account <a href="">Login</a></p>
                
            </form>
        </div>
        </div>
     
    </div>
  );
}

export default Login;
