import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarActions } from "./NavbarActions";
import { AnimatedHamburger } from "./AnimatedHamburger";



export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const scrollHandler = () => setNavbar(window.scrollY > 50);
        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);


    return (
        <nav
            id="navbar"
            className={`max-w-[1440px] mx-auto
                ${navbar ? "h-[75px]" : "h-[100px]"} 
                transition-all duration-200 ease-linear flex justify-between items-center px-5
            `}
        >
            <Logo logoSize={131} />

            {/* Desktop Menu */}
            <div className="hidden min-[1110px]:flex">
                <NavbarMenu />
            </div>

            {/* Desktop Actions */}
            {/* <div className="hidden min-[1110px]:flex"> */}
            <NavbarActions />
            {/* </div> */}

            {/* Mobile Hamburger */}
            <div className="min-[1110px]:hidden">
                <AnimatedHamburger
                    open={menuOpen}
                    onToggle={() => setMenuOpen((prev) => !prev)}
                />
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`min-[1110px]:hidden fixed left-0 w-full bg-white transition-all duration-300 py-10
                    ${navbar ? "top-[75px]" : "top-[100px]"} shadow-md
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
                `}
            >
                <NavbarMenu direction="col" gap="gap-8" onClick={() => setMenuOpen(false)} />
                {/* <div className="mt-4 pb-6 flex flex-col items-center gap-4">
                    <NavbarActions direction="col" center />
                </div> */}
            </div>
        </nav>
    );
};
