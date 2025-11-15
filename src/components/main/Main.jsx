import { Routes, Route } from "react-router-dom";

import { Home } from "../../pages/Home";
import { AboutUs } from "../../pages/AboutUs";
import { Destinations } from "../../pages/Destinations";
import { Packages } from "../../pages/Packages";
import { PackagePage } from "../../pages/PackagePage";
import { Services } from "../../pages/Services";
import { ContactUs } from "../../pages/ContactUs";
import { NotFound } from "../../pages/NotFound";


export const Main = () => {
    return (
        <main className="mt-[6.3em]">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages/:slug" element={<PackagePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
};
