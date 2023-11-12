import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import dataCerpen from "/data/cerpen.json";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";
import Finder from "../components/Finder.jsx";

const Hasil = () => {
  const nav = useNavigate();
  const { key } = useParams();
  const [hasil, setHasil] = useState([]);
  const filterer = () => {
    let filtered = [];
    dataCerpen.filter((item) => {
      item.judul.toUpperCase().includes(key.toUpperCase())
        ? filtered.push(item)
        : null;
    });
    setHasil(filtered);
  };

  useEffect(() => filterer(), []);

  return (
    <main className="bg-[#181818] w-full min-h-screen text-red-600 overflow-hidden flex flex-col justify-between">
      <motion.div
        className="p-4 md:px-20 w-full flex flex-col items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link className="underline w-fit" to="/beranda/1">
          &lt;- Kembali ke beranda
        </Link>
        <span>
          <h1 className="text-xl font-serif">Hasil Pencarian "{key}"</h1>
        </span>
        <div className="flex flex-col gap-2 mt-4 w-full">
          {hasil
            ? hasil.map((item) => {
                return (
                  <div
                    className="flex flex-col p-4 w-full shadow-md bg-[#191919] rounded-xl overflow-hidden"
                    key={item.id}
                  >
                    <h1 className="text-xl font-['terror'] tracking-wide">
                      {item.judul}
                    </h1>
                    <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[16px]">
                      {item.teks}
                    </p>
                    <Link
                      className="bg-red-700 text-black py-1 px-2 w-fit rounded-lg font-bold text-sm active:bg-red-800 transition mt-2"
                      to={`/baca/${item.slug}`}
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                );
              })
            : "Cerpen yang anda cari tidak ada"}
        </div>
      </motion.div>
      <Footer />
    </main>
  );
};

export default Hasil;
