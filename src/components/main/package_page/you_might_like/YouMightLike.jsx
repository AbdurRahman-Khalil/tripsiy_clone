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
            <h2 className="text-[1.95rem] min-[431px]:text-[2.1rem] md:text-4xl font-semibold tracking-[0.5%] text-center">
                You Might Also Like
            </h2>
            <div className="flex justify-center flex-wrap gap-14 max-[1199px]:gap-11 max-[1175px]:gap-9 max-[1129px]:gap-y-[2.4em] max-[727px]:gap-y-[2.6em] max-[499px]:gap-y-[2.5em] max-[430px]:gap-y-[2.4em] max-[389px]:gap-y-[2.3em] mt-12 min-[431px]:mt-14 transition-all duration-200 ease-linear">
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
