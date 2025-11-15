import { Link } from 'react-router-dom';

import logoImg from "../../assets/images/home/logo.png";


export const Logo = ({ logoSize }) => {
    return (
        <Link to={"/"}>
            <img src={logoImg} width={logoSize} alt="logo image" />
        </Link>
    );
};
