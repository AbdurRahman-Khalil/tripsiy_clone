import useStore from "../../../../store/store";

import { FeaturedDestination } from "./FeaturedDestination";


export const FeaturedDestinations = () => {
  const allPackages = useStore((state) => state.allPackages);

  const findPackageByTitle = (title) =>
    allPackages.find(item => item.titles.some(t => t === title));

  const packageTitles = ["Dubai", "Bali", "Paris"];

  const [dubai, bali, paris] = packageTitles.map(findPackageByTitle);

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
    <section
      id="featured-destinations"
      className="bg-[#FAFAFA] px-6 min-[431px]:px-9 md:px-12 lg:px-16 py-[4.5em]"
    >
      <h2 className="text-[1.95rem] min-[431px]:text-[2.1rem] md:text-4xl font-semibold tracking-[0.5%] text-center">
        Featured Destinations
      </h2>
      <div
        className="featured-destinations-container flex justify-center items-center flex-wrap gap-12 min-[1258px]:max-[1303px]:gap-10 min-[1212px]:max-[1257px]:gap-8 min-[808px]:max-[823px]:gap-8 max-[807px]:gap-11 max-[389px]:gap-10 mt-12 min-[431px]:mt-14 md:mt-16"
      >
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
