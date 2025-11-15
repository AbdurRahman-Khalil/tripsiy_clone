import { Link } from "react-router-dom";

import generateSlug from "../../../../utils/generateSlug";
import { Button } from "../../../custom/Button";


export const FeaturedOffer = ({ title, description, img }) => {
    const sluggedTitle = generateSlug(title);

    return (
        <Link to={`/packages/${sluggedTitle}`}>
            <div className="relative w-[600px] h-[270px] rounded-[20px]">
                <img className="w-full h-full object-cover object-center rounded-[20px]" src={img} alt={`${title}' s image`} />
                <div className="absolute inset-0 flex justify-center items-end bg-gradient-to-r from-[hsla(0,0%,0%,0.45)] to-[hsla(0,0%,0%,0.25)] rounded-[20px]">
                    <div className="text-center">
                        <p className="text-[1.75rem] font-semibold tracking-[0.5%] text-white">{title}</p>
                        <p className="text-lg tracking-[0.5%] text-[#F9E7C0] mt-2 mb-7">{description}</p>
                        <Button
                            btnDestination={`/packages/${sluggedTitle}`}
                            btnStyles="bg-white hover:bg-white/85 transition duration-200 ease-linear w-[121px] h-[44px] rounded-[10px] shadow-md font-bold tracking-[0.5%] text-[#2C2C2C] mb-8"
                            btnText="Book Now"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
};
