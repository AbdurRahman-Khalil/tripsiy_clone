import { NavLink } from "react-router-dom";


export const NavItem = ({ navItemDest, navItemTitle }) => {
    return (
        <li>
            <NavLink
                to={navItemDest}
                className={({ isActive }) =>
                    `font-medium transition duration-200 ease-linear 
                        ${isActive ? "text-[#F49C0B]" : "text-[#0B0A0A] hover:text-[#F49C0B]"
                    }`
                }
            >
                {navItemTitle}
            </NavLink>
        </li>
    );
};
