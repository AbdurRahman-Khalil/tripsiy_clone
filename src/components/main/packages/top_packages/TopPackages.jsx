import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { PackageCard } from './PackageCard';
import { PackagesFilter } from './packages_filters/PackagesFilter';

import useStore from '../../../../store/store';

import getPriceRange from '../../../../utils/getPriceRange';



export const TopPackages = () => {
    const allPackages = useStore((state) => state.allPackages);

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');

    const [filteredPackages, setFilteredPackages] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);


    useEffect(() => {
        if (!selectedRegion && !selectedCategory && !selectedPriceRange) {
            setIsFiltered(false);
            setFilteredPackages([]);
            return;
        }

        const priceRange = getPriceRange(selectedPriceRange);

        const filtered = allPackages.filter(pkg => {
            if (!pkg) return false;

            const regionMatch = selectedRegion ? pkg.region === selectedRegion : true;
            const categoryMatch = selectedCategory ? pkg.category === selectedCategory : true;
            const priceRangeMatch = priceRange
                ? pkg.price >= priceRange.min && pkg.price <= priceRange.max
                : true;

            return regionMatch && categoryMatch && priceRangeMatch;
        });

        setFilteredPackages(filtered);
        setIsFiltered(true);

        // Scroll down to packages 
        // const topPackagesContainer = document.querySelector(".top-packages-container");
        // const offset = 230;

        // const elementPosition = topPackagesContainer.getBoundingClientRect().top + window.pageYOffset;

        // window.scrollTo({ top: elementPosition - offset, behavior: "smooth", });

    }, [selectedRegion, selectedCategory, selectedPriceRange, allPackages]);

    const handleReset = () => {
        setSelectedRegion('');
        setSelectedCategory('');
        setSelectedPriceRange('');
        setIsFiltered(false);
        setFilteredPackages([]);
    };

    const packagesToDisplay = isFiltered ? filteredPackages : allPackages;
    const count = packagesToDisplay.length;


    return (
        <section id="top-packages" className="bg-[#FEFEFF]">
            <PackagesFilter
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedPriceRange={selectedPriceRange}
                onPriceRangeChange={setSelectedPriceRange}
                onResetClick={handleReset}
                isFiltered={isFiltered}
            />

            <div className="max-w-[1440px] mx-auto px-16 pt-[3.75em] pb-[4.5em]">
                <h2 className="text-4xl font-semibold tracking-[0.5%] text-center">
                    Top Packages
                </h2>

                {isFiltered && (
                    <div className="text-center mt-8 space-y-4">
                        {count > 0 ? (
                            <p className="text-lg text-gray-800">
                                Displaying {count} package{count > 1 ? 's' : ''} based on your filters.
                            </p>
                        ) : (
                            <p className="text-lg text-gray-600">
                                No packages found on filters, please try other filters.
                            </p>
                        )}
                    </div>
                )}

                <motion.div layout className="top-packages-container flex justify-center items-center flex-wrap gap-x-8 gap-y-12 mt-16">
                    <AnimatePresence>
                        {
                            packagesToDisplay.map(pkg => (
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
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
