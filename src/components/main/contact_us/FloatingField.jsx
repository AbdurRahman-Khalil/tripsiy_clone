import { useState } from "react";


export const FloatingField = ({
    label,
    type = "text",
    name,
    textarea = false,
    value,
    setValue,
}) => {
    
    const [focused, setFocused] = useState(false);

    return (
        <div className="relative group">

            {textarea ? (
                <textarea
                    className="peer w-full h-[176px] pl-5 pt-8 resize-none rounded-lg text-xl bg-[#F7F6F6]/[0.22] 
                        ring-1 ring-[#000000]/[0.19] shadow outline-none 
                        focus:ring-2 focus:ring-[hsl(39,79%,50%)] transition-all duration-200 ease-linear"
                    placeholder=""
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            ) : (
                <input
                    className="peer w-full h-[73px] pl-5 pt-4 rounded-lg text-xl bg-[#F7F6F6]/[0.22] 
                        ring-1 ring-[#000000]/[0.19] shadow outline-none 
                        focus:ring-2 focus:ring-[hsl(39,79%,50%)] transition-all duration-200 ease-linear"
                    type={type}
                    name={name}
                    placeholder=""
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            )}

            <label
                className={
                    "absolute left-5 transition-all duration-200 ease-linear pointer-events-none " +
                    (focused || value
                        ? "top-2.5 text-sm text-[hsl(39,79%,50%)]"
                        : textarea
                            ? "top-3.5 text-xl text-black/50"
                            : "top-1/2 -translate-y-1/2 text-xl text-black/35")
                }
            >
                {label}
            </label>
        </div>
    );
};
