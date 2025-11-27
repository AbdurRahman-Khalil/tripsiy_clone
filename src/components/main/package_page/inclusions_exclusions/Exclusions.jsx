import { InclsuionExclusionItem } from "./InclsuionExclusionItem";

import shuffleArray from "../../../../utils/shuffleArray";


export const Exclusions = ({ exclusionsArray }) => {
    const shuffledExclusions = shuffleArray(exclusionsArray);
    
    return (
        <div className="flex-1 min-[524px]:ml-[3.5rem] min-[589px]:ml-[4.8em]">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2C2C2C] mb-4 min-[524px]:mb-6">Exclusions</h3>
            <div className="space-y-2.5 min-[524px]:space-y-3">
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
