import { ServiceCard } from "./ServiceCard";

import serviceIcon1 from "../../../assets/svgs/services/aeroplane.svg";
import serviceIcon2 from "../../../assets/svgs/services/hotel.svg";
import serviceIcon3 from "../../../assets/svgs/services/visa.svg";
import serviceIcon4 from "../../../assets/svgs/services/orange_globe.svg";
import serviceIcon5 from "../../../assets/svgs/services/airport.svg";


export const ServicesContainer = () => {
    
    const servicesData = [
        {
            id: 1,
            icon: serviceIcon1,
            title: "Flight Bookings",
            description: "Find the best flight deals to destinations around the world. We handle bookings, re-scheduling, and exclusive offers."
        },
        {
            id: 2,
            icon: serviceIcon2,
            title: "Hotel Reservations",
            description: "Choose from handpicked hotels and resorts that fit your style and budget. We ensure comfort, safety, and convenience wherever you go."
        },
        {
            id: 3,
            icon: serviceIcon3,
            title: "Visa Assistance",
            description: "We simplify the visa process by guiding you through documents, requirements, and applications — hassle-free travel guaranteed."
        },
        {
            id: 4,
            icon: serviceIcon4,
            title: "Custom Travel Plans",
            description: "Get personalized itineraries designed around your interests — adventure, luxury, or relaxation and relaxation and relaxation."
        },
        {
            id: 5,
            icon: serviceIcon5,
            title: "Airport Transfers",
            description: "Reliable pickups and drop-offs so you start and end your trip stress-free. From solo travelers to groups, we’ve got you covered."
        }
    ];


    return (
        <section
            id="services-container"
            className="max-w-[1440px] mx-auto flex justify-center items-center flex-wrap gap-x-10 gap-y-[4.5em] max-[1050px]:gap-y-[3em] md:max-[1050px]:gap-x-11 max-[767px]:gap-y-[2.85em] max-[569px]:gap-y-[2.65em] max-[430px]:gap-y-[2.5em] max-[389px]:gap-y-[2.3em] px-6 min-[431px]:px-9 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28"
        >
            {
                servicesData.map(service => (
                    <ServiceCard
                        key={service.id}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))
            }
        </section>
    );
};
