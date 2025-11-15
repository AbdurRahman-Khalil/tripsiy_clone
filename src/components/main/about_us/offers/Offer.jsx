
export const Offer = ({ icon, title, description }) => {
    return (
        <div className="w-[281px] h-[230px] px-[21px] py-[18px] bg-white text-center shadow rounded-2xl">
            <img className="mx-auto mb-4" src={icon} alt="offer icon" />
            <p className="text-lg font-semibold tracking-[0.5%] text-[#2B2B2B] mb-1">{title}</p>
            <p className="text-xs font-medium text-[#4A4A4A]">{description}</p>
        </div>
    );
};
