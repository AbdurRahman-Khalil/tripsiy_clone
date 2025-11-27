
export const Feature = ({ title, description, icon }) => {
    return (
        <div className="flex items-center gap-[1.15em] sm:gap-5 md:gap-7">
            <div className="w-20 h-20 sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] bg-[#E8B958] rounded-full flex justify-center items-center flex-shrink-0">
                <img 
                    src={icon} 
                    className="w-12 sm:w-14 md:w-[65px]"
                    alt={`${title}'s icon`} 
                />
            </div>
            <div className="space-y-1 sm:space-y-1.5">
                <p className="text-[26px] md:text-[32px] font-semibold text-[#2C2C2C]">
                    {title}
                </p>
                <p className="text-base md:text-xl lg:line-clamp-2 text-[#555555]">
                    {description}
                </p>
            </div>
        </div>
    );
};