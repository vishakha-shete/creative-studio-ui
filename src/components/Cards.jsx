import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";

const features = [
  {
    image: Card1,
    titleLeft: "Create",
    titleRight: "Boost",
    desc: "Modern workspace experiences designed for productivity and focus.",
  },
  {
    image: Card2,
    titleLeft: "Pass",
    titleRight: "Switch",
    desc: "Fast, scalable systems that adapt to your workflow instantly.",
  },
  {
    image: Card3,
    titleLeft: "Winners",
    titleRight: "Boosters",
    desc: "Creative solutions that elevate brands with impact and clarity.",
  },
];

const Features = () => {
  return (
    <section className="relative py-5 px-4 md:px-16 bg-[#050816] overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-purple-500/10 blur-[200px] rounded-full" />
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {features.map((item, i) => (
          <div
            key={i}
            className="
              group
              transition-all duration-500 ease-out
              hover:-translate-y-3
            "
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden mb-7">
              <img
                src={item.image}
                alt={item.titleLeft}
                className="
                  w-full
                  h-[320px]
                  object-cover
                "
              />
            </div>

            {/* Text */}
            <div className="text-white text-center">
              <h3 className="text-xl font-semibold tracking-wide">
                <span className="text-gray-400">{item.titleLeft}</span>{" "}
                <span>{item.titleRight}</span>
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;
