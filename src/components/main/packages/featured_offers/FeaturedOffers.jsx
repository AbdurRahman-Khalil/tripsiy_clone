import useStore from "../../../../store/store";

import { FeaturedOffer } from "./FeaturedOffer";



export const FeaturedOffers = () => {
    const allPackages = useStore((state) => state.allPackages);

    const findPackageByTitle = (title) =>
        allPackages.find(item => item.titles.some(t => t === title));

    const packageTitles = ["Greece", "Maldives"];

    const [greece, maldives] = packageTitles.map(findPackageByTitle);

    const featOffers = [
        {
            id: greece?.id,
            title: greece?.titles[2] || "",
            description: greece?.description,
            img: greece?.images[1].url || "",
        },
        {
            id: maldives?.id,
            title: maldives?.titles[2] || "",
            description: maldives?.description,
            img: maldives?.images[1].url || "",

        },
    ];

    
    return (
        <section
            id="packages-featured-offers"
            className="px-6 min-[431px]:px-9 md:px-12 lg:px-[3.5em] pt-[3.75em] pb-[4em]"
        >
            <h2 className="text-[1.95rem] min-[431px]:text-[2.1rem] md:text-4xl font-semibold tracking-[0.5%] text-center">
                Featured Offers
            </h2>
            <div className="packages-featured-offers-container flex justify-center items-center flex-wrap gap-8 max-[1343px]:gap-10 max-[399px]:gap-9 mt-12 min-[431px]:mt-14 md:mt-16">
                {
                    featOffers.map(featOffer => (
                        <FeaturedOffer
                            key={featOffer.id}
                            title={featOffer.title}
                            description={featOffer.description}
                            img={featOffer.img}
                        />
                    ))
                }
            </div>
        </section>
    );
};
