import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="h-[7%]  w-full ">
      <div className="flex flex-col justify-center ">
        <h1 className="text-center text-2xl pt-5 ">Tony's Gallery</h1>
        <div className="flex flex-row justify-around">
          <Link href="/">
            <h2>Home</h2>
          </Link>

          <Link href="/about">
            <h2>About</h2>
          </Link>

          <Link href="/contact">
            <h2> Contact</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
