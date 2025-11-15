import { useState } from "react";

import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { FloatingField } from "./FloatingField";
import { Loader } from "./Loader";


export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const templateParams = {
            name: name,
            email: email,
            message: message,
            subject: "New Contact Us Message",
        };

        try {
            await emailjs.send(
                "service_3govo0h",
                "template_9j0jlbi",
                templateParams,
                "7K1tP1pWr_znt2T3m"
            );

            toast.success("Your message has been sent successfully!");

            setName("");
            setEmail("");
            setMessage("");

        } catch (error) {
            console.error(error);
            toast.error("Failed to send message.");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full min-[801px]:w-[617px] max-w-full flex flex-col gap-6">

            <FloatingField
                label="Name"
                type="text"
                name="name"
                value={name}
                setValue={setName}
            />

            <FloatingField
                label="Email"
                type="email"
                name="email"
                value={email}
                setValue={setEmail}
            />

            <FloatingField
                label="Message"
                textarea={true}
                value={message}
                setValue={setMessage}
            />

            <button
                type="submit"
                disabled={loading}
                className={`self-center w-[263px] h-[69px] rounded-[10px] shadow-md bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] 
                    text-[1.375rem] font-medium tracking-[0.5%] text-white mt-2 transition duration-200 ease-linear
                    ${loading ? "opacity-80 cursor-not-allowed" : ""} flex justify-center items-center gap-2.5`}
            >
                <span>{loading ? "Sending" : "Send Message"}</span>
                <span>{loading && <Loader/>}</span>
            </button>
        </form>
    );
};
