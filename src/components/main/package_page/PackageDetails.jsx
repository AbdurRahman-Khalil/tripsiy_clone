import { RenderStars } from "../../custom/RenderStars";
import { Button } from "../../custom/Button";
import { DaysPlan } from "./days_plan/DaysPlan";
import { InclusionsExclusions } from "./inclusions_exclusions/InclusionsExclusions";
import { Gallery } from "./gallery/Gallery";

import shuffleArray from "../../../utils/shuffleArray";

import clockIcon from "../../../assets/svgs/packages/dgray_clock.svg";
import { BookNow } from "./book_now/BookNow";



export const PackageDetails = ({
    title,
    price,
    ratings,
    duration,
    highlightedPlaces,
    daysPlanList,
    inclusions,
    exclusions,
    galleryImages
}) => {

    const shuffledHighlightedPlaces = shuffleArray(highlightedPlaces);

    const toSentence =
        shuffledHighlightedPlaces.length > 1
            ? shuffledHighlightedPlaces.join(", ")
            : shuffledHighlightedPlaces[0] || "";


    return (
        <section id="package-details" className="bg-[#FAFAFA]">
            <div className="max-w-[1440px] mx-auto px-7 sm:px-10 md:px-20 py-[3.75em]">
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-semibold tracking-[0.3%]">{title}</h2>
                    <p className="text-lg text-[#777777] tracking-[0.5%]">
                        From
                        <span className="text-[22px] font-semibold text-[#E8B958]"> AED {price}</span>
                        /person
                    </p>
                </div>
                <div className="flex justify-between flex-wrap gap-x-24 gap-y-7 mt-6">
                    <div>
                        <RenderStars
                            rating={ratings}
                            className="flex items-center gap-1 mb-3"
                        />
                        <div className="flex gap-2">
                            <img src={clockIcon} alt="clock icon" />
                            <p className="text-[17px] tracking-[0.5%] text-[#777777] mt-0.5">{duration}</p>
                        </div>
                        <p className="text-xl tracking-[0.5%] text-[#777777] mt-2">{toSentence}</p>
                    </div>
                    <Button
                        btnStyles="w-[263px] h-[69px] self-end rounded-[10px] shadow-md bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] text-[22px] font-semibold tracking-[0.5%] text-white transition duration-200 ease-linear"
                        btnText="Book This Package"
                    />
                </div>

                <DaysPlan
                    title={title}
                    daysPlanList={daysPlanList}
                />

                <InclusionsExclusions
                    inclusionsArray={inclusions}
                    exclusionsArray={exclusions}
                />

                <Gallery
                    galleryImages={galleryImages}
                />

                <BookNow />

            </div>
        </section>
    );
};
