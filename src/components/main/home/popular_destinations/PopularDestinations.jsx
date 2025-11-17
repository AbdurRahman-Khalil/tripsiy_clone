import useStore from "../../../../store/store";

import { PopularDestination } from "./PopularDestination";


export const PopularDestinations = () => {
    const allPackages = useStore((state) => state.allPackages);

    const findPackageByTitle = (title) =>
        allPackages.find(item => item.titles.some(t => t === title));

    const packageTitles = ["Bali", "Cappadocia", "Paris", "Dubai", "Maldives", "Kyoto"];
    
    const [bali, cappadocia, paris, dubai, maldives, kyoto] = packageTitles.map(findPackageByTitle);

    const popDestinations = [
        {
            id: bali?.id,
            title: bali?.titles[0] || "",
            img: bali?.images[0].url || "",
            description: bali?.short_description || ""
        },
        {
            id: cappadocia?.id,
            title: cappadocia?.titles[0] || "",
            img: cappadocia?.images[0].url || "",
            description: cappadocia?.short_description || ""
        },
        {
            id: paris?.id,
            title: paris?.titles[0] || "",
            img: paris?.images[0].url || "",
            description: paris?.short_description || ""
        },
        {
            id: dubai?.id,
            title: dubai?.titles[0] || "",
            img: dubai?.images[0].url || "",
            description: dubai?.short_description || ""
        },
        {
            id: maldives?.id,
            title: maldives?.titles[0] || "",
            img: maldives?.images[0].url || "",
            description: maldives?.short_description || ""
        },
        {
            id: kyoto?.id,
            title: kyoto?.titles[0] || "",
            img: kyoto?.images[0].url || "",
            description: kyoto?.short_description || ""
        }
    ];


    return (
        <section id="popular-destinations" className="max-w-[1440px] mx-auto px-20 mt-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold tracking-[0.5%] text-black mb-2.5">Popular Destinations</h2>
                <p className="text-lg tracking-[0.5%] text-[#2B2B2B]">Explore the most loved travel spots this season.</p>
            </div>
            <div className="popular-destinations-container flex justify-center flex-wrap gap-10">
                {popDestinations.map(packageItem => (
                    <PopularDestination
                        key={packageItem.id}
                        title={packageItem.title}
                        img={packageItem.img}
                        description={packageItem.description}
                    />
                ))}
            </div>
        </section>
    );
};
