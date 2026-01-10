import React from "react";
import { motion } from "framer-motion";

/* ------------------ Magnetic Button ------------------ */
const MagneticButton = ({ children, gradient }) => {
  const ref = React.useRef(null);

  const move = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`px-7 cursor-pointer py-2 rounded-full bg-gradient-to-r ${gradient}
      text-black font-semibold text-sm transition-transform duration-200`}
    >
      {children}
    </button>
  );
};

/* ------------------ Features Section ------------------ */
const Features = () => {
  const features = [
    {
      title: "Horere Cronus",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero soluta totam.",
      btn: "Customize",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Nobe Fis",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero maiores.",
      btn: "Setver",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "Unramod Plilie",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus.",
      btn: "More",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Unramod Plilie",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus.",
      btn: "More",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  /* Framer Motion variants */
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-10 px-6 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0b1220] to-[#020617]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative z-10 max-w-7xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-16
        "
      >
        {features.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            className="
              relative text-center text-white
              px-6 py-10 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              transition-transform duration-300
              hover:-translate-y-3
            "
          >
            {/* Vertical Divider (desktop only) */}
            {i !== 0 && (
              <div className="hidden lg:block absolute -left-8 top-10 h-[70%] w-px bg-white/15" />
            )}

            <h3 className="text-xl font-semibold mb-4 tracking-wide">
              {itemData.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {itemData.desc}
            </p>

            <MagneticButton gradient={itemData.gradient}>
              {itemData.btn}
            </MagneticButton>
          </motion.div>
        ))}
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-purple-500/10 blur-[200px] rounded-full" />
      </div>

    </section>
  );
};

export default Features;
