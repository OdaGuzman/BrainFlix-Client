import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import uploadIcon from "../../assets/icons/upload.svg";
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <NavLink to="/"><img src={logo} alt="BrainFlix logo" className="header__logo-img"></img></NavLink>
            </div>
            <div className='header__middle'>
                <input type="text" className="header__search" placeholder='Search'></input>
                <div className="header__profile header__profile--mobile"></div>
            </div>
            <NavLink to="/upload" className="header__btn-link"><button className="button header__btn">
                <img src={uploadIcon} alt="upload icon" className='button__icon'></img>
                <span className="button__text">UPLOAD</span>
            </button></NavLink>
            <div className="header__profile header__profile--tablet"></div>
        </header>
    );
}

export default Header;