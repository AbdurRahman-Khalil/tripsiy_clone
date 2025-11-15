import { InclsuionExclusionItem } from "./InclsuionExclusionItem";

import shuffleArray from "../../../../utils/shuffleArray";


export const Exclusions = ({ exclusionsArray }) => {
    const shuffledExclusions = shuffleArray(exclusionsArray);
    
    return (
        <div className="flex-1 min-[451px]:ml-[4.8em]">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2C2C2C] mb-5">Exclusions</h3>
            <div className="space-y-3">
                {
                    shuffledExclusions.map(item => (
                        <InclsuionExclusionItem
                            isInclusion={false}
                            itemText={item}
                        />
                    ))
                }
            </div>
        </div>
    );
};
