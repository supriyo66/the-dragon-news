import { Link } from "react-router-dom";


const Newscart = ({news}) => {
    const {name,title,details,thumbnail_url,_id,image_url}=news
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="w-full"><img className="" src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`}className="text-blue-500">Read more</Link></p>
     :<p> {details}</p>
    }
    
  </div>
</div>
        </div>
    );
};

export default Newscart;