import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crwn } from '../../assets/crown.svg'
import './navigation.styles.scss';
const Navigation = () => {
    return (
        <Fragment>
            <div className="nav-conatiner">
                <Link className="logo-container" to="/">
                    <Crwn className="logo" />
                </Link>
                <div className="nav-link-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
            </div>
                <Outlet />
           
        </Fragment>
    );
};


export default Navigation;