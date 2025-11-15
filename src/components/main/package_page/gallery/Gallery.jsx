import { useRef } from "react";

import { GalleryItem } from "./GalleryItem";

import shuffleArray from "../../../../utils/shuffleArray";

import leftArrowIcon from "../../../../assets/svgs/packages/white_angle_arrow_left.svg";
import rightArrowIcon from "../../../../assets/svgs/packages/white_angle_arrow_right.svg";



export const Gallery = ({ title, galleryImages }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    };

    const shuffledGallery = shuffleArray(galleryImages);

    const mergedGalleries = [...shuffledGallery, ...shuffledGallery];


    return (
        <div className="gallery mt-12">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2C2C2C] mb-6">Gallery</h3>
            <div className="relative overflow-hidden">
                <button
                    className="absolute -left-2 top-[50%] -translate-y-[50%] z-20 hover:bg-white/25 active:bg-white/[0.17] rounded-r-xl transition duration-200 ease-linear"
                    onClick={scrollLeft}
                >
                    <img src={leftArrowIcon} alt="left arrow icon" />
                </button>
                <div
                    ref={scrollRef}
                    className="flex items-center gap-[1.05em] overflow-x-auto no-scrollbar"
                    style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
                >
                    {
                        mergedGalleries.map(item => (
                            <GalleryItem
                                title={title}
                                galleryImg={item.url}
                            />
                        ))
                    }
                </div>
                <button
                    className="absolute -right-2 top-[50%] -translate-y-[50%] z-20 hover:bg-white/25 active:bg-white/[0.17] rounded-l-xl transition duration-200 ease-linear"
                    onClick={scrollRight}
                >
                    <img src={rightArrowIcon} alt="right arrow icon" />
                </button>
            </div>
        </div>
    );
};
