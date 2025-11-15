
export const Hero = ({ packageHeroBg, title, description }) => {
    return (
        <section id="package-hero">
            <div
                id="package-hero-bg"
                className="relative"
                style={{
                    minHeight: "463px",
                    backgroundImage: `url(${packageHeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 flex justify-center items-center bg-[hsla(0,0%,0%,0.5)]">
                    {/* bg-gradient-to-r from-[hsla(0,0%,0%,0.4)] to-[hsla(0,0%,0%,0.25)] */}
                    <div className="text-center">
                        <h1 id="hero-heading" className="text-[2.5rem] font-bold tracking-[0.5%] text-white">
                            {title}
                        </h1>
                        <p className="text-xl font-semibold tracking-[0.3%] text-[#F9E7C0] pb-14">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

        </section >
    );
};
