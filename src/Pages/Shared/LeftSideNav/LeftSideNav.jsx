import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'






const LeftSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-bold">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="p-3  mb-6">
                <h2 className="font-bold text-xl">Find Us On</h2>
                <a className="flex items-center text-lg  p-4 border rounded-t-lg" href="">
                    <FaFacebookF className="mr-3"></FaFacebookF>
                    Facebook
                </a>
                <a className="flex items-center text-lg  p-4 border " href="">
                    <CiTwitter className="text-sky-400 mr-3"></CiTwitter>
                    Twitter

                </a>
                <a className="flex items-center text-lg  p-4 border rounded-b-lg" href="">

                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>

            </div>

            {/* q zone */}
            <div className="p-4 space-y-3 mb-6 bg-gray-100">
                <h2>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default LeftSideNav;