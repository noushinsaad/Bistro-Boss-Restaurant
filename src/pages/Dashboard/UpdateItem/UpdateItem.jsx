import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?&key=${image_hosting_key}`;
const UpdateItem = () => {
    const { register, handleSubmit } = useForm()
    const { name, category, price, recipe, _id } = useLoaderData();
    // console.log(foodItem);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': "multipart/form-data"
            }
        })
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuInfo = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuInfo)
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    return (
        <div>
            <SectionTitle heading="update item information" subHeading="Change The World"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            {...register("name", { required: true })} required
                            defaultValue={name}
                            type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                defaultValue={price}
                                type="number" step="0.01" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipe details*/}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea
                            {...register("recipe", { required: true })}
                            defaultValue={recipe}
                            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <div>
                        <input {...register("image", { required: true })} type="file" className="file-input w-full" />
                    </div>
                    <button className="btn">
                        Update Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;