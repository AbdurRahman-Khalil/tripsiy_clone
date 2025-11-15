import { InclsuionExclusionItem } from "./InclsuionExclusionItem";

import shuffleArray from "../../../../utils/shuffleArray";


export const Inclusions = ({ inclusionsArray }) => {
    const shuffledInclusions = shuffleArray(inclusionsArray);

    return (
        <div className="flex-1">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2C2C2C] mb-6">Inclusions</h3>
            <div className="space-y-3">
                {
                    shuffledInclusions.map(item => (
                        <InclsuionExclusionItem
                            isInclusion={true}
                            itemText={item}
                        />
                    ))
                }
            </div>
        </div>
    );
};
