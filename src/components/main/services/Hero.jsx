
export const Hero = () => {
    return (
        <section id="services-hero">
            <div id="services-hero-bg" className="relative">
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[hsla(0,0%,0%,0.5)] to-[hsla(0,0%,0%,0.5)]">
                    <div className="text-center px-6 min-[431px]:px-9 sm:px-[4.5em]">
                        <h1 id="hero-heading" className="text-[2.5rem] font-bold tracking-[0.5%] text-white mb-4">
                            Our Services
                        </h1>
                        <p className="text-xl font-semibold tracking-[0.3%] text-[#EAEAEA]">
                            Everything you need for a seamless travel experience — all in one place.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
