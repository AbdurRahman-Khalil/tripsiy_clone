import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Button } from '../../custom/Button';

import generateSlug from '../../../utils/generateSlug';



export const DestinationCard = ({ img, title, description }) => {
    const sluggedTitle = generateSlug(title);

    return (
        <motion.div
            layout
            initial={{ opacity: 0.33 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.33 }}
            transition={{
                opacity: {
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                },
                // scale: {
                //     duration: 0.4,
                //     ease: [0.25, 1, 0.5, 1],
                // },
                // delay: 0.1
            }}
            className="w-[330px] max-[1197px]:w-[320px] max-[1167px]:flex-grow h-[410px] rounded-2xl shadow-lg bg-white group overflow-hidden transition-all duration-200 ease-linear"
        >
            <Link to={`/packages/${sluggedTitle}`}>
                <div className="w-full h-[258px] shadow-md overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-center rounded-t-2xl group-hover:scale-110 transition duration-200 ease-linear"
                        src={img}
                        alt={`${title}' s image`}
                    />
                </div>
            </Link>
            <div className="px-[1.15em] py-2.5 text-center">
                <p className="text-lg text-start font-semibold tracking-[0.5%] text-[#2B2B2B] mb-0.5">{title}</p>
                <p className="text-xs text-start tracking-[0.5%] text-[#777777] line-clamp-2">{description}</p>
                <Button
                    btnDestination={`/packages/${sluggedTitle}`}
                    btnStyles="bg-[#F49C0B] hover:bg-[hsl(37,91%,57%)] w-[186px] h-[41px] rounded-[10px] shadow-lg text-sm font-medium tracking-[0.5%] text-white mt-4 transition duration-200 ease-linear"
                    btnText="View Packages"
                />
            </div>
        </motion.div>
    );
};
