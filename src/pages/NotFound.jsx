import { useEffect } from "react";


export const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <h1>NotFound</h1>
        </div>
    );
};
