import { Link } from "react-router-dom";


export const CategoryCard = ({ icon, title }) => {
    return (
        <Link to={"/packages"}>
            <div className="w-[125px] min-[400px]:w-[140px] min-[491px]:w-[160px] min-[550px]:w-[185px] min-[800px]:max-[949px]:w-[160px]">
                <div className="w-full h-[125px] min-[400px]:h-[140px] min-[491px]:h-[160px] min-[550px]:h-[185px] min-[800px]:max-[949px]:h-[160px] rounded-full bg-gradient-to-br from-[#FFD166] to-[#FFE4B5] flex justify-center items-center">
                    <img className="w-[60px] min-[400px]:w-[70px] min-[491px]:w-[90px] min-[550px]:w-[115px] min-[800px]:max-[949px]:w-[90px]" src={icon} alt={`${title}' s icon`} />
                </div>
                <p
                    className="text-xl font-medium tracking-[0.5%] text-[#333333] text-center mt-5 min-[491px]:mt-7 line-clamp-1"
                >
                    {title}
                </p>
            </div>
        </Link>
    );
};
