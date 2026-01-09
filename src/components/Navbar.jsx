import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    "Non",
    "Speer",
    "Reetings",
    "Letssar",
    "Work",
    "Studio",
    "Services",
    "Contact",
  ];

  return (
    <nav className="w-full relative px-6 md:px-16 py-6 text-white z-50">
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <div className="text-3xl font-bold tracking-wide">
          Studio<span className="text-[rgb(131,40,126)]">Play</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-gray-300 font-bold">
          {links.map((item, i) => (
            <li key={i} className="hover:text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <button className="hidden md:block px-9 py-3 rounded-full bg-gradient-to-b from-[#c95fe4] via-[rgb(131,40,126)] to-[#448dec] text-sm font-semibold hover:opacity-90 transition">
          Let’s Talk
        </button>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-6 flex flex-col justify-between items-center z-50"
        >
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300
              ${open ? "rotate-45 translate-y-[10px]" : ""}`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300
              ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-full bg-white transition-all duration-300
              ${open ? "-rotate-45 -translate-y-[10px]" : ""}`}
          />
        </button>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE MENU FROM RIGHT */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#020617] border-l border-gray-700
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-sm uppercase tracking-widest text-gray-300 font-bold">

          {links.map((item, i) => (
            <span
              key={i}
              onClick={() => setOpen(true)}
              className="hover:text-white cursor-pointer"
            >
              {item}
            </span>
          ))}

          {/* MOBILE CTA */}
          <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-b from-[#c95fe4] via-[rgb(131,40,126)] to-[#448dec] text-sm font-semibold">
            Let’s Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
