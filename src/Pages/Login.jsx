import { useContext } from "react";
import NavBar from "./Shared/NavBar";
import { AuthContext } from "../components/context/DataContext";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const { loginForm } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    console.log('login page',location)


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        loginForm(email, password)
            .then(result => {
                console.log(result.user)
                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .then(error => {
                console.log(error)
            })
    }


    return (
        <div className="text-center mt-10">
            <NavBar></NavBar>
            <h2 className="text-3xl font-bold mt-10 mb-10">Login your account</h2>
            <div className="hero ">
                <div className="hero-content flex-col ">

                    <div className="lg:w-[750px] px-20 py-10 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="">

                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* *********** */}
                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            {/* ************** */}  
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold">Login</button>
                            </div>
                            <p className="font-bold mt-5 ">Dont’t Have An Account ?<Link className="text-red-600" to={'/register'}> Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;