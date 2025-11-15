import { Inclusions } from './Inclusions';
import { Exclusions } from './Exclusions';


export const InclusionsExclusions = ({ inclusionsArray, exclusionsArray }) => {
    return (
        <div className="flex justify-between items-start max-[450px]:flex-col max-[450px]:gap-10 mt-12">
            <Inclusions inclusionsArray={inclusionsArray} />
            <Exclusions exclusionsArray={exclusionsArray} />
        </div>
    );
};
