import locationIcon from "../../../assets/svgs/contact_us/orange_location.svg";
import phoneIcon from "../../../assets/svgs/contact_us/orange_phone.svg";
import mailIcon from "../../../assets/svgs/contact_us/orange_mail.svg";
import clockIcon from "../../../assets/svgs/contact_us/orange_clock.svg";


export const ContactInfo = () => {

    return (
        <div id="contact-info">
            <p className="text-[1.365rem] min-[431px]:text-[1.385em] min-[600px]:text-[1.425rem] min-[820px]:text-2xl tracking-[0.5%] text-[#2B2B2B]">Contact Info</p>
            <address className="not-italic mt-[1.1em] min-[431px]:mt-5 min-[600px]:mt-6 space-y-4 min-[600px]:space-y-5">
                <div className="location flex items-center gap-4 min-[600px]:gap-5">
                    <img className="w-[25.5px] min-[600px]:w-[28px] min-[750px]:w-[31px] min-[820px]:w-[34px]" src={locationIcon} alt="location icon" />
                    <p className="text-[15.5px] min-[600px]:text-base tracking-[0.5%] text-[#6B5E4A]">Office 204, Downtown Dubai, UAE</p>
                </div>
                <a href="tel:+971 55 123 4567" className="phone flex items-center gap-4 min-[600px]:gap-5 hover:underline">
                    <img className="w-[25.5px] min-[600px]:w-[28px] min-[750px]:w-[31px] min-[820px]:w-[34px]" src={phoneIcon} alt="phone icon" />
                    <p className="text-[15.5px] min-[600px]:text-base tracking-[0.5%] text-[#6B5E4A]">+971 55 123 4567</p>
                </a>
                <a href="mailto:info@tripsiy.com" className="mail flex items-center gap-4 min-[600px]:gap-5 hover:underline">
                    <img className="w-[25.5px] min-[600px]:w-[28px] min-[750px]:w-[31px] min-[820px]:w-[34px]" src={mailIcon} alt="mail icon" />
                    <p className="text-[15.5px] min-[600px]:text-base tracking-[0.5%] text-[#6B5E4A]">info@tripsiy.com</p>
                </a>
            </address>
            
            <p className="text-[1.365rem] min-[431px]:text-[1.385em] min-[600px]:text-[1.425rem] min-[820px]:text-2xl tracking-[0.5%] text-[#2B2B2B] mt-8">Business Hours</p>
            <div className="clock flex items-center gap-4 min-[600px]:gap-5 mt-3.5 min-[431px]:mt-[1.1em] min-[600px]:mt-5">
                <img className="w-[25.5px] min-[600px]:w-[28px] min-[750px]:w-[31px] min-[820px]:w-[34px]" src={clockIcon} alt="clock icon" />
                <p className="text-[15.5px] min-[600px]:text-base tracking-[0.5%] text-[#6B5E4A]">Monday – Friday: 9:00am – 6:00pm</p>
            </div>
        </div>
    );
};
