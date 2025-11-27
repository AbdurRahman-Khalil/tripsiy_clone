import { Link } from "react-router-dom";

import generateSlug from "../../../../utils/generateSlug";


export const FeaturedDestination = ({ img, title }) => {
    const sluggedTitle = generateSlug(title);

    return (
        <div className="w-[360px] max-[1287px]:w-[350px] max-[1241px]:w-[340px] max-[1211px]:flex-grow h-[460px] rounded-2xl shadow-lg group relative overflow-hidden">
            <img
                className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-110 transition duration-200 ease-linear"
                src={img}
                alt={`${title}' s image`}
            />
            <Link to={`/packages/${sluggedTitle}`}>
                <div className="featured-destination-card-text-bg absolute inset-0 flex justify-center items-end bg-[hsla(0,0%,0%,0.2)] group-hover:bg-[hsla(0,0%,0%,0)] transition duration-200 ease-linear">
                    <h3 className="text-[2rem] font-semibold tracking-[0.5%] text-white mb-12">{title}</h3>
                </div>
            </Link>
        </div>
    );
};
