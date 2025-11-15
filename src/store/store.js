import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

import { packagesData } from "./data.js";


const Store = () => ({
    allPackages: packagesData,

});

const useStore = create(
    devtools(
        persist(Store, {
            name: "store"
        })
    )
);


export default useStore;


