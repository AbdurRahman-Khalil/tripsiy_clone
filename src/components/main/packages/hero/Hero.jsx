import { CategoriesFilterBar } from "./CategoriesFilterBar";


export const Hero = () => {

    return (
        <section id="packages-hero">
            <div id="packages-hero-bg" className="relative">
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-r from-[hsla(0,0%,0%,0.7)] to-[hsla(0,0%,0%,0.3)]">
                    <div className="text-center">
                        <h1 id="hero-heading" className="text-[2.5rem] font-bold tracking-[0.5%] text-white">
                            Find Your Perfect Travel Package
                        </h1>
                        <p className="text-xl font-semibold tracking-[0.3%] text-[#EAEAEA] pb-14">
                            Curated trips for every traveler — choose your style and start exploring.
                        </p>
                    </div>
                </div>
            </div>
            <CategoriesFilterBar />
            {/* <div className="flex justify-center items-center gap-16 min-h-[137px] bg-gradient-to-r from-[#242424] to-[#2B2B2B] text-white">
                <div className="packages-categories-container flex gap-5 h-[56px] bg-[#3B3B3B]">
                    {
                        categories.map(category => (
                            <button className="text-white text-2xl font-medium tracking-[0.5%] min-h-full">
                                {category}
                            </button>
                        ))
                    }
                </div>
                <DropdownBtn
                    filterBtnStyles="w-[175px] h-[56px] bg-[#3B3B3B] pr-3 pl-[1.3em]"
                    btnText="Region"
                    variant="orange"
                />
                <DropdownBtn
                    filterBtnStyles="w-[235px] h-[56px] bg-[#3B3B3B] pr-3 pl-[1.325em]"
                    btnText="Price Range"
                    variant="orange"
                />
            </div> */}
        </section>
    );
};






