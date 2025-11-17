import { useRef } from "react";

import leftArrowIcon from "../../../../../assets/svgs/packages/white_angle_arrow_left.svg";
import rightArrowIcon from "../../../../../assets/svgs/packages/white_angle_arrow_right.svg";



export const CategoriesBar = ({
    options,
    selectedValue,
    onSelect
}) => {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    };

    return (
        <div className="flex justify-center items-center h-[56px] w-full min-[750px]:w-[612px]">
            <button
                className="p-2 min-w-[52px] min-h-full rounded-l-lg border-r border-white/10 bg-[#3B3B3B] hover:bg-[#505050] active:bg-[#505050]/75 transition"
                onClick={scrollLeft}
            >
                <img src={leftArrowIcon} alt="left arrow icon" />
            </button>

            <div
                ref={scrollRef}
                className="packages-categories-container flex gap-5 min-h-full bg-[#3B3B3B] overflow-x-auto no-scrollbar px-3 items-center"
                style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
            >
                {options.map(category => (
                    <button
                        key={category}
                        onClick={() => onSelect?.(category)}
                        className={`
                                text-xl font-medium px-6 py-2 shrink-0 rounded-md
                                transition-all duration-300
                                ${selectedValue === category
                                ? "bg-[#F6B15C] text-[#2B2B2B]"
                                : "text-white hover:bg-white/[0.08]"
                            }
                            `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <button
                className="p-2 min-w-[52px] min-h-full rounded-r-lg border-l border-white/10 bg-[#3B3B3B] hover:bg-[#505050] active:bg-[#505050]/75 transition"
                onClick={scrollRight}
            >
                <img src={rightArrowIcon} alt="right arrow icon" />
            </button>
        </div>
    );
};