import { CategoryCard } from "./CategoryCard";

import cateIcon1 from "../../../../assets/svgs/destinations/adventure.svg";
import cateIcon2 from "../../../../assets/svgs/destinations/luxury.svg";
import cateIcon3 from "../../../../assets/svgs/destinations/family.svg";
import cateIcon4 from "../../../../assets/svgs/destinations/outlined_heart.svg";
import cateIcon5 from "../../../../assets/svgs/destinations/nature.svg";
import cateIcon6 from "../../../../assets/svgs/destinations/cultural.svg";


export const Categories = () => {

    const categoriesData = [
        {
            id: 1,
            icon: cateIcon1,
            cardTitle: "Adventure Trips"
        },
        {
            id: 2,
            icon: cateIcon2,
            cardTitle: "Luxury Escapes"
        },
        {
            id: 3,
            icon: cateIcon3,
            cardTitle: "Family Vacations"
        },
        {
            id: 4,
            icon: cateIcon4,
            cardTitle: "Honeymoon Specials"
        },
        {
            id: 5,
            icon: cateIcon5,
            cardTitle: "Nature Retreats"
        },
        {
            id: 6,
            icon: cateIcon6,
            cardTitle: "Cultural Tours"
        },
    ];


    return (
        <section id="destinations-categories" className="max-w-[1440px] mx-auto px-20 min-[1500px]:px-32 pt-[4.5em] pb-[6em]">
            <h2 className="text-4xl font-semibold tracking-[0.5%] text-center ">
                Explore by Category
            </h2>
            <div className="destinations-categories-container flex justify-center items-center flex-wrap gap-x-40 gap-y-[4.25em] mt-[4.25em]">
                {
                    categoriesData.map(cat => (
                        <CategoryCard 
                            key={cat.id}
                            icon={cat.icon}
                            title={cat.cardTitle}
                        />
                    ))
                }
            </div>
        </section>
    );
};
