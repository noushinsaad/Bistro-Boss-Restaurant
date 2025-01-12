import { FaAd, FaBook, FaCalendar, FaHamburger, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaHelmetUn } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin frm the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4 gap-2">

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils>
                                    Add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'>
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'>
                                    <FaBook></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'>
                                    <FaUsers></FaUsers>
                                    All Users
                                </NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <FaAd></FaAd>
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'>
                                        <FaList></FaList>
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }

                    <div className="divider"></div>

                    {/* shared nav links */}
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            <FaHamburger></FaHamburger>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                            <FaHelmetUn></FaHelmetUn>
                            Order
                        </NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;