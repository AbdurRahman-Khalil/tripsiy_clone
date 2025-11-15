import { useEffect } from "react";

import { Hero } from "../components/main/packages/hero/Hero";
import { TopPackages } from "../components/main/packages/top_packages/TopPackages";
import { FeaturedOffers } from "../components/main/packages/featured_offers/FeaturedOffers";
import { CTA } from "../components/custom/CTA";


export const Packages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id="packages">
            <Hero />
            <TopPackages />
            <FeaturedOffers />
            <CTA
                heading="Need help choosing your next destination?"
                description="Get expert recommendations tailored just for you."
                buttonText="Talk to Expert"
            />
        </div>
    );
};
