import locationIcon from "../../../assets/svgs/contact_us/orange_location.svg";
import phoneIcon from "../../../assets/svgs/contact_us/orange_phone.svg";
import mailIcon from "../../../assets/svgs/contact_us/orange_mail.svg";
import clockIcon from "../../../assets/svgs/contact_us/orange_clock.svg";


export const ContactInfo = () => {

    return (
        <div id="contact-info">
            <p className="text-2xl tracking-[0.5%] text-[#2B2B2B]">Contact Info</p>
            <address className="not-italic mt-6 space-y-5">
                <div className="location flex items-center gap-5">
                    <img src={locationIcon} alt="location icon" />
                    <p className="tracking-[0.5%] text-[#6B5E4A]">Office 204, Downtown Dubai, UAE</p>
                </div>
                <a href="tel:+971 55 123 4567" className="phone flex items-center gap-5 hover:underline">
                    <img src={phoneIcon} alt="phone icon" />
                    <p className="tracking-[0.5%] text-[#6B5E4A]">+971 55 123 4567</p>
                </a>
                <a href="mailto:info@tripsiy.com" className="mail flex items-center gap-5 hover:underline">
                    <img src={mailIcon} alt="mail icon" />
                    <p className="tracking-[0.5%] text-[#6B5E4A]">info@tripsiy.com</p>
                </a>
            </address>
            
            <p className="text-2xl tracking-[0.5%] text-[#2B2B2B] mt-8">Business Hours</p>
            <div className="clock flex items-center gap-5 mt-5">
                <img src={clockIcon} alt="clock icon" />
                <p className="tracking-[0.5%] text-[#6B5E4A]">Monday – Friday: 9:00am – 6:00pm</p>
            </div>
        </div>
    );
};
