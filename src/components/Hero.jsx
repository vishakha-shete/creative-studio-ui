import heroBg from "../assets/hero-bg.png"; // your generated background image

const Hero = () => {
    return (
        <section
            className="relative min-h-[90vh]  flex items-center  text-white overflow-hidden px-6 md:px-16"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0  " />

            {/* CONTENT */}
            <div className="relative z-10 max-w-5xl ml-30">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight">
                    A Creative <br />
                    Digital <span className="text-lime-300">Studio</span>
                </h1>

                <p className="mt-6 max-w-xl text-gray-300 text-sm sm:text-base">
                    We design and build digital experiences that feel simple,
                    functional, and human — blending creativity with technology.
                </p>

                <div className="mt-10 flex items-center gap-6">
                    <button className="px-8 py-3 rounded-full bg-lime-300 text-black font-semibold hover:bg-lime-200 transition">
                        View Work
                    </button>

                    <button className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition">
                        About Studio →
                    </button>
                </div>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[500px] h-[500px] bg-lime-400/10 blur-[160px] rounded-full" />
            </div>
            
        </section>
    );
};

export default Hero;
