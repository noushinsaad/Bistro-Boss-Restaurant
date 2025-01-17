import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logged Out")
            })
            .catch(error => console.log(error))
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
        {/* {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
            </> :
                <><li><NavLink to='/login'>Login</NavLink></li></>
        } */}
    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex justify-center items-center gap-2">
                        {/* <a className="btn">{user.displayName}</a> */}
                        {isAdmin ?
                            <Link to="/dashboard/adminHome"><button className="btn">Dashboard</button></Link> :
                            <Link to='/dashboard/userHome'>
                                <button className="btn">
                                    <FaShoppingCart className="text-2xl" />
                                    <div className="badge badge-secondary">+{cart.length}</div>
                                </button>
                            </Link>}
                        <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn btn-ghost bg-white text-black hover:text-white">Log Out</button>
                    </div> :
                        <button className="btn btn-primary"><NavLink to='/login'>Login</NavLink></button>
                }
            </div>
        </div>
    );
};

export default NavBar;