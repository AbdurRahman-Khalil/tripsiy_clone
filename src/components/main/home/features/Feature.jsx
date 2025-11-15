
export const Feature = ({ title, description, icon }) => {
    return (
        <div className="flex items-center gap-7">
            <div className="w-[100px] h-[100px] bg-[#E8B958] rounded-full flex justify-center items-center">
                <img src={icon} width={65} alt={`${title}' s icon`} />
            </div>
            <div className="space-y-1.5">
                <p className="text-[32px] font-semibold text-[#2C2C2C]">{title}</p>
                <p className="text-xl text-[#555555]">{description}</p>
            </div>
        </div>
    );
};
