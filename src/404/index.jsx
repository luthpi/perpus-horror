import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-red-600 bg-[#181818]">
      <h1 className="text-6xl font-extrabold font-['serif']">404</h1>
      <p className="uppercase text-2xl font-bold">Tidak ditemukan</p>
      <Link to="/beranda/1" className="underline">
        Ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
