import { PackageFilter } from './packages_filter/PackageFilter';
import { DestinationCard } from './DestinationCard';

import useStore from "../../../store/store";


export const AllDestinations = () => {
    const allPackages = useStore((state) => state.allPackages);

    return (
        <section id="all-destinations" className="max-w-[1440px] mx-auto px-16 py-[4.5em]">
            <h2 className="text-4xl font-semibold tracking-[0.5%] text-center ">
                Destinations
            </h2>
            <PackageFilter
                filterStyles="flex justify-center gap-7 mt-11"
                filterBtnOneStyles="bg-[#D9D9D9] w-[172px] h-[60px] rounded-xl text-[#2B2B2B] border border-[hsl(0,0%,0%,0.2)] pr-2.5 pl-[1.15em]"
                filterBtnTwoStyles="bg-[#D9D9D9] w-[482px] h-[60px] rounded-xl text-[#2B2B2B] border border-[hsl(0,0%,0%,0.2)] pr-2.5 pl-[1.15em]"
                filterBtnVariant="dark_gray"
            />
            <div className="destinations-container flex justify-center items-center flex-wrap gap-x-10 gap-y-12 mt-20">
                {
                    allPackages.map(pkg => (
                        <DestinationCard
                            key={pkg?.id}
                            img={pkg?.images[0].url}
                            title={pkg?.titles[0]}
                            description={pkg?.description}
                        />
                    ))
                }
            </div>
        </section>
    );
};
