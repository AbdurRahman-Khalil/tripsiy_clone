import { useState } from "react";
import { motion } from "framer-motion";


export const AnimatedHamburger = ({
    open: controlledOpen,
    onToggle,
    size = 44,
    barWidth = 26,
    barHeight = 2.5,
    barGap = 8,
    color = "#111827",
    transition = { type: "spring", stiffness: 400, damping: 28 },

}) => {
    // if parent provides `open` prop, use controlled mode; otherwise component is uncontrolled
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = typeof controlledOpen === "boolean";
    const isOpen = isControlled ? controlledOpen : internalOpen;

    const toggle = () => {
        if (isControlled) {
            onToggle && onToggle(!controlledOpen);
        } else {
            setInternalOpen((s) => {
                const next = !s;
                onToggle && onToggle(next);
                return next;
            });
        }
    };

    // motion variants for each bar
    const topVariants = {
        closed: {
            rotate: 0,
            y: -barGap,
            scaleX: 1,
        },
        open: {
            rotate: 45,
            y: 0,
            scaleX: 1.05,
        },
    };
    const middleVariants = {
        closed: { opacity: 1, scaleX: 1 },
        open: { opacity: 0, scaleX: 0.6 },
    };
    const bottomVariants = {
        closed: { rotate: 0, y: barGap, scaleX: 1 },
        open: { rotate: -45, y: 0, scaleX: 1.05 },
    };

    const wrapperSize = size;
    const barStyle = {
        width: barWidth,
        height: barHeight,
        borderRadius: barHeight,
        transformOrigin: "center",
    };

    
    return (
        <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggle}
            className="flex items-center justify-center focus:outline-none"
            style={{ width: wrapperSize, height: wrapperSize }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <motion.span
                    aria-hidden
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={topVariants}
                    transition={transition}
                    style={barStyle}
                    className="block bg-current absolute"
                />

                <motion.span
                    aria-hidden
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={middleVariants}
                    transition={transition}
                    style={barStyle}
                    className="block bg-current absolute"
                />

                <motion.span
                    aria-hidden
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={bottomVariants}
                    transition={transition}
                    style={barStyle}
                    className="block bg-current absolute"
                />

                {/* Color via inline style on parent so motion spans pick it up via currentColor */}
                <div className="sr-only">{isOpen ? "Close" : "Open"} menu</div>
            </div>

            {/* set the color using a tiny inline style on the button so the spans using `bg-current` follow it */}
            <style>
                {`button[aria-label] { color: ${color}; }`}
            </style>
        </button>
    );
};
