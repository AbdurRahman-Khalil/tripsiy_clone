
export const Feature = ({ icon, title, description }) => {
    return (
        <div className="text-center min-[728px]:max-[911px]:w-[280px]">
            <img
                className="mb-[22px] mx-auto w-[72px] min-[431px]:w-[78px] md:w-[85px] lg:w-[92px]"
                src={icon}
                alt="feature icon"
            />
            <p className="text-lg font-semibold tracking-[0.5%] text-[#2B2B2B] mb-[9px]">{title}</p>
            <p className="text-sm font-medium tracking-[0.5%] text-[#4A4A4A]">{description}</p>
        </div>
    );
};
