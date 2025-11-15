import useStore from '../../../../store/store';

import { PackageCard } from './PackageCard';

import shuffleArray from "../../../../utils/shuffleArray";


export const TopPackages = () => {
    const allPackages = useStore((state) => state.allPackages);

    const shuffledPackages = shuffleArray(allPackages);
    

    return (
        <section id="top-packages" className="max-w-[1440px] mx-auto bg-[#FEFEFF] px-16 pt-[3.75em] pb-[4.5em]">
            <h2 className="text-4xl font-semibold tracking-[0.5%] text-center">
                Top Packages
            </h2>
            <div className="top-packages-container flex justify-center items-center flex-wrap gap-x-8 gap-y-12 mt-[4.25em]">
                {
                    shuffledPackages.map(pkg => (
                        <PackageCard
                            key={pkg.id}
                            img={pkg.images[0].url}
                            title={pkg.titles[0]}
                            shortDescription={pkg.short_description}
                            duration={pkg.about.duration}
                            price={pkg.price}
                            ratings={pkg.ratings}
                        />
                    ))
                }
            </div>
        </section>
    );
};
