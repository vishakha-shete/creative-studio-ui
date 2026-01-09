import heroBg from "../assets/hero.png";

const Hero = () => {
    return (
        <section
            className="
        relative min-h-[90vh]
        flex items-center
        text-white overflow-hidden
        px-4 sm:px-8 md:px-16
      "
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div
                className="
          relative z-10
          w-full max-w-5xl
          text-center md:text-left
          mx-auto
        "
            >
                {/* Heading */}
                <h1
                    className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-bold leading-tight
          "
                >
                    A Creative <br />
                    Digital <span className="text-[#c95fe4]">Studio</span>
                </h1>

                {/* Description */}
                <p
                    className="
            mt-6
            max-w-xl
            mx-auto md:mx-0
            text-gray-300
            text-sm sm:text-base md:text-lg
          "
                >
                    We design and build digital experiences that feel simple,
                    functional, and human — blending creativity with technology.
                </p>

                {/* Buttons */}
                <div
                    className="
            mt-10
            flex flex-col sm:flex-row
            items-center
            gap-6
            justify-center md:justify-start
          "
                >
                    <button
                        className="
              px-10 py-4 rounded-full
              bg-gradient-to-b from-[#c95fe4] via-[rgb(131,40,126)] to-[#448dec]
              text-black text-lg font-bold
              hover:scale-105 transition
            "
                    >
                        View Work
                    </button>

                    <button
                        className="
              text-sm sm:text-base
              font-bold uppercase tracking-widest
              text-gray-300
              hover:text-white transition
            "
                    >
                        About Studio →
                    </button>
                </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="
          w-[300px] sm:w-[420px] md:w-[520px]
          h-[300px] sm:h-[350px] md:h-[520px]
          bg-lime-400/10 blur-[160px] rounded-full
        " />
            </div>
        </section>
    );
};

export default Hero;
