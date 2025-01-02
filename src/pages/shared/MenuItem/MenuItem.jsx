/* eslint-disable react/prop-types */


const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item

    return (
        <div className="flex justify-center gap-2">
            <img className="w-[120px] rounded-b-[200px] rounded-tr-[200px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;