import { useEffect } from "react";

import { Hero } from "../components/main/destinations/Hero";
import { AllDestinations } from "../components/main/destinations/AllDestinations";
import { FeaturedDestinations } from "../components/main/destinations/features_destinations/FeaturedDestinations";
import { Categories } from "../components/main/destinations/category/Categories";
import { CTA } from "../components/custom/CTA";


export const Destinations = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id="destinations">
            <Hero />
            <AllDestinations />
            <FeaturedDestinations />
            <Categories />
            <CTA 
                heading="Found your dream destination?"
                description="Let’s make it happen — plan your trip now."
                buttonText="Start Planning"
            />
        </div>
    );
};
