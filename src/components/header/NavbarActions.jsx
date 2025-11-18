import { Button } from "../custom/Button";

import searchIcon from "../../assets/svgs/home/search_icon.svg";


export const NavbarActions = () => {
    return (
        <div
            className="flex items-center gap-9 max-[1109px]:ml-auto max-[1109px]:ml-auto max-[1109px]:mr-7 max-[439px]:hidden"
        >
            <button className="max-[494px]:hidden">
                <img src={searchIcon} alt="search icon" />
            </button>
            <Button
                btnDestination="/packages"
                btnStyles="w-[121px] h-[44px] rounded-[10px] bg-[#F49C0B] hover:bg-[hsl(37,91%,59%)] shadow-md font-bold leading-[100%] tracking-[0.5%] text-white transition duration-200 ease-linear"
                btnText="Book now"
            />
        </div>
    );
};
