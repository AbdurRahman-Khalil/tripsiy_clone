import useStore from "../../../../store/store";

import { FeaturedPackage } from "./FeaturedPackage";



export const FeaturedPackages = () => {
    const allPackages = useStore((state) => state.allPackages);

    const findPackageByTitle = (title) =>
        allPackages.find(item => item.titles.some(t => t === title));

    const packageTitles = ["Dubai", "Bali", "Cappadocia", "Greece"];

    const [dubai, bali, cappadocia, greece] = packageTitles.map(findPackageByTitle);

    const featPackages = [
        {
            id: dubai?.id,
            title: dubai?.titles[1] || "",
            img: dubai?.images[1].url || "",
            duration: dubai?.about.duration || "",
            price: dubai?.price || ""
        },
        {
            id: bali?.id,
            title: bali?.titles[1] || "",
            img: bali?.images[1].url || "",
            duration: bali?.about.duration || "",
            price: bali?.price || ""
        },
        {
            id: cappadocia?.id,
            title: cappadocia?.titles[1] || "",
            img: cappadocia?.images[1].url || "",
            duration: cappadocia?.about.duration || "",
            price: cappadocia?.price || ""
        },
        {
            id: greece?.id,
            title: greece?.titles[1] || "",
            img: greece?.images[0].url || "",
            duration: greece?.about.duration || "",
            price: greece?.price || ""
        },
    ];


    return (
        <section
            id="featured-packages"
            className="bg-[#FAFAFA] px-6 min-[431px]:px-9 sm:px-14 pt-12 pb-16 mt-14"
        >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Featured Packages
            </h2>

            <div className="flex justify-center flex-wrap min-[1082px]:gap-x-5 min-[1082px]:gap-y-8 max-[1081px]:gap-x-8 max-[1081px]:gap-y-10 max-[389px]:gap-y-9">
                {featPackages.map((packageItem) => (
                    <FeaturedPackage
                        key={packageItem.id}
                        img={packageItem.img}
                        title={packageItem.title}
                        duration={packageItem.duration}
                        price={packageItem.price}
                    />
                ))}
            </div>
        </section>
    );
};
