import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx"

const NotFound = () => {
  const nav = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-red-600 bg-[#151515]">
      <h1 className="text-6xl font-extrabold font-['serif']">404</h1>
      <p className="uppercase text-2xl font-bold">Tidak ditemukan</p>
      <Button to="/beranda/1">Ke Beranda</Button>
    </div>
  );
};

export default NotFound;
