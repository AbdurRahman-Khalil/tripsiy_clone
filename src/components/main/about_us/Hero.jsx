
export const Hero = () => {
    return (
        <section id="about-hero">
            <div id="about-hero-bg" className="relative">
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[hsla(0,0%,0%,0.4)] to-[hsla(0,0%,0%,0.25)]">
                    <div className="text-center space-y-2 px-9 sm:px-14 md:px-20">
                        <h1 id="hero-heading" className="text-[2.5rem] font-bold tracking-[0.5%] text-white">
                            Discover the Story Behind Tripsiy
                        </h1>
                        <p className="text-xl font-semibold tracking-[0.3%] text-[#EAEAEA]">
                            A UAE-based travel company turning dream vacations into real adventures.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
