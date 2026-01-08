const Navbar = () => {
    return (
      <nav className="w-full flex items-center justify-between px-6 md:px-16 py-6  inset-0 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#020617] text-white">
  
        {/* LOGO */}
        <div className="text-xl font-semibold tracking-wide">
          Studio<span className="text-lime-300">Play</span>
        </div>
  
        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest text-gray-300">
          <li className="hover:text-white cursor-pointer">Work</li>
          <li className="hover:text-white cursor-pointer">Studio</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
  
        {/* CTA */}
        <button className="px-5 py-2 rounded-full border border-gray-600 text-sm hover:bg-white/10 transition">
          Let’s Talk
        </button>
      </nav>
    );
  };
  
  export default Navbar;
  