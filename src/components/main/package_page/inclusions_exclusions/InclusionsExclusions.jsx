import { Inclusions } from './Inclusions';
import { Exclusions } from './Exclusions';


export const InclusionsExclusions = ({ inclusionsArray, exclusionsArray }) => {
    return (
        <div className="flex items-start max-[523px]:flex-col max-[523px]:gap-8 mt-12">
            <Inclusions inclusionsArray={inclusionsArray} />
            <Exclusions exclusionsArray={exclusionsArray} />
        </div>
    );
};
