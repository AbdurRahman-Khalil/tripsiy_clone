import { Link } from "react-router-dom";


export const Button = ({ btnType, btnDestination, btnStyles, btnText, onClick }) => {
    const button = (
        <button type={btnType} className={btnStyles} onClick={onClick}>
            {btnText}
        </button>
    );

    return btnDestination ? (
        <Link to={btnDestination}>{button}</Link>
    ) : (
        button
    );
};
