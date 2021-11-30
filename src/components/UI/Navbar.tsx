import { FC } from "react";
import { Link, NavLink } from 'react-router-dom'


const Navbar: FC = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                SuperM
            </Link>
            <ul>
                <li className="nav-item">
                    <NavLink to="/" >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about">
                        About us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products">
                        Products
                    </NavLink>
                </li>
                <li>
                    <Link to="/cart" className="nav-item nav-cart btn btn-accent">
                        Cart (0)
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;