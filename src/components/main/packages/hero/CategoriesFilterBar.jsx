import { useRef, useState } from "react";

import { DropdownBtn } from "../../destinations/packages_filter/DropdownBtn";

import leftArrowIcon from "../../../../assets/svgs/packages/white_angle_arrow_left.svg";
import rightArrowIcon from "../../../../assets/svgs/packages/white_angle_arrow_right.svg";


export const CategoriesFilterBar = () => {
    const [activeCategory, setActiveCategory] = useState("Luxury");
    const scrollRef = useRef(null);

    const categories = ["Luxury", "Adventure", "Family", "Honeymoon", "Nature", "Cultural"];

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    };


    return (
        <div className="packages-filters flex justify-center items-center gap-x-16 gap-y-10 flex-wrap min-h-[137px] bg-gradient-to-r from-[#242424] to-[#2B2B2B] text-white px-16 py-12">
            {/* Category Filter */}
            <div className="flex justify-center items-center h-[56px] w-[612px]">
                <button
                    className="p-2 min-h-full rounded-l-lg border-r border-white/10 bg-[#3B3B3B] hover:bg-[#505050] active:bg-[#505050]/75 transition"
                    onClick={scrollLeft}
                >
                    <img src={leftArrowIcon} alt="left arrow icon" />
                </button>
                <div
                    ref={scrollRef}
                    className="packages-categories-container flex gap-5 min-h-full bg-[#3B3B3B] overflow-x-auto no-scrollbar px-3 items-center"
                    style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                >
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                text-xl font-medium px-6 py-2 shrink-0 rounded-md
                                transition-all duration-300
                                ${activeCategory === category
                                    ? "bg-[#F6B15C] text-[#2B2B2B]"
                                    : "text-white hover:bg-white/[0.06]"
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button
                    className="p-2 min-h-full rounded-r-lg border-l border-white/10 bg-[#3B3B3B] hover:bg-[#505050] active:bg-[#505050]/75 transition"
                    onClick={scrollRight}
                >
                    <img src={rightArrowIcon} alt="right arrow icon" />
                </button>
            </div>

            {/* Region Filter */}
            <DropdownBtn
                filterBtnStyles="w-[175px] h-[56px] rounded-lg bg-[#3B3B3B] pr-3 pl-[1.3em]"
                btnText="Region"
                variant="orange"
            />
            {/* Price Range Filter */}
            <DropdownBtn
                filterBtnStyles="w-[235px] h-[56px] rounded-lg bg-[#3B3B3B] pr-3 pl-[1.325em]"
                btnText="Price Range"
                variant="orange"
            />
        </div>
    );
};
