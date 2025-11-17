import useStore from "../../../../store/store";

import { YMLItem } from "./YMLItem";



export const YouMightLike = () => {
    const allPackages = useStore((state) => state.allPackages);

    const findPackageByTitle = (title) =>
        allPackages.find(item => item.titles.some(t => t === title));

    const packageTitles = ["Dubai", "Bali", "Thailand"];

    const [dubai, bali, thailand] = packageTitles.map(findPackageByTitle);

    const ymlDestinations = [
        {
            id: dubai?.id,
            title: dubai?.titles[2] || "",
            img: dubai?.images[1].url || "",
            duration: dubai?.about.duration || "",
            price: dubai?.price || ""
        },
        {
            id: bali?.id,
            title: bali?.titles[2] || "",
            img: bali?.images[1].url || "",
            duration: bali?.about.duration || "",
            price: bali?.price || ""
        },
        {
            id: thailand?.id,
            title: thailand?.titles[1] || "",
            img: thailand?.images[1].url || "",
            duration: thailand?.about.duration || "",
            price: thailand?.price || ""
        }
    ];


    return (
        <section id="you-might-like" className="mt-14">
            <h2 className="text-4xl font-semibold tracking-[0.5%] text-center">You Might Also Like</h2>
            <div className="flex justify-center flex-wrap gap-14 mt-12">
                {ymlDestinations.map((destinationItem) => (
                    <YMLItem
                        key={destinationItem.id}
                        img={destinationItem.img}
                        title={destinationItem.title}
                        duration={destinationItem.duration}
                        price={destinationItem.price}
                    />
                ))}
            </div>
        </section>
    );
};
