import orangeDropdownIcon from "../../../../assets/svgs/destinations/orange_angle_arrow_down.svg";
import dGrayDropdownIcon from "../../../../assets/svgs/destinations/dgray_angle_arrow_down.svg";


export const DropdownBtn = ({ filterBtnStyles, btnText, variant }) => {
    const icon = variant === "orange" ? orangeDropdownIcon : dGrayDropdownIcon;
    
    return (
        <button
            className={`region ${filterBtnStyles} flex justify-between items-center backdrop-blur-[8px]`}
        >
            <p className="text-[1.375rem] font-medium tracking-[0.5%]">
                {btnText}
            </p>
            <img src={icon} alt="arrow down icon" />
        </button>
    );
};
