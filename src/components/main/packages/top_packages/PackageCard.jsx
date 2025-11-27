import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import { Button } from "../../../custom/Button";
import { RenderStars } from "../../../custom/RenderStars";

import generateSlug from "../../../../utils/generateSlug";



export const PackageCard = ({ img, title, shortDescription, duration, price, ratings }) => {
    const sluggedTitle = generateSlug(title);

    return (
        <motion.div
            layout
            initial={{ opacity: 0.33 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.33 }}
            transition={{
                opacity: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                }
            }}
            className="w-[330px] max-[1197px]:w-[320px] max-[1167px]:flex-grow h-fit rounded-2xl bg-[#FFFFFF] shadow-md group border border-black/10 overflow-hidden"
        >
            <Link to={`/packages/${sluggedTitle}`}>
                <div className="w-full h-[271px] rounded-t-2xl shadow-md overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-center rounded-t-2xl group-hover:scale-110 transition duration-200 ease-linear"
                        src={img}
                        alt={`${title}' s image`}
                    />
                </div>
            </Link>
            <div className="text-center px-[1.15em] pt-2.5 pb-5">
                <p className="text-start text-lg font-semibold tracking-[0.5%] text-[#2B2B2B]">{title}</p>
                <p className="text-start text-xs tracking-[0.5%] text-[#777777] mt-0.5">{shortDescription}</p>
                <div className="flex justify-between items-center mt-[1.2em]">
                    <p className="text-sm tracking-[0.5%] text-[#777777]">{duration}</p>
                    <p className="text-[15px] tracking-[0.5%] text-[#777777]">
                        From
                        <span className="font-semibold tracking-[0.5%] text-[#E8B958]"> AED {price}</span>
                    </p>
                </div>
                <RenderStars
                    rating={ratings}
                    className="flex items-center gap-1 mt-3.5 mb-[1.4em]"
                />
                <Button
                    btnDestination={`/packages/${sluggedTitle}`}
                    btnStyles="w-[166px] h-[34px] bg-[#F49C0B] hover:bg-[hsla(37,91%,57%)] rounded-[10px] shadow-md text-[13px] font-semibold tracking-[0.5%] text-white transition duration-200 ease-linear"
                    btnText="View Details"
                />
            </div>
        </motion.div>
    );
};
