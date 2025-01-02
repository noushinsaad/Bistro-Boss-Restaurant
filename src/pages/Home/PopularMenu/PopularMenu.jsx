
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular')
    

    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Popular Items"
                heading="From Our Menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center mt-4">
                <button className="btn btn-outline border-0 border-b-4 ">View Full Menu</button>
            </div>
        </section >
    );
};

export default PopularMenu;