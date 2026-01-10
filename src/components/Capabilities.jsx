import roomImg from "../assets/room.png"; // replace with your image

const Capabilities = () => {
    return (
        <section className="relative py-20 px-6 md:px-16 bg-[#050816] overflow-hidden text-white">

            {/* Background glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[900px] h-[900px] bg-purple-500/10 blur-[200px] rounded-full" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

                {/* LEFT COLUMN */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-200">
                        Buns Commeanp
                    </h3>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                        <div className="flex justify-center items-center h-[220px]">
                            {/* Fake circular UI */}
                            <div className="relative w-40 h-40 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-[#050816]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-8 text-sm text-gray-400">
                            <div>
                                <p className="text-white font-semibold">Botlianc</p>
                                <p>Automation systems</p>
                            </div>
                            <div>
                                <p className="text-white font-semibold">Doconne</p>
                                <p>Smart workflows</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER COLUMN */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-200">
                        Soips to Sore Squing
                    </h3>

                    <div className="grid grid-cols-2 gap-6">
                        {[
                            "Field Analytics",
                            "Speed Control",
                            "AI Assist",
                            "Performance",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-9 hover:-translate-y-1 transition"
                            >
                                <p className="font-bold mb-2">{item}</p>
                                <p className="text-sm text-gray-400">
                                    Optimized digital solutions
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-200">
                        Moobinies
                    </h3>

                    <div className="rounded-3xl overflow-hidden border border-white/10">
                        <img
                            src={roomImg}
                            alt="Workspace"
                            className="w-full h-[320px] object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-6 text-sm text-gray-400">
                        <div>
                            <p className="text-white font-semibold">Creative</p>
                            <p>Design focused spaces</p>
                        </div>
                        <div>
                            <p className="text-white font-semibold">Premium</p>
                            <p>High-end execution</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Capabilities;
