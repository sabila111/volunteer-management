import { useLoaderData } from "react-router-dom";
import AllVolunteerCard from "./AllVolunteerCard";
import { useState } from "react";

const AllVolunteer = () => {
    const initialVolunteers = useLoaderData();
    const [volunteers, setVolunteers] = useState(initialVolunteers);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);

        fetch(`https://assignment-11-server-delta-bice.vercel.app/volunteer?title=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => setVolunteers(data))
            .catch((err) => console.error(err));
    };

   
    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedVolunteers = [...volunteers].sort((a, b) => {
        return sortOrder === "asc"
            ? a.volunteersNeeded - b.volunteersNeeded
            : b.volunteersNeeded - a.volunteersNeeded;
    });

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-700 pb-3 text-transparent bg-clip-text text-center pt-32 mb-7">
                All Volunteer Need Posts
            </h1>

            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border rounded p-2 w-full md:w-1/3"
                />

               
                <select
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="border rounded p-2 w-full md:w-1/3 text-black dark:text-black"
                >
                    <option value="asc">Sort by Volunteers Needed (Ascending)</option>
                    <option value="desc">Sort by Volunteers Needed (Descending)</option>
                </select>
            </div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 place-items-center">
                {sortedVolunteers.length > 0 ? (
                    sortedVolunteers.map((volunteer) => (
                        <AllVolunteerCard key={volunteer._id} volunteer={volunteer} />
                    ))
                ) : (
                    <p className="text-center text-red-600 font-bold">No matching volunteers found</p>
                )}
            </div>
        </div>
    );
};

export default AllVolunteer;
