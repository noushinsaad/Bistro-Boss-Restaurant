import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu//salad-bg.jpg'


const Menu = () => {
    const [menu] = useMenu()
    // const popularItems = menu.filter(item => item.category === 'popular')
    const todaysOffered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* Offered Items */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory items={todaysOffered}></MenuCategory>
            {/* dessert items */}
            <MenuCategory
                items={dessert}
                title="dessert"
                coverImg={dessertImg}
            ></MenuCategory>
            {/* pizzas */}
            <MenuCategory
                items={pizza}
                title="pizza"
                coverImg={pizzaImg}
            ></MenuCategory>
            {/* soups */}
            <MenuCategory
                items={soup}
                title="soup"
                coverImg={soupImg}
            ></MenuCategory>
            {/* salads */}
            <MenuCategory
                items={salad}
                title="salad"
                coverImg={saladImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;