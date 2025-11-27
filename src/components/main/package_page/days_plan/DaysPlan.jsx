import { DayPlanItem } from "./DayPlanItem";


export const DaysPlan = ({ daysPlanList }) => {
    return (
        <div className="days-plan mt-16">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2C2C2C] mb-7">Itinerary</h3>
            <div className="grid grid-cols-1 min-[524px]:grid-cols-2 gap-x-7 sm:gap-x-8 min-[820px]:gap-x-10 gap-y-7">
                {
                    daysPlanList.map(plan => (
                        <DayPlanItem
                            planTitle={plan.title}
                            planDecription={plan.description}
                        />
                    ))
                }
            </div>
        </div>
    );
};
