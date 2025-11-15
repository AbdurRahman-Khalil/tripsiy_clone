import journeyImg from "../../../assets/images/about_us/journey_img.jpg";


export const Journey = () => {
    return (
        <section
            id="about-journey"
            className="max-w-[1440px] mx-auto flex justify-center items-center gap-[4.25em] my-20 px-20"
        >
            <div className="min-w-[550px] h-[664px]">
                <img
                    className="max-w-full min-h-full object-cover object-center rounded-2xl"
                    src={journeyImg}
                    alt="journey image"
                />
            </div>
            <div>
                <h2 className="text-4xl font-semibold tracking-[0.3%] text-[#2B2B2B] text-center mb-9">
                    Our Journey
                </h2>
                <p className="text-2xl font-medium tracking-[0.3%] text-[#4A4A4A]">
                    Founded in Dubai, Tripsiy was born from a simple idea — to make travel planning effortless,
                    exciting, and reliable. From local adventures to international escapes, our team ensures that every trip
                    is crafted with care and authenticity.
                </p>
                <p className="text-2xl font-semibold tracking-[0.3%] text-[#F6B15C] italic mt-1.5">
                    We believe travel isn’t just about places — it’s about people, memories, and stories.
                </p>
            </div>
        </section>
    );
};
