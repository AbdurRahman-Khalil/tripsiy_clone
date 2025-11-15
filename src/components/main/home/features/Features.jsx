import { Feature } from "./Feature";

import featureImg from "../../../../assets/images/home/features_image.jpg";

import featureIcon1 from "../../../../assets/svgs/home/white_globe.svg";
import featureIcon2 from "../../../../assets/svgs/home/hands_heart.svg";
import featureIcon3 from "../../../../assets/svgs/home/wallet.svg";
import featureIcon4 from "../../../../assets/svgs/home/white_clock.svg";


export const Features = () => {
    const featuresData = [
        {
            id: 1,
            title: "Wide Destinations",
            description: "Explore beautiful places across the world with Tripsiy.",
            icon: featureIcon1,
        },
        {
            id: 2,
            title: "Trusted Service",
            description: "Enjoy safe, smooth, and reliable travel experiences.",
            icon: featureIcon2,
        },
        {
            id: 3,
            title: "Best Price Guarantee",
            description: "Get the best deals and value for every trip.",
            icon: featureIcon3,
        },
        {
            id: 4,
            title: "24/7 Assistance",
            description: "We’re here to help you anytime, anywhere.",
            icon: featureIcon4,
        }
    ];

    
    return (
        <section id="features" className="max-w-[1440px] mx-auto px-8">
            <h2 className="text-4xl font-semibold tracking-[0.5%] text-[#2C2C2C] mt-14 text-center">
                Why Choose Tripsiy
            </h2>
            <div className="flex justify-center items-center gap-16 my-16">
                <div className="w-[550px] h-[664px] rounded-2xl">
                    <img className="max-w-full min-h-full object-cover object-center rounded-2xl" src={featureImg} alt="features image" />
                </div>
                <div className="features-container space-y-10">
                    {
                        featuresData.map(feature => (
                            <Feature
                                key={feature.id}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
