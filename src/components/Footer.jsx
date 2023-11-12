import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <footer className="footer p-10 bg-[#151515] text-red-600 uppercase">
        <nav>
          <header className="font-bold text-2xl text-red-800 font-serif">
            tautan
          </header>
          <a
            target="_blank"
            href="https://github.com/luthpai"
            className="text-sm"
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://instagram.com/luthpai"
            className="text-sm"
          >
            Instagram
          </a>
        </nav>
        <nav>
          <header className="font-bold text-2xl text-red-800 font-serif">
            lainnya
          </header>
          <a
            target="_blank"
            href="https://github.com/luthpai/perpus-horror/blob/main/CONTRIBUTING.md"
            className="text-sm"
          >
            Kontribusi
          </a>
        </nav>
      </footer>
      <footer className="footer px-10 pt-4 pb-7 bg-[#131313] text-red-600">
        <aside className="flex flex-col">
          <h1 className="text-2xl font-serif text-red-800">Luthpai</h1>
          <p>
            Made with love. <br />
            Luthpai - Apache-2.0 License {new Date().getFullYear()}.
          </p>
        </aside>
      </footer>
    </motion.div>
  );
};

export default Footer;
