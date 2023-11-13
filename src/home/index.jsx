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
    <main className="bg-[#181818] w-full min-h-screen flex flex-col justify-between">
      <motion.div
        className="flex flex-col w-full h-full gap-2 text-red-700 bg-[#181818]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 180"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(220, 38, 38, 1)" offset="0%"></stop>
              <stop stopColor="rgba(220, 38, 38, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,72L34.3,66C68.6,60,137,48,206,60C274.3,72,343,108,411,102C480,96,549,48,617,39C685.7,30,754,60,823,84C891.4,108,960,126,1029,117C1097.1,108,1166,72,1234,51C1302.9,30,1371,24,1440,45C1508.6,66,1577,114,1646,132C1714.3,150,1783,138,1851,135C1920,132,1989,138,2057,129C2125.7,120,2194,96,2263,93C2331.4,90,2400,108,2469,108C2537.1,108,2606,90,2674,69C2742.9,48,2811,24,2880,30C2948.6,36,3017,72,3086,81C3154.3,90,3223,72,3291,63C3360,54,3429,54,3497,60C3565.7,66,3634,78,3703,69C3771.4,60,3840,30,3909,27C3977.1,24,4046,48,4114,48C4182.9,48,4251,24,4320,21C4388.6,18,4457,36,4526,51C4594.3,66,4663,78,4731,84C4800,90,4869,90,4903,90L4937.1,90L4937.1,180L4902.9,180C4868.6,180,4800,180,4731,180C4662.9,180,4594,180,4526,180C4457.1,180,4389,180,4320,180C4251.4,180,4183,180,4114,180C4045.7,180,3977,180,3909,180C3840,180,3771,180,3703,180C3634.3,180,3566,180,3497,180C3428.6,180,3360,180,3291,180C3222.9,180,3154,180,3086,180C3017.1,180,2949,180,2880,180C2811.4,180,2743,180,2674,180C2605.7,180,2537,180,2469,180C2400,180,2331,180,2263,180C2194.3,180,2126,180,2057,180C1988.6,180,1920,180,1851,180C1782.9,180,1714,180,1646,180C1577.1,180,1509,180,1440,180C1371.4,180,1303,180,1234,180C1165.7,180,1097,180,1029,180C960,180,891,180,823,180C754.3,180,686,180,617,180C548.6,180,480,180,411,180C342.9,180,274,180,206,180C137.1,180,69,180,34,180L0,180Z"
          ></path>
        </svg>
        <div className="w-full h-full flex flex-col px-4 md:px-20">
          <span>
            <Link to="/" className="text-4xl tracking-widest font-['terror']">
              PERPUS <br /> HORROR
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
        </div>
      </motion.div>
      <Footer />
    </main>
  );
};

export default Home;
