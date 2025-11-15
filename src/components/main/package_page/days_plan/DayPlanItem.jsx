
export const DayPlanItem = ({ planTitle, planDecription }) => {
    return (
        <div className="w-full min-[1329px]:w-[557px] min-[1500px]:w-[600px] h-fit space-y-3 px-[1.35em] border py-5 shadow rounded-lg">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2B2B2B]">{planTitle}</h3>
            <p className="text-xl font-medium tracking-[0.5%] text-[#606060]">{planDecription}</p>
        </div>
    );
};
