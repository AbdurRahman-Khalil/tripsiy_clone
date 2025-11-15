import offerImg1 from "../../../../assets/svgs/about_us/aeroplane.svg";
import offerImg2 from "../../../../assets/svgs/about_us/hotel.svg";
import offerImg3 from "../../../../assets/svgs/about_us/bus.svg";
import offerImg4 from "../../../../assets/svgs/about_us/sunrise.svg";
import offerImg5 from "../../../../assets/svgs/about_us/compass.svg";
import offerImg6 from "../../../../assets/svgs/about_us/orange_globe.svg";
import { Offer } from "./Offer";


export const Offers = () => {
    const offersData = [
        {
            id: 1,
            icon: offerImg1,
            title: "Custom Travel Packages",
            description: "Personalized itineraries designed around your preferences, budget, and dream destinations."
        },
        {
            id: 2,
            icon: offerImg2,
            title: "Hotel & Flight Booking",
            description: "Seamless booking experiences with trusted global partners for comfort and convenience."
        },
        {
            id: 3,
            icon: offerImg3,
            title: "Guided Tours",
            description: "Expert-led tours that let you explore destinations deeply, safely, and stress-free."
        },
        {
            id: 4,
            icon: offerImg4,
            title: "Honeymoon Getaways",
            description: "Romantic escapes crafted to create unforgettable moments with your special someone."
        },
        {
            id: 5,
            icon: offerImg5,
            title: "Adventure Trips",
            description: "Thrilling outdoor journeys for explorers who crave excitement and new challenges."
        },
        {
            id: 6,
            icon: offerImg6,
            title: "International Destinations",
            description: "Discover handpicked locations across the globe, curated for every kind of traveler."
        }
    ];


    return (
        <section id="about-offers" className="max-w-[1440px] mx-auto bg-[#FFF6EC] px-20 py-[4.5em]">
            <h2 className="text-4xl font-semibold tracking-[0.3%] text-[#2B2B2B] text-center">What We Offer</h2>
            <div className="offers-container flex justify-center items-center flex-wrap gap-x-14 gap-y-20 mt-16">
                {
                    offersData.map(offer => (
                        <Offer
                            key={offer.id}
                            icon={offer.icon}
                            title={offer.title}
                            description={offer.description}
                        />
                    ))
                }
            </div>
        </section>
    );
};
