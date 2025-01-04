import { useEffect, useState } from "react";
import VolunteerNowCard from "./VolunteerNowCard";

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
        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
            
                {
volunteers.map(volunteer=> <VolunteerNowCard key={volunteer._id} volunteer={volunteer}></VolunteerNowCard>)
                }
           
        </div>
    );
};

export default VolunteerNow;