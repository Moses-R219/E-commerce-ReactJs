import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div className="nav-conatiner">
            <Link className="logo-container" to="/">
                <img src="/assets/cr.png"/>
            </Link>
            <div className="nav-link-container">
                <Link className="nav-link" to="/shop">
                    <h2>Shopping</h2>
                </Link>
            </div>
            <Outlet />
            </div>
        </Fragment>
    );
};


export default Navigation;