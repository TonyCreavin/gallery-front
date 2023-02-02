import Image from 'next/image';
import React from 'react';

export default function Card({ painting }) {
  return (
    <div className="w-[50px] h-[50px] border-solid border-black ">
      <Image
        alt="ptng"
        key={painting.id}
        src={painting.imageUrl}
        width={400}
        height={400}
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
