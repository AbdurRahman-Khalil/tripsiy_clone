import qouteIcon from "../../../../assets/svgs/home/qoute.svg";


export const Testimonial = ({ testimonial, testimoni, country, countryFlag }) => {
    return (
        <div className="max-w-2xl text-center mx-auto relative">
            <img
                className="absolute left-0 -top-5"
                src={qouteIcon}
                alt="qoute icon"
            />
            <p
                style={{ fontFamily: "Playfair Display" }}
                className="testimonial-text text-[1.625rem] font-medium text-[#2B2B2B] tracking-[0.5%]"
            >
                “{testimonial}”
            </p>
            <p className="testimoni mt-5 text-[1.375rem] font-semibold text-[#F6B15C] tracking-[0.5%] flex items-center justify-center gap-2">
                — {testimoni}, {country}
                <img src={countryFlag} alt={`${country}'s flag`} className="w-5 h-5" />
            </p>
        </div>
    );
};
