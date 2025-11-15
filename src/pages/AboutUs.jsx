import { useEffect } from "react";

import { CTA } from "../components/custom/CTA";
import { Hero } from "../components/main/about_us/Hero";
import { Journey } from "../components/main/about_us/Journey";
import { Offers } from "../components/main/about_us/offers/Offers";
import { Features } from "../components/main/about_us/features/Features";


export const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    
    return (
        <div id="about-us">
            <Hero />
            <Journey />
            <Offers />
            <Features />
            <CTA
                heading="Let’s Plan Your Next Adventure Together!"
                description="Trusted by travelers to plan seamless, unforgettable trips."
                buttonDestination="/contact-us"
                buttonText="Contact Us"
            />
        </div>
    );
};
