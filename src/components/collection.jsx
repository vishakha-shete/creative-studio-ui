import roomImg from "../assets/new.png";

const Collections = () => {
    return (
        <section className="relative py-10 px-6 md:px-16 bg-[#050816] overflow-hidden">

            {/* Gradient Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[800px] h-[800px] bg-purple-500/20 blur-[220px] rounded-full" />
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Colmees
                    </h2>

                    <p className="mt-4 md:mt-0 text-sm uppercase tracking-widest text-gray-400">
                        Curated in trend energy
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Card 1 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-purple-600/40 to-indigo-600/30 backdrop-blur-xl border border-white/10 text-white">
                        <h3 className="text-xl font-semibold mb-4">
                            Explore <br /> Creative Ideas
                        </h3>

                        <p className="text-sm text-gray-300 leading-relaxed">
                            Discover immersive digital concepts crafted for modern
                            experiences and creative workflows.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-3xl p-8 bg-gradient-to-br from-pink-600/40 to-purple-600/30 backdrop-blur-xl border border-white/10 text-white">
                        <h3 className="text-xl font-semibold mb-4">
                            Skills & Design
                        </h3>

                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Design that blends strategy, aesthetics, and performance
                            across platforms.
                        </p>

                        <ul className="space-y-2 text-sm text-gray-200">
                            <li>• UI / UX Design</li>
                            <li>• Creative Systems</li>
                            <li>• Motion & Visuals</li>
                        </ul>
                    </div>

                    {/* Card 3 – Image Card */}
                    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-700/40 to-purple-700/30 backdrop-blur-xl border border-white/10 text-white flex flex-col">

                        <div className="h-[260px] w-full overflow-hidden">
                            <img
                                src={roomImg}
                                alt="Room"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">
                                Modern Spaces
                            </h3>

                            <p className="text-sm text-gray-300">
                                Thoughtfully designed environments that inspire creativity,
                                comfort, and productivity.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Collections;
