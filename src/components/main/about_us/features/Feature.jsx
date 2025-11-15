
export const Feature = ({ icon, title, description }) => {
    return (
        <div className="text-center">
            <img className="mb-[22px] mx-auto" src={icon} alt="feature icon" />
            <p className="text-lg font-semibold tracking-[0.5%] text-[#2B2B2B] mb-[9px]">{title}</p>
            <p className="text-sm font-medium tracking-[0.5%] text-[#4A4A4A]">{description}</p>
        </div>
    );
};
