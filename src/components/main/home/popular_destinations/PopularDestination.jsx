import { Link } from "react-router-dom";

import { Button } from "../../../custom/Button";

import generateSlug from "../../../../utils/generateSlug";


export const PopularDestination = ({ title, description, img }) => {
    const sluggedTitle = generateSlug(title);

    return (
        <Link to={`/packages/${sluggedTitle}`}>
            <div className="popular-destination group relative w-[360px] max-w-full h-[460px] rounded-2xl overflow-hidden">
                <img
                    className="group-hover:scale-110 max-w-full min-h-full object-cover object-center rounded-2xl transition duration-200 ease-linear"
                    src={img} alt={`${title}' image`}
                />
                <div className="text-white absolute inset-0 rounded-2xl bg-black/30 flex justify-center items-end">
                    <div className="popular-destination-card-text-bg text-center rounded-b-2xl pb-5">
                        <p className="text-[2rem] font-semibold tracking-[0.5%] leading-10">{title}</p>
                        <p className="text-sm font-medium tracking-[0.5%] text-[#F5F5F5] mb-[1.25em]">{description}</p>
                        <Button
                            btnDestination={`/packages/${sluggedTitle}`}
                            btnStyles="w-[186px] h-[41px] bg-[#F49C0B] hover:bg-[#f5ab32] rounded-[10px] shadow-md text-sm font-medium tracking-[0.5%] transition duration-200 ease-linear"
                            btnText="View Packages"
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}
