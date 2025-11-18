import { NavItem } from "./NavItem";


export const NavbarMenu = ({ direction = "row", gap = "gap-8", onClick }) => {
    const navbarLinks = [
        { title: "Home", dest: "/" },
        { title: "About Us", dest: "/about-us" },
        { title: "Destinations", dest: "/destinations" },
        { title: "Packages", dest: "/packages" },
        { title: "Services", dest: "/services" },
        { title: "Contact Us", dest: "/contact-us" },
    ];

    
    return (
        <ul
            className={`flex ${direction === "col" ? "flex-col items-center gap-5" : "items-center"} ${gap}`}
        >
            {navbarLinks.map((item) => (
                <NavItem
                    key={item.dest}
                    navItemDest={item.dest}
                    navItemTitle={item.title}
                    onClick={onClick}
                />
            ))}
        </ul>
    );
};
