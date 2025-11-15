import useStore from "../../../../store/store";
import { FeaturedPackage } from "./FeaturedPackage";


export const FeaturedPackages = () => {
    const allPackages = useStore((state) => state.allPackages);

    const findPackageByTitle = (title) =>
        allPackages.find(item => item.titles.some(t => t === title));

    const packageNames = ["Dubai", "Bali", "Cappadocia", "Greece"];

    const [dubai, bali, cappadocia, greece] = packageNames.map(findPackageByTitle);

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
        <section id="featured-packages" className="bg-[#FAFAFA] px-20 pt-12 pb-16 mt-14">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    Featured Packages
                </h2>

                <div className="flex justify-center flex-wrap gap-x-5 gap-y-8">
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
            </div>
        </section>
    );
};
