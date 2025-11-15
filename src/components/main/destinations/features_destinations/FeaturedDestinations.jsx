import useStore from "../../../../store/store";

import { FeaturedDestination } from "./FeaturedDestination";


export const FeaturedDestinations = () => {
  const allPackages = useStore((state) => state.allPackages);

  const findPackageByTitle = (title) =>
    allPackages.find(item => item.titles.some(t => t === title));

  const packageNames = ["Dubai", "Bali", "Paris"];

  const [dubai, bali, paris] = packageNames.map(findPackageByTitle);

  const featDestinations = [
    {
      id: dubai?.id,
      title: dubai?.titles[0] || "",
      img: dubai?.images[3].url || "",
    },
    {
      id: bali?.id,
      title: bali?.titles[0] || "",
      img: bali?.images[3].url || "",
    },
    {
      id: paris?.id,
      title: paris?.titles[0] || "",
      img: paris?.images[2].url || "",
    }
  ];


  return (
    <section id="featured-destinations" className="bg-[#FAFAFA] px-16 py-[4.5em]">
      <h2 className="text-4xl font-semibold tracking-[0.5%] text-center ">
        Featured Destinations
      </h2>
      <div className="featured-destinations-container flex justify-center items-center flex-wrap gap-x-12 gap-y-14 mt-[4.5em]">
        {
          featDestinations.map(featDestination => (
            <FeaturedDestination
              key={featDestination.id}
              img={featDestination.img}
              title={featDestination.title}
            />
          ))
        }
      </div>
    </section>
  );
};
