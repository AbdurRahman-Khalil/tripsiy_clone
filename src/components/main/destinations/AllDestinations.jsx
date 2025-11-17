import { useState } from 'react';

import toast from "react-hot-toast";
import { AnimatePresence, motion } from 'framer-motion';

import { PackagesFilter } from './packages_filter/PackagesFilter';
import { DestinationCard } from './DestinationCard';
import { Button } from '../../custom/Button';

import useStore from "../../../store/store";

import warningIcon from "../../../assets/svgs/warning.svg";



export const AllDestinations = () => {
    const allPackages = useStore((state) => state.allPackages);

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const [filteredPackages, setFilteredPackages] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    const handleSearch = () => {
        if (!selectedRegion && !selectedCategory) {
            toast.custom((t) => (
                <div
                    className={`${t.visible ? "animate-enter" : "animate-leave"
                        } z-[99999] max-w-xs w-full flex items-center gap-3 bg-yellow-100 text-yellow-800 px-4 py-3 rounded-lg shadow-lg`}
                >
                    <img src={warningIcon} alt="warning icon" />
                    <p>Please select at least one filter before searching.</p>
                </div>
            ));
            return;
        }

        const filtered = allPackages.filter(pkg => {
            if (!pkg) return false;

            const regionMatch = selectedRegion ? pkg.region === selectedRegion : true;
            const typeMatch = selectedCategory ? pkg.category === selectedCategory : true;

            return regionMatch && typeMatch;
        });

        setFilteredPackages(filtered);
        setIsFiltered(true);

        // Scroll down to destinations
        const allDestinationsContainer = document.getElementById("all-destinations-container");
        const offset = 200;

        const elementPosition = allDestinationsContainer.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
        });
    };

    const handleReset = () => {
        setSelectedRegion('');
        setSelectedCategory('');
        setIsFiltered(false);
        setFilteredPackages([]);
    };

    const packagesToDisplay = isFiltered ? filteredPackages : allPackages;
    const count = packagesToDisplay.length;


    return (
        <section id="all-destinations" className="max-w-[1440px] mx-auto px-8 md:px-12 min-[1025px]:]:px-16 py-[4.5em]">
            <h2 className="text-4xl font-semibold tracking-[0.5%] text-center">
                Destinations
            </h2>
            <PackagesFilter
                filterStyles="flex justify-center gap-7 flex-wrap mt-11 "
                filterBtnOneStyles="bg-[#D9D9D9] min-w-[172px] h-[60px] rounded-xl text-[#2B2B2B] border border-[hsl(0,0%,0%,0.2)] pr-2.5 pl-[1.15em]"
                filterBtnTwoStyles="bg-[#D9D9D9] w-[280px] min-[400px]:w-[330px] min-[480px]:w-[400px] min-[580px]:min-w-[482px] h-[60px] rounded-xl text-[#2B2B2B] border border-[hsl(0,0%,0%,0.2)] pr-2.5 pl-[1.15em]"
                filterBtnVariant="dark_gray"
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onSearchClick={handleSearch}
            />

            {isFiltered && (
                <div className="text-center mt-8 space-y-4">
                    {count > 0 ? (
                        <p className="text-lg text-gray-800">
                            Displaying {count} destination{count > 1 ? 's' : ''} based on your filters.
                        </p>
                    ) : (
                        <p className="text-lg text-gray-600">
                            No destinations found on filters, please try other filters.
                        </p>
                    )}

                    <Button
                        btnStyles="bg-gray-500 hover:bg-gray-700 text-white w-auto px-6 h-[50px] rounded-[10px] shadow-lg text-lg font-semibold tracking-[0.5%] transition duration-200 ease-linear"
                        btnText="Reset Filters"
                        onClick={handleReset}
                    />
                </div>
            )}

            <motion.div id="all-destinations-container" layout className="flex justify-center items-center flex-wrap gap-x-10 gap-y-12 mt-20">
                <AnimatePresence>
                    {
                        packagesToDisplay.map(pkg => (
                            <DestinationCard
                                key={pkg?.id}
                                img={pkg?.images[0].url}
                                title={pkg?.titles[0]}
                                description={pkg?.description}
                            />
                        ))
                    }
                </AnimatePresence>
            </motion.div>
        </section>
    );
};