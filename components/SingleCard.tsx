import Image from "next/image";
import React from "react";

export default function SingleCard() {
  return (
    <div className="relative h-20 border rounded-lg shadow-xl lg:h-40 w-80 lg:w-96 lg:rounded-2xl">
      <div className="flex justify-between h-full">
        <h3 className="my-auto mr-4 text-2xl font-bold">title</h3>
        <Image src="" alt="" className="h-full rounded-lg aspect-square lg:rounded-2xl" />
      </div>
    </div>
  );
}
