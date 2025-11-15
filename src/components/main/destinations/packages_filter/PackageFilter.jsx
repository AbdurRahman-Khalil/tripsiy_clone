import { DropdownBtn } from "./DropdownBtn";
import { Button } from "../../../custom/Button";


export const PackageFilter = ({ filterStyles, filterBtnOneStyles, filterBtnTwoStyles, filterBtnVariant }) => {
    return (
        <div className={filterStyles}>
            <DropdownBtn
                filterBtnStyles={filterBtnOneStyles}
                btnText="Region"
                variant={filterBtnVariant}
            />
            <DropdownBtn
                filterBtnStyles={filterBtnTwoStyles}
                btnText="Travel Type"
                variant={filterBtnVariant}
            />
            <Button
                btnStyles={`bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] text-white w-[172px] h-[60px] rounded-[10px] shadow-lg text-xl font-bold tracking-[0.5%] transition duration-200 ease-linear`}
                btnText="Search"
            />
        </div>
    );
};
