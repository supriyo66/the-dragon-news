import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftsideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))

    },[])
    return (
        <div className="space-y-6 p-4">
            <h1 className="font-bold">All Category</h1>
            <h1 className="text-center border py-5 rounded bg-slate-500">National News
            </h1>
            {
                categories.map(category=><Link className="block ml-4" key={category.id} to={`/category/${category.id}`}>
                    
                    {category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftsideNav;