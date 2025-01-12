import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FoodCard from "../../../components/FoodCard/FoodCard";



const ChefRecommends = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
    }, [])

    const salad = items.filter(item => item.category === "salad").slice(0,3)

    return (
        <div className="my-20">
            <SectionTitle
                subHeading="Should try"
                heading="Chefs Recommends"
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">
                {/* <div className="card rounded-none bg-[#F3F3F3] w-96 shadow-xl">
                    <figure className="w-full">
                        <img
                            src={img}
                            alt="Salads"
                            className="w-full h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase hover:text-[#BB8506] mt-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none bg-[#F3F3F3] w-96 shadow-xl">
                    <figure className="w-full">
                        <img
                            src={img}
                            alt="Salads"
                            className="w-full h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase hover:text-[#BB8506] mt-4">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none bg-[#F3F3F3] w-96 shadow-xl">
                    <figure className="w-full">
                        <img
                            src={img}
                            alt="Salads"
                            className="w-full h-[250px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase hover:text-[#BB8506] mt-4">Add to Cart</button>
                        </div>
                    </div>
                </div> */}
                {
                    salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }

            </div>
        </div>
    );
};

export default ChefRecommends;