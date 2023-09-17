import { ToastContainer, toast } from 'react-toastify';
import {googleLogo } from "../assets"
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from '../redux/getItSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //firebase auth
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //google login
    const handleGoogleLogin = (e) => { 
        e.preventDefault();
        
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            dispatch(
                addUser({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })
            );
            setTimeout(() => {
                navigate('/');
            },1500)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }


    // google signout
    const handleGoogleSignOut = () => {
        signOut(auth).then(() => {
            toast.success("Sign-out successful");
            dispatch(removeUser());
        }).catch((error) => {
            console.log(error);
        });
    }


    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
                <div
                    onClick={handleGoogleLogin}
                    className="text-base w-60 h-12 tracking-wider flex items-center justify-center gap-4 border-[1px] border-gray-400 rounded-md cursor-pointer  hover:border-blue-600"
                >
                    <img className="w-8" src={googleLogo} alt="googleLogo" />
                    <span className="text-sm ">
                        Sign in with Google
                    </span>
                </div>
                <button onClick={handleGoogleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 active:bg-gray-900">Sign Out</button>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={true}
                draggable={true}
                pauseOnHover={false}
                theme='dark'
            />
        </div>
    )
}

export default Login