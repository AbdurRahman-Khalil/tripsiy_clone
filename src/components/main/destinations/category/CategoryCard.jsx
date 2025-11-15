import { Link } from "react-router-dom";


export const CategoryCard = ({ icon, title }) => {
    return (
        <Link to={"/packages"}>
            <div className="w-[185px]">
                <div className="w-[185px] h-[185px] rounded-full bg-gradient-to-br from-[#FFD166] to-[#FFE4B5] flex justify-center items-center">
                    <img src={icon} alt={`${title}' s icon`} />
                </div>
                <p className="text-xl font-medium tracking-[0.5%] text-[#333333] text-center mt-7">{title}</p>
            </div>
        </Link>
    );
};
