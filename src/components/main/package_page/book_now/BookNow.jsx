import { useState } from "react";

import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { FloatingField } from "../../contact_us/FloatingField";
import { Loader } from "../../../custom/Loader";

import generateRandomId from "../../../../utils/generateRandomId";
import getCurrentDate from "../../../../utils/getCurrentDate";



export const BookNow = ({ packageId, packageTitle, packagePrice }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [numberOfTravelers, setNumberOfTravelers] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const templateParams = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            bookingDate: bookingDate,
            bookingId: packageId + "-" + generateRandomId(),
            numberOfTravelers: numberOfTravelers,
            packageTitle: packageTitle,
            packagePrice: packagePrice,
            time: getCurrentDate(),
        };

        try {
            await emailjs.send(
                "service_3govo0h",
                "template_s5bwl81",
                templateParams,
                "7K1tP1pWr_znt2T3m"
            );

            toast.success("Your booking request was received! We’ll contact you soon.");

            setName("");
            setEmail("");
            setPhoneNumber("");
            setBookingDate("");
            setNumberOfTravelers("");

        } catch (error) {
            console.error(error);
            toast.error("Failed to submit booking request. Please try again.");
        }

        setLoading(false);
    };


    return (
        <section id="book-now-form" className="max-w-[1440px] mx-auto bg-white mt-14 px-[1.6em] min-[425px]:px-7 sm:px-8 min-[820px]:px-10 py-10 shadow rounded-[20px]">
            <h3 className="text-3xl font-medium tracking-[0.5%] text-[#2C2C2C] text-center mb-10">
                Book Your Trip Now
            </h3>
            <form onSubmit={handleSubmit}>
                <FloatingField
                    fieldStyles="w-full h-[70px] min-[820px]:h-[80px] pl-5 pt-4"
                    label="Name"
                    type="text"
                    name="name"
                    value={name}
                    setValue={setName}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 min-[820px]:gap-8 mt-6 sm:mt-7 min-[820px]:mt-8">
                    <FloatingField
                        fieldStyles="w-full h-[70px] min-[820px]:h-[80px] pl-5 pt-4"
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        setValue={setEmail}
                    />
                    <FloatingField
                        fieldStyles="w-full h-[70px] min-[820px]:h-[80px] pl-5 pt-4"
                        label="Phone Number"
                        type="number"
                        name="phoneNumber"
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                    />
                    <FloatingField
                        fieldStyles="w-full h-[70px] min-[820px]:h-[80px] px-5"
                        type="date"
                        name="bookingDate"
                        value={bookingDate}
                        setValue={setBookingDate}
                    />
                    <FloatingField
                        fieldStyles="w-full h-[70px] min-[820px]:h-[80px] pl-5 pt-4"
                        label="Number of Travelers"
                        type="number"
                        name="numberOfTravelers"
                        value={numberOfTravelers}
                        setValue={setNumberOfTravelers}
                    />
                </div>
                <div className="mt-14 sm:mt-16 space-y-2.5">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-[228px] h-[60px] min-[425px]:w-[243px] min-[425px]:h-[63px] sm:w-[250px] sm:h-[66px] min-[820px]:w-[263px] min-[820px]:h-[69px] mx-auto rounded-[10px] shadow-md bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] 
                                        text-[1.2rem] min-[425px]:text-[1.25rem] sm:text-[1.325rem] min-[820px]:text-[1.375rem] font-medium tracking-[0.5%] text-white transition-all duration-200 ease-linear
                                        ${loading ? "opacity-80 cursor-not-allowed" : ""} flex justify-center items-center gap-2.5`}
                    >
                        <span>{loading ? "Booking" : "Confirm Booking"}</span>
                        <span>{loading && <Loader />}</span>
                    </button>
                    <p className="text-center text-sm tracking-[0.5%] text-[#B4B4B4]">
                        Our team will contact you within 24 hours.
                    </p>
                </div>
            </form>
        </section>
    );
};