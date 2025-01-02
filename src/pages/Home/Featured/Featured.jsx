import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle
                subHeading='Check it out'
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 md:gap-10 md:py-20 md:px-6 lg:px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 5, 2024</p>
                    <p className="uppercase">Where can I get Some?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Placeat aliquid enim commodi consequatur nesciunt debitis maiores quis aliquam
                        quia ab corrupti, repellendus, impedit animi doloremque, at quos iste. Impedit,
                        iure natus repudiandae est at ea a corrupti libero aut dolore inventore eius adipisci delectus asperiores earum qui numquam provident voluptatibus!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 border-white mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;