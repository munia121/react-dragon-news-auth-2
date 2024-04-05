import { useLoaderData } from "react-router-dom";
import BrakingNews from "./BrakingNews/BrakingNews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import NavBar from "./Shared/NavBar";
import RightSideNav from "./Shared/RightSideNave/RightSideNav";
import NewsCard from "../components/NewsCard";

const Home = () => {

    const news = useLoaderData()
    console.log(news)

    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>

                {/* news container */}
                <div className="md:col-span-2 ">
                    <h2 className="text-4xl">News coming soon</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
                    }
                </div>


                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;