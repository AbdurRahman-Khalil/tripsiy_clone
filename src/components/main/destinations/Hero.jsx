
export const Hero = () => {
    return (
        <section id="destinations-hero">
            <div id="destinations-hero-bg" className="relative">
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[hsla(0,0%,0%,0.4)] to-[hsla(0,0%,0%,0.25)]">
                    <div className="text-center space-y-2 px-6 min-[431px]:px-9 sm:px-[4.5em]">
                        <h1 id="hero-heading" className="text-[2.5rem] font-bold tracking-[0.5%] text-white">
                            Explore the World with Tripsiy
                        </h1>
                        <p className="text-xl font-semibold tracking-[0.3%] text-[#EAEAEA]">
                            Uncover places you’ve only dreamed of visiting.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
