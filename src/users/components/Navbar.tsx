import React from 'react';

export default function Navbar() {
  return (
    <div className="h-[7%]   w-full bg-white">
      <div className="flex flex-col justify-center ">
        <div>
          <h1 className="text-center text-2xl pt-5 ">Tony's Gallery</h1>
        </div>
        <div className="flex flex-row justify-around pt-5">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}
