import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../components/context/DataContext";

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/career'}>Career</NavLink></li>
        <li><NavLink to={'/slider'}>Slider</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/addict'}>Addict</NavLink></li>

    </>

    const handleSignOut = () =>{
        LogOut()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <Link to={'/register'} className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={userDefaultPicture} />
                    </Link>
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                        :
                        <Link to={'/login'} className="btn">Login</Link>
                }

            </div>
        </div>
    );
};

export default NavBar;