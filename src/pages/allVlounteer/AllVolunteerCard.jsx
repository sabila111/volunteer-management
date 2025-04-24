import { Link } from "react-router-dom";

const AllVolunteerCard = ({volunteer}) => {
    const{postTitle, thumbnail, category, deadline, _id} = volunteer
    return (
        <div>
           <div className="p-5 rounded-xl bg-base-100 h-[525px] w-[300px] shadow-xl">
        <figure>
          <img
          className="w-full h-60 rounded-xl"
            src={thumbnail}
            alt="Shoes" />
        </figure>
        <div className=" my-5">
          <h2 className="text-2xl font-bold mb-3 text-black dark:text-black h-16">{postTitle}</h2>
          <p className="text-lg text-gray-500 font-semibold mb-2">{category}</p>
    
         <p className="text-xl font-bold mb-4 text-black dark:text-black h-12">Deadline: {deadline}</p>
          <div className="">
            <Link to={`/volunteerNeedDetails/${volunteer._id}`}><button className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-700 to-cyan-400 text-white font-bold">View Details</button></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AllVolunteerCard;