/* eslint-disable react/prop-types */
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="my-10">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center mt-4">
                <button className="btn btn-outline border-0 border-b-4 ">Order Your Favorite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;