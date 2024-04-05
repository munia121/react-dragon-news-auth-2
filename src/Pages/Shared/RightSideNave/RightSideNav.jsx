/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-2xl text-center bg-slate-200 p-4">All Categories</h2>
            {
                categories.map(category =>
                    <Link to={`/category/${category.id}`} className="block ml-4 text-xl font-bold ">
                        {category.name}
                    </Link>)
            }
        </div>
    );
};

export default RightSideNav;