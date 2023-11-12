import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from "./home";
import Baca from "./baca";
import NotFound from "./404";
import Hasil from "./hasil";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
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
