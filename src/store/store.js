import { create } from "zustand";

import { devtools } from "zustand/middleware";

import { packagesData } from "./data.js";


const Store = () => ({
    allPackages: packagesData,

});

const useStore = create(
    devtools(Store)
);


export default useStore;


