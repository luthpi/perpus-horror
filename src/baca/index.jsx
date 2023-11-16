import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import dataCerpen from "/data/cerpen.json";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";

const Baca = (props) => {
  const nav = useNavigate();
  const [cerpen, setCerpen] = useState({});
  const { slug } = useParams();
  function filterer() {
    for (let item in dataCerpen) {
      dataCerpen[item].slug == slug ? setCerpen(dataCerpen[item]) : null;
    }
  }

  useEffect(() => {
    filterer();
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  return (
    <main className="bg-[#181818] w-full min-h-screen flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex p-4 md:px-20 flex-col items-start min-h-screen text-gray-400"
      >
        <Button />
        <div className="text-sm breadcrumbs text-red-600">
          <ul>
            <li>
              <Link to="/halaman/1">Baca</Link>
            </li>
            <li>
              <Link to={cerpen.slug ? `/baca/${cerpen.slug}` : "/"}>
                {cerpen.slug ? cerpen.slug : "404 - Tidak Ditemukan"}
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-['terror'] tracking-wide text-red-600">
          {cerpen.judul ? cerpen.judul : "Cerpen tidak dapat ditemukan"}
        </h1>

        <span className="text-red-600">
          Sumber:{" "}
          {cerpen.sumber ? (
            <a
              href={cerpen.sumber}
              target="_blank"
              className="underline text-sm"
            >
              {cerpen.sumber}
            </a>
          ) : (
            "-"
          )}
        </span>
        <span className="text-red-600">
          Penulis: {cerpen.penulis ? <span>{cerpen.penulis}</span> : "-"}
        </span>
        <span className="whitespace-pre-wrap mt-3">
          {cerpen.teks ? cerpen.teks : "Cerpen yang anda cari tidak ditemukan"}
        </span>
        <Button>Kembali</Button>
      </motion.div>
      <Footer />
    </main>
  );
};

export default Baca;
