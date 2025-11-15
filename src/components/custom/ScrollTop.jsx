import { useState, useEffect } from 'react';

import topArrowIcon from "../../assets/svgs/arrow_top.svg";


export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 text-[1.9rem] text-[hsl(37,91%,10%)] px-3 py-4 
                    bg-[hsl(37,91%,47%)] hover:bg-[hsl(37,91%,55%)] active:bg-[hsl(37,91%,47%)] shadow-lg rounded-full 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} 
                    transform transition-all duration-900 ease-linear
                `}
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <img src={topArrowIcon} className=" rotate-90" alt="top arrow icon" />
        </button>
    );
};
