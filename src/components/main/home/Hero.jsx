import { Button } from "../../custom/Button";


export const Hero = () => {
    return (
        <section id="home-hero" className="flex justify-center items-center">
            <div className="text-white text-center">
                <h1 id="hero-heading" className="text-[3.5rem] font-bold tracking-[0.5%]">Discover the World with Tripsiy</h1>
                <p className="text-xl font-medium tracking-[0.3%] text-[#EAEAEA]">Your trusted travel partner for unforgettable experiences.</p>
                <div className="home-hero-btns mt-9 space-x-6">
                    <Button
                        btnDestination="/packages"
                        btnStyles="bg-gradient-to-r from-[#FFA94D] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FFA94D] w-[180px] h-[44px] font-semibold tracking-[0.5%] rounded-[10px]"
                        btnText="Explore Packages"
                    />
                    <Button
                        btnStyles="w-[168px] h-[44px] font-semibold tracking-[0.5%] rounded-[10px] border-2 border-white bg-transparent hover:bg-white hover:text-black transition duration-200 ease-linear"
                        btnText="Plan Your Trip"
                    />
                </div>
            </div>
        </section>
    );
};
