import { Button } from "./Button";


export const CTA = ({ heading, description, buttonDestination, buttonText }) => {
    return (
        <section
            id="above-the-footer"
            className="text-center bg-[#F6B15C] px-6 min-[431px]:px-9 sm:px-14 py-[5.5em]"
        >
            <h2 className="text-4xl font-semibold tracking-[0.5%] text-white mb-4">{heading}</h2>
            <p className="text-lg font-medium tracking-[0.5%] text-[#FFF8EF]">{description}</p>
            <Button
                btnDestination={buttonDestination}
                btnStyles="bg-white hover:bg-[hsl(0,0%,93%)] w-[215px] h-[64px] rounded-[10px] shadow-xl mt-8 font-bold tracking-[0.5%] text-[#2B2B2B] transition duration-200 ease-linear"
                btnText={buttonText}
            />
        </section>
    );
};
