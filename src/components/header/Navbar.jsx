import { useState } from "react";

import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Button } from "../custom/Button";

import searchIcon from "../../assets/svgs/home/search_icon.svg";


export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            setNavbar(true)

        } else {
            setNavbar(false);
        }
    });
    

    return (
        <nav id="navbar" className={`max-w-[1440px] ${navbar ? "h-[75px]" : "h-[100px]"} transition-all duration-200 ease-linear mx-auto flex justify-between items-center`}>
            <Logo logoSize={131} />
            <ul className="flex items-center gap-8">
                <NavItem navItemDest="/" navItemTitle="Home" />
                <NavItem navItemDest="/about-us" navItemTitle="About Us" />
                <NavItem navItemDest="/destinations" navItemTitle="Destinations" />
                <NavItem navItemDest="/packages" navItemTitle="Packages" />
                <NavItem navItemDest="/services" navItemTitle="Services" />
                <NavItem navItemDest="/contact-us" navItemTitle="Contact Us" />
            </ul>

            <div className="flex items-center gap-16">
                <button>
                    <img src={searchIcon} alt="search icon" />
                </button>
                <Button
                    btnStyles="w-[121px] h-[44px] rounded-[10px] bg-[#F49C0B] hover:bg-[hsl(37,91%,59%)] shadow-md font-bold leading-[100%] tracking-[0.5%] text-white transition duration-200 ease-linear"
                    btnText="Book now"
                />
            </div>
        </nav>
    );
};
