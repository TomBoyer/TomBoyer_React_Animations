import React from "react";
import { Routes, Route } from "react-router-dom";
import Liste from "./Pages/Liste/Liste";
import Scroll from "./Pages/Scroll/Scroll";
import StateAnim from "./Pages/StateAnim/StateAnim";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <div className="global-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Liste />} />
        <Route path="/stateanim" element={<StateAnim />} />
        <Route path="/scroll" element={<Scroll />} />
      </Routes>
    </div>
  );
}
