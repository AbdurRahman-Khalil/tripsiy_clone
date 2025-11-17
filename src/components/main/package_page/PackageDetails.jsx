import { RenderStars } from "../../custom/RenderStars";
import { Button } from "../../custom/Button";
import { DaysPlan } from "./days_plan/DaysPlan";
import { InclusionsExclusions } from "./inclusions_exclusions/InclusionsExclusions";
import { Gallery } from "./gallery/Gallery";
import { BookNow } from "./book_now/BookNow";
import { YouMightLike } from "./you_might_like/YouMightLike";

import shuffleArray from "../../../utils/shuffleArray";

import clockIcon from "../../../assets/svgs/packages/dgray_clock.svg";



export const PackageDetails = ({
    id,
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

    // Scroll down to Book Now Form
    const handleClick = () => {
        const bookNowForm = document.getElementById("book-now-form");
        const offset = 100;

        const elementPosition = bookNowForm.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
        });
    };


    return (
        <section id="package-details" className="bg-[#FAFAFA]">
            <div className="max-w-[1440px] mx-auto px-7 sm:px-10 md:px-16 py-[3.75em]">
                <div className="flex justify-between items-center max-[660px]:flex-col max-[660px]:items-start max-[660px]:gap-y-5">
                    <h2 className="text-4xl font-semibold tracking-[0.3%]">{title}</h2>
                    <p className="text-lg text-[#777777] tracking-[0.5%]">
                        From
                        <span className="text-[22px] font-semibold text-[#E8B958]"> AED {price}</span>
                        /person
                    </p>
                </div>
                <div className="flex justify-between max-[859px]:flex-wrap gap-x-32 gap-y-6 mt-6">
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
                        btnStyles="min-w-[263px] h-[69px] self-end rounded-[10px] shadow-md bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] text-[22px] font-semibold tracking-[0.5%] text-white transition duration-200 ease-linear"
                        btnText="Book This Package"
                        onClick={handleClick}
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

                <BookNow
                    packageId={id}
                    packageTitle={title}
                    packagePrice={price}
                />

                <YouMightLike />
            </div>
        </section>
    );
};
