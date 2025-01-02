/* eslint-disable react/prop-types */

const FoodCard = ({ item }) => {
    const { name, image, recipe} = item

    return (
        <div className="card rounded-none bg-[#F3F3F3] w-96 shadow-xl">
            <figure className="w-full">
                <img
                    src={image}
                    alt="Salads"
                    className="w-full h-[250px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase hover:text-[#BB8506] mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;