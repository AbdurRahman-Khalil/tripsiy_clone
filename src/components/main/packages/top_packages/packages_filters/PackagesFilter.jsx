import { CategoriesBar } from "./CategoriesBar";
import { DropdownMenu } from "../../../destinations/packages_filter/DropdownMenu";
import { Button } from "../../../../custom/Button";



export const PackagesFilter = ({
    selectedRegion,
    onRegionChange,
    selectedCategory,
    onCategoryChange,
    selectedPriceRange,
    onPriceRangeChange,
    onResetClick,
    isFiltered
}) => {

    const categories = [
        "Adventure", "Luxury", "Family", "Honeymoon", "Nature", "Cultural"
    ];

    const regions = [
        "Oceania", "Asia", "Europe", "Africa", "North America", "South America", "Central America"
    ];
    
    const priceRanges = [
        "AED 1000 to AED 2000", "AED 2000 to AED 3000", "AED 3000 to AED 4000", "AED 4000 to AED 5000", "AED 5000 to AED 6000"
    ];

    
    return (
        <div className="flex justify-center items-center gap-x-16 gap-y-10 flex-wrap min-h-[137px] bg-gradient-to-r from-[#242424] to-[#2B2B2B] text-white px-7 min-[553px]:px-12 min-[750px]:px-16 py-12">
            {/* Category Filter */}
            <CategoriesBar
                options={categories}
                selectedValue={selectedCategory}
                onSelect={onCategoryChange}
            />

            {/* Region Filter */}
            <DropdownMenu
                filterBtnStyles="w-[175px] h-[56px] rounded-lg bg-[#3B3B3B] pr-3 pl-[1.3em]"
                btnText="Region"
                variant="orange"
                options={regions}
                selectedValue={selectedRegion}
                onSelect={onRegionChange}
            />

            {/* Price Range Filter */}
            <DropdownMenu
                filterBtnStyles="w-[235px] h-[56px] rounded-lg bg-[#3B3B3B] pr-3 pl-[1.325em]"
                btnText="Price Range"
                variant="orange"
                options={priceRanges}
                selectedValue={selectedPriceRange}
                onSelect={onPriceRangeChange}
            />

            {isFiltered && (
                <Button
                    btnStyles="bg-gray-500 hover:bg-gray-700 text-white w-auto px-6 h-[50px] rounded-[10px] shadow-lg text-lg font-semibold tracking-[0.5%] transition duration-200 ease-linear"
                    btnText="Reset Filters"
                    onClick={onResetClick}
                />
            )}
        </div>
    );
};