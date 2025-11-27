import { useState, useRef, useEffect } from "react";

import orangeDropdownIcon from "../../../../assets/svgs/destinations/orange_angle_arrow_down.svg";
import dGrayDropdownIcon from "../../../../assets/svgs/destinations/dgray_angle_arrow_down.svg";



export const DropdownMenu = ({
    filterBtnStyles,
    btnText,
    variant,
    options,
    onSelect,
    selectedValue
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const icon = variant === "orange" ? orangeDropdownIcon : dGrayDropdownIcon;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const handleSelectOption = (option) => {
        onSelect?.(option);
        setIsOpen(false);
    };


    return (
        <div className="relative" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                className={`region ${filterBtnStyles} flex justify-between items-center ${isOpen ? "ring-2 ring-[#F49C0B]" : ""
                    } transition-all duration-200`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-[1.165rem] min-[431px]:text-[1.225rem] min-[672px]:text-[1.275rem] min-[846px]:text-[1.375rem] font-medium tracking-[0.5%] truncate">
                    {/* {Dropdown Button} */}
                    {selectedValue || btnText}
                </p>
                <img
                    src={icon}
                    alt="arrow down icon"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180 mb-1" : ""}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && options.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 z-50">
                    <div className="bg-[#D9D9D9]/80 border border-[#505050] rounded-lg shadow-lg overflow-hidden backdrop-blur-[16px]">
                        <div
                            className="text-[15px] min-[431px]:text-[15.25px] min-[672px]:text-[15.5px] min-[846px]:text-base p-3 hover:bg-gray-100 cursor-pointer text-gray-500 italic border-b border-[#505050]"
                            onClick={() => handleSelectOption('')}
                        >
                            All {btnText}s
                        </div>
                        {options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelectOption(option)}
                                className={`w-full text-left px-4 py-3 text-[1.075rem] min-[431px]:text-[1.09rem] min-[672px]:text-[1.115rem] min-[846px]:text-[1.125rem] font-medium tracking-[0.5%] transition-all duration-200
                                    ${selectedValue === option
                                        ? "bg-[hsl(33,90%,70%)] text-[#2B2B2B]"
                                        : "text-[#2B2B2B] hover:bg-white/55"
                                    }
                                    ${index !== options.length - 1 ? "border-b border-[#505050]" : ""}
                                `}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

