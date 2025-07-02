import { useEffect, useState } from "react";
import VolunteerNowCard from "./VolunteerNowCard";
import { Link } from "react-router-dom";

const VolunteerNow = () => {

    const[volunteers, setVolunteers] = useState([])
    
    
    useEffect(()=>{
        fetch('http://localhost:5000/volunteer')
        .then((res) => res.json())
        .then((data) =>{
            const sortedReview = data.sort((a, b) => b.rating - a.rating)
            setVolunteers(sortedReview.slice(0,6))
           
        })
    },[])

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10  place-items-center">
            
            {
volunteers.map(volunteer=> <VolunteerNowCard key={volunteer._id} volunteer={volunteer}></VolunteerNowCard>)
            }
       
    </div>

   <div className="max-w-32 mx-auto">
   <Link to={'/allVolunteerNeed'}>
   <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-700 to-cyan-400 text-white font-bold  mt-8">See All</button>
   </Link>
   </div>
        </div>
    );
};

export default VolunteerNow;