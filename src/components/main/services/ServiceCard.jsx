import { Button } from "../../custom/Button";


export const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="w-[281px] h-fit rounded-2xl bg-white shadow-lg text-center px-[24px] py-[26px]">
            <img className="mx-auto mb-3" src={icon} alt={`${title}' s image`} />
            <p className="text-lg font-semibold tracking-[0.5%] text-[#2B2B2B] mb-3">{title}</p>
            <p className="text-xs font-medium text-[#4A4A4A]">{description}</p>
            <Button 
                btnStyles="w-[201px] h-[42px] rounded-[10px] shadow-lg mt-5 bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] text-sm font-medium tracking-[0.5%] text-white transition duration-200 ease-linear"
                btnText="Contact Us for Service"
            />
        </div>
    );
};
