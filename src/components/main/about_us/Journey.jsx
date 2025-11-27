import journeyImg from "../../../assets/images/about_us/journey_img.jpg";


export const Journey = () => {
    return (
        <section
            id="about-journey"
            className="max-w-[1440px] mx-auto flex justify-center items-center flex-col-reverse lg:flex-row gap-x-[3.7em] min-[1150px]:gap-x-[4.25em] gap-y-[2.6em] min-[431px]:gap-y-[2.85em] md:gap-y-[3.25em] px-6 min-[431px]:px-9 md:px-12 lg:px-20 my-20"
        >
            <div className="min-w-full lg:min-w-[470px] min-[1150px]:min-w-[550px] h-[500px] lg:h-[664px] transition-all duration-200 ease-linear">
                <img
                    className="w-full h-full object-cover object-center rounded-2xl"
                    src={journeyImg}
                    alt="journey image"
                />
            </div>
            <div>
                <h2 className="text-[1.95rem] min-[431px]:text-[2.1rem] md:text-4xl font-semibold tracking-[0.3%] text-[#2B2B2B] text-center mb-6 md:mb-9">
                    Our Journey
                </h2>
                <p className="text-[1.1rem] min-[431px]:text-[1.25rem] md:text-2xl font-medium tracking-[0.3%] text-[#4A4A4A]">
                    Founded in Dubai, Tripsiy was born from a simple idea — to make travel planning effortless,
                    exciting, and reliable. From local adventures to international escapes, our team ensures that every trip
                    is crafted with care and authenticity.
                </p>
                <p className="text-[1.1rem] min-[431px]:text-[1.25rem] md:text-2xl font-semibold tracking-[0.3%] text-[#F6B15C] italic mt-1.5">
                    We believe travel isn’t just about places — it’s about people, memories, and stories.
                </p>
            </div>
        </section>
    );
};
