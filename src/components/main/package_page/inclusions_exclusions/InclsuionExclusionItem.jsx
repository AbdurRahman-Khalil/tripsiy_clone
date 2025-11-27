import tickIcon from "../../../../assets/svgs/packages/tick.svg";
import crossIcon from "../../../../assets/svgs/packages/cross.svg";


export const InclsuionExclusionItem = ({ itemText, isInclusion }) => {
    return (
        <div className="flex items-center gap-2 sm:gap-2.5 min-[820px]:gap-4">
            <img
                className="w-[29px] min-[425px]:w-[32px] sm:w-[34.5px] min-[820px]:w-[37px]"
                src={isInclusion ? tickIcon : crossIcon}
                alt={`${isInclusion ? "tick" : "cross"} icon`}
            />
            <p className="text-[1.325rem] min-[425px]:text-[1.375rem] sm:text-[1.425rem] min-[820px]:text-2xl font-medium tracking-[0.5%] text-[#4A4A4A]">{itemText}</p>
        </div>
    );
};
