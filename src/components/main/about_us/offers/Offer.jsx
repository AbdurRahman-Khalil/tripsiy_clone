
export const Offer = ({ icon, title, description }) => {
    return (
        <div
            className={`max-[1114px]:flex max-[1114px]:items-center max-[1114px]:justify-center max-[1114px]:flex-col 
                w-[281px] max-[1114px]:flex-grow h-[230px] px-[21px] py-[18px] max-[1114px]:pb-[22px] 
                bg-white text-center shadow rounded-2xl
            `}
        >
            <img
                className="mx-auto mb-4 w-[72px] min-[431px]:w-[78px] md:w-[85px] lg:w-[92px]"
                src={icon}
                alt="offer icon"
            />
            <p className="text-lg font-semibold tracking-[0.5%] text-[#2B2B2B] mb-1">
                {title}
            </p>
            <p className="text-xs font-medium text-[#4A4A4A]">
                {description}
            </p>
        </div>
    );
};
