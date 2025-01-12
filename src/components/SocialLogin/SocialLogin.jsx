import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Created in Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                        else {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User Logged in Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
            })
    }

    return (
        <div className="p-4 text-center mx-4">
            <div className="divider px-2"></div>
            <button onClick={handleGoogleSignIn} className="btn w-full">
                <FaGoogle></FaGoogle>
                Sign Up with Google
            </button>
        </div>
    );
};

export default SocialLogin;