import { NavLink } from "react-router-dom";


export const NavItem = ({ navItemDest, navItemTitle, onClick }) => {
    return (
        <li onClick={onClick}>
            <NavLink
                to={navItemDest}
                className={({ isActive }) =>
                    `transition duration-200 ease-linear 
                        ${isActive
                        ? "text-[#F49C0B] font-semibold"
                        : "text-[#0B0A0A] hover:text-[#F49C0B] font-medium"
                    }`
                }
            >
                {navItemTitle}
            </NavLink>
        </li>
    );
};
