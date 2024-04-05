import { useParams } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Pages/Shared/NavBar";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;