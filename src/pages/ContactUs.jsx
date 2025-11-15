import { useEffect } from "react";
import { ContactForm } from "../components/main/contact_us/ContactForm";
import { ContactInfo } from "../components/main/contact_us/ContactInfo";
import { DubaiMap } from "../components/main/contact_us/DubaiMap";


export const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id="contact-us" className="bg-white px-7 sm:px-10 md:px-20 pt-12 pb-[4.25em]">
            <div className="text-center pb-12 space-y-2">
                <h1 className="text-4xl font-semibold tracking-[0.5%]">Contact Us</h1>
                <p className="text-lg tracking-[0.5%] text-[#2B2B2B]">Get in touch with us easily.</p>
            </div>
            <section id="contact-us-container" className="flex flex-col min-[801px]:flex-row justify-center items-start gap-[4.5em] ">
                <ContactForm />
                <ContactInfo />
            </section>
            <section id="contact-us-map" className="mt-20">
                <DubaiMap />
            </section>
        </div>
    );
};
