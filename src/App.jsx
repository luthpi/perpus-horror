import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from "./home";
import Baca from "./baca";
import NotFound from "./404";
import Hasil from "./hasil";
import { AnimatePresence, motion as m } from "framer-motion";
import Wave from "./components/Wave.jsx"

export default function App() {
  const M = m.div
  return (
    <BrowserRouter>
      <AnimatePresence>
        <M
          initial={{y: '-100vh', opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.4, type: 'tween', ease: 'easeOut'}}
        >
          <Wave />
        </M> 
        <Routes>
          <Route path="/" element={<Navigate to="/beranda/1" />} />
          <Route path="/beranda/:page" element={<Home />} />
          <Route path="/baca/:slug" element={<Baca />} />
          <Route path="/hasil/:key" element={<Hasil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
