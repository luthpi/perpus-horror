import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Finder = () => {
  const findInput = useRef("");
  const nav = useNavigate();
  function handleNav(keyword) {
    nav(`/hasil/${keyword}`);
  }
  return (
    <div className="py-3 flex gap-2">
      <input
        ref={findInput}
        type="text"
        placeholder="Cari cerpen..."
        className="h-[32px] px-2 rounded-lg input max-w-xs bg-[#212121] text-red-600 focus:outline-0 placeholder:text-red-800"
        onKeyDown={(e) => {
          if (e.key == "Enter" && findInput.current.value != "") {
            handleNav(findInput.current.value);
          }
        }}
      />
      <button
        className="h-[32px] w-[32px] p-2 flex items-center justify-center rounded-lg text-black bg-red-600 active:bg-red-800 transition"
        onClick={() => {
          if (findInput.current.value != "") {
            handleNav(findInput.current.value);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>
    </div>
  );
};

export default Finder;
