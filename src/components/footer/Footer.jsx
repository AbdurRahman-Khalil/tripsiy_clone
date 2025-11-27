import { Logo } from "../header/Logo";
import { FooterLink } from "./FooterLink";

import locationIcon from "../../assets/svgs/home/dgray_location.svg";
import phoneIcon from "../../assets/svgs/home/dgray_phone.svg";
import mailIcon from "../../assets/svgs/home/dgray_mail.svg";
import facebookIcon from "../../assets/svgs/home/orange_facebook.svg";
import instagramIcon from "../../assets/svgs/home/orange_instagram.svg";
import whatsappIcon from "../../assets/svgs/home/orange_whatsapp.svg";


export const Footer = () => {

    return (
        <footer id="footer" className="footer-bg-gradient pt-20 max-[510px]:pt-16">
            <div
                className="footer-top max-w-[1440px] mx-auto px-7 min-[431px]:px-10 sm:px-12 flex justify-between sm:justify-center items-start flex-wrap gap-x-32 lg:gap-x-36 gap-y-12 min-[511px]:gap-y-16 min-[610px]:max-[914px]:gap-y-24"
            >
                <div className="self-center">
                    <Logo logoSize={115} />
                    <p className="text-sm font-medium tracking-[0.5%] text-[#5A4B3C] mt-3">
                        Your trusted travel partner for <br /> unforgettable adventures.
                    </p>
                </div>
                <div>
                    <p className="font-bold tracking-[0.5%] text-[#2B2B2B]">Quick Links</p>
                    <ul className="mt-8 max-[510px]:mt-5 space-y-2.5">
                        <FooterLink
                            destination="/"
                            linkText="Home"
                        />
                        <FooterLink
                            destination="/about-us"
                            linkText="About Us"
                        />
                        <FooterLink
                            destination="/destinations"
                            linkText="Destinations"
                        />
                        <FooterLink
                            destination="/packages"
                            linkText="Packages"
                        />
                        <FooterLink
                            destination="/services"
                            linkText="Services"
                        />
                        <FooterLink
                            destination="/contact-us"
                            linkText="Contact Us"
                        />
                    </ul>
                </div>
                <div>
                    <p className="font-bold tracking-[0.5%] text-[#2B2B2B]">Contact Us</p>
                    <address className="mt-8 max-[510px]:mt-5 space-y-5">
                        <div className="flex items-center gap-2">
                            <img src={locationIcon} alt="locatioin icon" />
                            <p className="text-sm tracking-[0.5%] text-[#6B5E4A] not-italic">Office 204, Downtown Dubai, UAE</p>
                        </div>
                        <a href="tel:+971 55 123 4567" className="flex items-center gap-2 hover:underline">
                            <img src={phoneIcon} alt="phone icon" />
                            <span className="text-sm tracking-[0.5%] text-[#6B5E4A] not-italic">+971 55 123 4567</span>
                        </a>
                        <a href="mailto:info@tripsiy.com" className="flex items-center gap-2 hover:underline">
                            <img src={mailIcon} alt="mail icon" />
                            <span className="text-sm tracking-[0.5%] text-[#6B5E4A] not-italic"> info@tripsiy.com</span>
                        </a>
                    </address>
                </div>
                <div>
                    <p className="font-bold tracking-[0.5%] text-[#2B2B2B]">Follow Us</p>
                    <div className="mt-5 max-[510px]:mt-4 flex items-center gap-3.5 -ml-1">
                        <a
                            href="https://web.facebook.com"
                            className="hover:scale-110 hover:rotate-[25deg] transition-all duration-200 ease-linear"
                        >
                            <img src={facebookIcon} alt="facebook icon" />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            className="hover:scale-110 hover:rotate-[-25deg] transition-all duration-200 ease-linear"
                        >
                            <img src={instagramIcon} alt="instagram icon" />
                        </a>
                        <a
                            href="https://web.whatsapp.com"
                            className="hover:scale-110 hover:rotate-[25deg] transition-all duration-200 ease-linear"
                        >
                            <img src={whatsappIcon} alt="whatsapp icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-[#7A6A52] h-[1px] mt-12"></div>
            <div className="footer-bottom text-center py-5">
                <p className="text-sm font-medium tracking-[0.5%] text-[#7A6A52]">© 2025 Tripsiy. All rights reserved.</p>
            </div>
        </footer>
    );
};
