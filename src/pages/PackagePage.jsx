import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { Hero } from "../components/main/package_page/Hero";
import { PackageDetails } from "../components/main/package_page/PackageDetails";

import useStore from "../store/store";

import generateSlug from "../utils/generateSlug";



export const PackagePage = () => {
    const allPackages = useStore((state) => state.allPackages);
    const { slug } = useParams();

    const openedPackage = allPackages.find((pkg) =>
        pkg.titles.some((t) => generateSlug(t) === slug)
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    if (!openedPackage) {
        return <div className="min-h-[100dvh] flex justify-center items-center text-5xl -mt-10">
            {`Package not found :(`}
        </div>;
    }

    return (
        <div id="package-page">
            <Hero
                packageHeroBg={openedPackage?.hero_image}
                title={openedPackage?.titles[0]}
                description={openedPackage?.description}
            />
            <PackageDetails
                id={openedPackage?.id}
                title={openedPackage?.titles[0]}
                price={openedPackage?.price}
                ratings={openedPackage?.ratings}
                duration={openedPackage?.about.duration}
                highlightedPlaces={openedPackage?.highlightedPlaces}
                daysPlanList={openedPackage?.about.days}
                inclusions={openedPackage?.inclusions}
                exclusions={openedPackage?.exclusions}
                galleryImages={openedPackage?.gallery}
            />
        </div>
    );
};
