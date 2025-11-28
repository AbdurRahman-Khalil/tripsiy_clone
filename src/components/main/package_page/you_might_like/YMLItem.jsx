import { Link } from "react-router-dom";

import { Button } from "../../../custom/Button";

import generateSlug from "../../../../utils/generateSlug";



export const YMLItem = ({ img, title, duration, price }) => {
    const sluggedTitle = generateSlug(title);

    return (
        <div className="w-[320px] max-[1159px]:w-[310px] max-[1129px]:flex-grow shadow-lg rounded-2xl group">
            <Link to={`/packages/${sluggedTitle}`}>
                <div className="w-full h-[271px] rounded-t-2xl shadow-md overflow-hidden">
                    <img
                        className="w-full min-h-full group-hover:scale-110 object-cover rounded-t-2xl transition duration-200 ease-linear"
                        src={img} alt={`${title}' s image`}
                    />
                </div>
            </Link>
            <div className="pt-2.5 px-[1.15em] pb-4">
                <p className="text-lg font-semibold tracking-[0.5%] text-[#2B2B2B]">{title}</p>
                <p className="text-xs tracking-[0.5%] text-[#777777]">{duration}</p>
                <p className="tracking-[0.5%] text-[#777777] mt-4 mb-2">
                    Starting from
                    <span className="font-semibold tracking-[0.5%] text-[#E8B958]"> AED {price}</span>
                </p>
                <div className="text-center">
                    <Button
                        btnDestination={`/packages/${sluggedTitle}`}
                        btnStyles="w-[166px] h-[34px] rounded-[10px] bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] shadow text-[13px] font-semibold tracking-[0.5%] text-white transition duration-200 ease-linear"
                        btnText="View Details"
                    />
                </div>
            </div>
        </div>
    );
};
