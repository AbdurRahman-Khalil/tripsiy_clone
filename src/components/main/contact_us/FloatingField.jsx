import { useState } from "react";

import arrowDownIcon from "../../../assets/svgs/packages/lgray_angle_arrow_down.svg";


export const FloatingField = ({
    fieldStyles,
    label,
    type = "text",
    name,
    textarea = false,
    value,
    setValue,
}) => {

    const [focused, setFocused] = useState(false);

    return (
        <div className="relative group">

            {textarea ? (
                <textarea
                    className="peer w-full h-[176px] pl-5 pt-8 resize-none rounded-lg text-[18px] sm:text-[19px] min-[820px]:text-xl bg-[#F7F6F6]/[0.22] 
                        ring-1 ring-[#000000]/[0.19] shadow outline-none 
                        focus:ring-2 focus:ring-[hsl(39,79%,50%)] transition-all duration-200 ease-linear"
                    placeholder=""
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            ) : (
                <input
                    className={`peer ${fieldStyles} rounded-lg text-[18px] sm:text-[19px] min-[820px]:text-xl bg-[#F7F6F6]/[0.22] 
                        ring-1 ring-[#000000]/[0.19] shadow outline-none 
                        focus:ring-2 focus:ring-[hsl(39,79%,50%)] transition-all duration-200 ease-linear`}
                    type={type}
                    name={name}
                    placeholder=""
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            )}

            <label
                className={`absolute transition-all duration-200 ease-linear pointer-events-none 
                    ${focused || value
                        ? type === "date"
                            ? "top-4"
                            : `top-2.5 text-[13.25px] min-[820px]:text-sm text-[hsl(39,79%,50%)] ${textarea && "bg-[#FDFDFD]"}`
                        : textarea
                            ? "top-3.5 text-[18px] sm:text-[19px] min-[820px]:text-xl text-black/40"
                            : type === "date"
                                ? "top-4"
                                : "top-1/2 -translate-y-1/2 text-[18px] sm:text-[19px] min-[820px]:text-xl text-black/40"
                    }
                    ${type === "date"
                        ? "right-2.5"
                        : "left-5"
                    }
                `}
            >
                {
                    type === "date"
                        ? <img className="w-[42px] sm:w-[45px] min-[820px]:w-[53px]" src={arrowDownIcon} alt="arrow down icon" />
                        : label
                }
            </label>
        </div>
    );
};
