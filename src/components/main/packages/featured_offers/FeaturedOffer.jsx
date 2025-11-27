import { Link } from "react-router-dom";

import { Button } from "../../../custom/Button";

import generateSlug from "../../../../utils/generateSlug";



export const FeaturedOffer = ({ title, description, img }) => {
    const sluggedTitle = generateSlug(title);

    return (
        <Link to={`/packages/${sluggedTitle}`}>
            <div className="relative w-[600px] max-[1343px]:w-[1100px] max-[1243px]:w-[1000px] max-[1129px]:w-[900px] max-[996px]:w-[800px] max-[896px]:w-[700px] max-[796px]:w-[600px] max-[674px]:w-[500px] max-[574px]:w-[400px] max-[474px]:w-[350px] max-[399px]:w-[325px] max-[379px]:w-[310px] h-[270px] max-[1343px]:h-[330px] max-[474px]:h-[350px] max-[379px]:h-[385px] rounded-[20px] transition-all duration-200 ease-linear">
                <img className="w-full h-full object-cover object-center rounded-[20px]" src={img} alt={`${title}' s image`} />
                <div className="absolute inset-0 flex justify-center items-end bg-gradient-to-r from-[hsla(0,0%,0%,0.45)] to-[hsla(0,0%,0%,0.25)] rounded-[20px]">
                    <div className="text-center mx-5 max-[896px]:mx-12">
                        <p className="text-[1.75rem] max-[674px]:text-[1.7rem] max-[474px]:text-[1.65rem] font-semibold tracking-[0.5%] text-white">
                            {title}
                        </p>
                        <p className="text-lg max-[674px]:text-base max-[474px]:text-sm tracking-[0.5%] text-[#F9E7C0] mt-2 mb-7 text-pretty">
                            {description}
                        </p>
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
