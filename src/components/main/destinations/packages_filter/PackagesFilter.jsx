import { DropdownMenu } from "./DropdownMenu";
import { Button } from "../../../custom/Button";



export const PackagesFilter = ({
    filterStyles,
    filterBtnOneStyles,
    filterBtnTwoStyles,
    filterBtnVariant,
    selectedRegion,
    onRegionChange,
    selectedCategory,
    onCategoryChange,
    onSearchClick
}) => {

    const regions = [
        "Oceania", "Asia", "Europe", "Africa", "North America", "South America", "Central America"
    ];
    
    const travelTypes = [
        "Adventure", "Luxury", "Family", "Honeymoon", "Nature", "Cultural"
    ];


    return (
        <div className={filterStyles}>
            <DropdownMenu
                filterBtnStyles={filterBtnOneStyles}
                btnText="Region"
                variant={filterBtnVariant}
                options={regions}
                selectedValue={selectedRegion}
                onSelect={onRegionChange}
            />
            <DropdownMenu
                filterBtnStyles={filterBtnTwoStyles}
                btnText="Travel Type"
                variant={filterBtnVariant}
                options={travelTypes}
                selectedValue={selectedCategory}
                onSelect={onCategoryChange}
            />
            <Button
                btnStyles="bg-[#F49C0B] hover:bg-[hsl(37,91%,58%)] text-white min-w-[172px] h-[60px] rounded-[10px] shadow-lg text-xl font-semibold tracking-[0.5%] transition duration-200 ease-linear"
                btnText="Search"
                onClick={onSearchClick}
            />
        </div>
    );
};