
import { useContext } from "react";
import NavBar from "./Shared/NavBar";
import { AuthContext } from "../components/context/DataContext";


const Register = () => {
    const {createRegister} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email,password)


        createRegister(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .then(error =>{
            console.log(error)
        })
    }


    return (
        <div className="text-center mt-10">
            <NavBar></NavBar>
            <h2 className="text-3xl font-bold mt-10 mb-10">Register your account</h2>
            <div className="hero ">
                <div className="hero-content flex-col ">
                    
                    <div className="lg:w-[750px] px-20 py-10 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="">
                            {/* ******* */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl ">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            {/* *********** */}
                            <div className="form-control mt-5">
                                <label className="label">
                                    <span className="label-text text-xl">Photo URL</span>
                                </label>
                                <input type="email" name="photo" placeholder="url" className="input input-bordered"  />
                            </div>
                            {/* ************* */}
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
                               
                            </div>
                            {/* ************** */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary font-bold">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;