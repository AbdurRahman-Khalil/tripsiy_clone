import { Link } from "react-router-dom";


export const FooterLink = ({ destination, linkText }) => {
    return (
        <li className="w-fit mx-auto max-[510px]:mx-0 hover:scale-105 transition-all duration-200 ease-linear">
            <Link
                to={destination}
                className="text-sm font-medium hover:font-semibold tracking-[0.5%] text-[#6B5E4A] transition-all duration-200 ease-linear"
            >
                {linkText}
            </Link>
        </li>
    );
};
