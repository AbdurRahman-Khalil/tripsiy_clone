import React from 'react'
import { PackageFilter } from './packages_filter/PackageFilter';

export const Hero = () => {
    return (
        <section id="destinations-hero" className="flex justify-center items-center">
            <div className="text-center space-y-2">
                <h1 id="hero-heading" className="text-[2.5rem] font-bold tracking-[0.5%] text-white">
                    Explore the World with Tripsiy
                </h1>
                <p className="text-xl font-semibold tracking-[0.3%] text-[#EAEAEA] pb-14">
                    Uncover places you’ve only dreamed of visiting.
                </p>
                <PackageFilter
                    filterStyles="w-[800px] min-h-[100px] text-white bg-[hsl(0,0%,0%,0.59)] backdrop-blur-[8px] border border-[hsl(0,0%,0%,0.35)] rounded-xl px-[20px] py-[20px] flex gap-7"
                    filterBtnOneStyles="bg-[hsl(30,8%,41%,0.59)] w-[172px] h-[60px] rounded-xl shadow-lg pr-3 pl-[1.29em]"
                    filterBtnTwoStyles="bg-[hsl(30,8%,41%,0.59)] w-[358px] h-[60px] rounded-xl shadow-lg pr-3 pl-[1.29em]"
                    filterBtnVariant="orange"
                />
            </div>
        </section>
    );
};
