
export const DayPlanItem = ({ planTitle, planDecription }) => {
    return (
        <div className="h-full space-y-3 px-[1.35em] border py-5 shadow rounded-lg">
            <h3 className="text-[1.475rem] min-[425px]:text-[1.525rem] sm:text-[1.6rem] min-[820px]:text-3xl font-medium tracking-[0.5%] text-[#2B2B2B]">
                {planTitle}
            </h3>
            <p className="text-[1.05rem] min-[425px]:text-[1.075rem] sm:text-[1.15rem] min-[820px]:text-xl font-medium tracking-[0.5%] text-[#606060]">
                {planDecription}
            </p>
        </div>
    );
};
