import { useEffect, useState } from "react";

const VolunteerNow = () => {

    const[games, setGames] = useState([])
    
    
    useEffect(()=>{
        fetch('http://localhost:5000/volunteer')
        .then((res) => res.json())
        .then((data) =>{
            const sortedReview = data.sort((a, b) => b.rating - a.rating)
            setGames(sortedReview.slice(0,6))
        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default VolunteerNow;