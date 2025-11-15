import tickIcon from "../../../../assets/svgs/packages/tick.svg";
import crossIcon from "../../../../assets/svgs/packages/cross.svg";


export const InclsuionExclusionItem = ({ itemText, isInclusion }) => {
    return (
        <div className="flex items-center gap-4">
            <img
                src={isInclusion ? tickIcon : crossIcon}
                alt={`${isInclusion ? "tick" : "cross"} icon`}
            />
            <p className="text-2xl font-medium tracking-[0.5%] text-[#4A4A4A]">{itemText}</p>
        </div>
    );
};
