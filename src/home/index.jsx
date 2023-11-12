import React, { useEffect, useState } from "react";
import dataCerpen from "/data/cerpen.json";
import dataInfo from "/data/info.json";
import { Link, useParams } from "react-router-dom";
import Finder from "../components/Finder";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const { page = 1 } = useParams();
  const [pages, setPages] = useState([]);
  const skeleton = {
    judul: "Cerpen Horror",
    teks: "Ini cerpen horror",
  };
  const [cerpen, setCerpen] = useState([
    { id: 1, ...skeleton },
    { id: 2, ...skeleton },
    { id: 3, ...skeleton },
  ]);
  function filterer() {
    let filtered = [];
    dataCerpen.filter((item) => {
      item.page == page && filtered.push(item);
    });
    setCerpen(filtered);
  }
  function pager() {
    let tmp = [];
    for (let Page = 1; Page <= dataInfo.pages; Page++) {
      tmp.push(Page);
      setPages(tmp);
    }
  }

  useEffect(() => (filterer(), pager()), []);

  return (
    <main className="bg-[#181818] w-full min-h-screen pt-5 flex flex-col justify-between">
      <motion.div
        className="flex flex-col w-full h-full gap-2 text-red-700 bg-[#181818] px-4 md:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span>
          <Link to="/" className="text-2xl tracking-widest font-['terror']">
            PERPUS HORROR
          </Link>
        </span>
        <Finder />
        <div className="flex flex-col w-full gap-2">
          {cerpen.map((item) => {
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
          })}
        </div>
        <div className="flex gap-2 pt-3 w-full flex-wrap justify-center">
          {pages.length != 1 &&
            pages.map((p) => {
              return (
                <a
                  className="p-1 rounded-lg flex justify-center items-center shadow-md w-[30px] h-[30px] bg-[#202020] opacity-[80%]"
                  key={p}
                  href={`/beranda/${p}`}
                >
                  {p}
                </a>
              );
            })}
        </div>
      </motion.div>
      <Footer />
    </main>
  );
};

export default Home;
