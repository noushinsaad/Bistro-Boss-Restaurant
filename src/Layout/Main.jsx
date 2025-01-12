import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet className='min-h-screen'></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;