import Image from 'next/image';
import React from 'react';

export default function Card({ painting }) {
  return (
    <div className=" w-[350px]  h-full ml-5 my-20">
      <Image
        alt="ptng"
        key={painting.id}
        src={painting.imageUrl}
        width={350}
        height={270}
      />
      <p>{painting.name}</p>
      <p>{painting.content}</p>
      {!painting.isSold ? (
        <p>{painting.price}</p>
      ) : (
        <p className="text-red-600 font-bold"> SOLD</p>
      )}
    </div>
  );
}
