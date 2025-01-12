/* eslint-disable react/prop-types */


import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if (user && user.email) {
            // send item to the database
            // console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price, image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart update the cart items count
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to cart!!!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send  the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card rounded-none bg-[#F3F3F3] w-96 shadow-xl">
            <figure className="w-full">
                <img
                    src={image}
                    alt="Salads"
                    className="w-full h-[250px]" />
            </figure>
            <p className="absolute right-2 top-2 p-2 rounded-lg bg-slate-900 text-white">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-gray-300 border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase hover:text-[#BB8506] mt-4"
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;