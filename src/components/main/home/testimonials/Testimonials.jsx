import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Testimonial } from "./Testimonial";

import pakistanFlag from "../../../../assets/svgs/home/pakistan.svg";
import turkiyeFlag from "../../../../assets/svgs/home/turkiye.svg";
import indonesiaFlag from "../../../../assets/svgs/home/indonesia.svg";



export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const testimonialsData = [
        {
            id: 1,
            testimonial:
                "Tripsiy made our Dubai trip unforgettable. Everything from hotels to tours was perfectly arranged!",
            testimoni: "Aisha Khan",
            country: "Pakistan",
            countryFlag: pakistanFlag,
        },
        {
            id: 2,
            testimonial:
                "It was an amazing experience! Thanks to Tripsiy, we explored the beauty of Istanbul without any stress.",
            testimoni: "Ahmet Demir",
            country: "Turkiye",
            countryFlag: turkiyeFlag,
        },
        {
            id: 3,
            testimonial:
                "Our trip to Bali was incredible! Everything was perfectly organized by Tripsiy — truly professional service.",
            testimoni: "Siti Nuraini",
            country: "Indonesia",
            countryFlag: indonesiaFlag,
        },
    ];

    const handleDotClick = (index) => {
        if (index === activeIndex || isAnimating) return;

        setDirection(index > activeIndex ? 1 : -1);
        setIsAnimating(true);

        // it will wait for exit animation before switching content
        setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
        }, 100); // matching exit duration below
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1 // it will wait until exit finishes
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
        }),
    };

    
    return (
        <section
            id="testimonials"
            className="bg-[#FFF8F3] pt-14 pb-[4.5em] px-4 text-center relative overflow-hidden"
        >
            <h1 className="text-4xl font-semibold tracking-[0.5%] text-[#2C2C2C] mb-20">
                What Our Travelers Say
            </h1>

            <div className="relative h-[200px] flex items-center justify-center overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute w-full flex justify-center"
                    >
                        <Testimonial
                            testimonial={testimonialsData[activeIndex].testimonial}
                            testimoni={testimonialsData[activeIndex].testimoni}
                            country={testimonialsData[activeIndex].country}
                            countryFlag={testimonialsData[activeIndex].countryFlag}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center mt-7 space-x-3">
                {testimonialsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-[13px] h-[13px] rounded-full transition-all duration-300 ${
                            index === activeIndex
                                ? "bg-[#F6B15C] w-[30px]"
                                : "bg-[#EADAC0]"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

