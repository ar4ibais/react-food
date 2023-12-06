import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header green darken-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React Food</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contacts</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;