import React from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

type Props = {};

export default function contact({}: Props) {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex flex-col justify-center items-center align-middle bg-gray-900 text-white overflow-scroll ">
        <h1 className="text-white font-bold text-3xl mb-2">
          Let's get in touch!
        </h1>
        <form className=" flex flex-col w-[80vw] md:w-1/2 h-auto  space-y-2">
          <label htmlFor="name" className=" flex flex-col">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              className=" w-full md:w-1/2 h-7 text-black p-1 rounded-md"
            />
          </label>
          <label htmlFor="email" className=" flex flex-col">
            Email:
            <input
              type="email"
              id="name"
              className="w-full md:w-1/2 h-7 text-black p-1 rounded-md"
            />
          </label>
          <label htmlFor="name" className=" flex flex-col">
            Tel:
            <input
              type="tel"
              id="name"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="w-full md:w-1/2 h-7 text-black p-1 rounded-md"
            />
          </label>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={10}
            cols={24}
            className="text-black p-1 rounded-md mb-2"
          />
          <button type="submit" className="w-32 h-8 bg-sky-600 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
