import { useEffect } from "react";

import { Hero } from "../components/main/home/Hero";
import { PopularDestinations } from "../components/main/home/popular_destinations/PopularDestinations";
import { FeaturedPackages } from "../components/main/home/featured_packages/FeaturedPackages";
import { Features } from "../components/main/home/features/Features";
import { Testimonials } from "../components/main/home/testimonials/Testimonials";
import { CTA } from "../components/custom/CTA";


export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    
    return (
        <div id="home">
            <Hero />
            <PopularDestinations />
            <FeaturedPackages />
            <Features />
            <Testimonials />
            <CTA
                heading="Ready for your next adventure?"
                description="Plan your dream trip with expert guidance and unbeatable deals."
                buttonText="Start Planning Now"
            />
        </div>
    );
};
