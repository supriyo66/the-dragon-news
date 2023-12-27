import { useLoaderData} from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftsideNav from "../shared/LeftsideNav/LeftsideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightsideNav from "../shared/RightsideNav/RightsideNav";
import BreakingNews from "./BreakingNews";
import Newscart from "../newsCart/Newscart";


const Home = () => {
    const news=useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           <div className="grid grid-cols-4 gap-3">
            <div className="">
                <LeftsideNav></LeftsideNav>
            </div>
            <div className="col-span-2 ">
             {news.map(anews=><Newscart key={anews._id} news={anews}></Newscart>)}
            </div>
            <div className="">
                <RightsideNav></RightsideNav>
            </div>
           </div>
            
        </div>
    );
};

export default Home;