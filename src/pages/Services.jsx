import { useEffect } from "react";

import { Hero } from "../components/main/services/Hero";
import { ServicesContainer } from "../components/main/services/ServicesContainer";


export const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id="services">
            <Hero />
            <ServicesContainer />
        </div>
    );
};
