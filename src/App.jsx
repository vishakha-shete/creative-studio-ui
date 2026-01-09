import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import heroBg from "./assets/hero-bg.png"; // ✅ correct path

const App = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 " />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
