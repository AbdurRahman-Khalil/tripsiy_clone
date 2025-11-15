import { DayPlanItem } from "./DayPlanItem";


export const DaysPlan = ({ daysPlanList }) => {
    return (
        <div className="days-plan mt-16">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2C2C2C] mb-6">Itinerary</h3>
            <div className="flex justify-between items-center flex-wrap gap-x-10 gap-y-6">
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
