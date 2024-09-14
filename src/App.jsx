import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="">
      <div className="bg-black text-white p-2 flex justify-center items-center gap-3">
        <p className="underline underline-offset-auto md:pl-40">
          <a href="#" target="_self">
            FREE SHIPPING for orders over $300. Order today
          </a>
        </p>
        <div className="hidden md:flex justify-center items-center gap-2 group">
          <FiAlertCircle className="rotate-180 "/>
          <p className="text-xs text-opacity-50 shadow-2xl shadow-black opacity-0 group-hover:opacity-100 w-max bg-white text-black p-1 border rounded-lg">Full <a href="#" className="underline text-blue-500">terms and conditions</a> apply</p>
        </div>
      </div>
      <NavBar/>
      <HeroSection/>
    </div>
  );
}

export default App;
