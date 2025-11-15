import { Feature } from "./Feature";

import featureIcon1 from "../../../../assets/svgs/about_us/trust.svg";
import featureIcon2 from "../../../../assets/svgs/about_us/diamond.svg";
import featureIcon3 from "../../../../assets/svgs/about_us/hand_bag.svg";


export const Features = () => {
    const featuresData = [
        {
            id: 1,
            icon: featureIcon1,
            title: "Trusted Expertise",
            description: "Backed by years of travel expertise, we take pride in curating flawless itineraries that bring your dream destinations to life.",
        },
        {
            id: 2,
            icon: featureIcon2,
            title: "Affordable Luxury",
            description: "Experience the comfort of premium travel without breaking the bank — we bring you the best stays, flights, and experiences at the most reasonable prices.",
        },
        {
            id: 3,
            icon: featureIcon3,
            title: "Seamless Experience",
            description: "From planning to booking and beyond, we take care of every detail so you can relax, explore, and enjoy your trip without a single worry.",
        },
    ];


    return (
        <section id="about-features" className="max-w-[1440px] mx-auto px-20 py-[4.5em]">
            <h2 className="text-4xl font-semibold tracking-[0.3%] text-[#2B2B2B] text-center">Why Choose Us</h2>
            <div className="features-container flex justify-center items-center gap-24 mt-14">
                {
                    featuresData.map(featureItem => (
                        <Feature
                            key={featureItem.id}
                            icon={featureItem.icon}
                            title={featureItem.title}
                            description={featureItem.description}
                        />
                    ))
                }
            </div>
        </section>
    );
};
