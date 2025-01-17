import React from "react";
import Image from "next/image";

export default function Header({ route }: { route: string }) {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat w-full h-[320px] flex justify-center items-center"
      style={{ backgroundImage: "url(/Header-Image.png)" }}
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-6xl font-bold text-white"> {route}</h1>
        <div className="w-full flex justify-center gap-6 items-center text-white">
          <span>Home </span>
          <span className="text-orange-500">{ route }</span>
        </div>
      </div>
    </div>
  );
}
