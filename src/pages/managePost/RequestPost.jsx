import { useEffect, useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const RequestPost = () => {
     const [posts, setPosts] = useState([]);

      useEffect(() => {
        
         fetch("https://assignment-11-server-delta-bice.vercel.app/volunteer-application") 
           .then((res) => res.json())
           .then((data) => setPosts(data))
           .catch((err) => console.error(err));
       }, []);


        const handlePostDelete= id => {
           console.log(id)
           Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, remove it!"
             }).then((result) => {
               if (result.isConfirmed) {
              
           fetch(`https://assignment-11-server-delta-bice.vercel.app/volunteer-application/${id}`, {
               method:'DELETE'
               })
               .then(res => res.json())
               .then(data => {
                   console.log('delete is done',data.deletedCount)
               
                 if(data.deletedCount > 0){
                   console.log('anything')
                   Swal.fire({
                           title: "Removed!",
                           text: "Your requested has been removed.",
                           icon: "success"
                         });
       
                     const remainingPosts = posts.filter(post => post._id !== id)
                     console.log(remainingPosts,'deleted')
                     setPosts(remainingPosts)
                }
               
               })
              
               }
             });
       }

    return (
        <div>

        {posts.length === 0 ? (

<p className="text-center text-lg text-gray-500 font-semibold">
You have no volunteer need posts. Add one to see it here!
</p>

        ): (

            <div className="overflow-x-auto pt-10">
  <table className="sm:table-auto md:table lg:table w-full">

    <thead >
      <tr className='font-bold  sm:text-base md:text-lg lg:text-xl '>
        <th className="">Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Button</th>
        
      </tr>
    </thead>
    <tbody>
     
      {posts.map((post) => (
        <tr key={post._id}
        className="text-xs sm:text-sm md:text-base lg:text-lg border-b"
        >
          <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.name}</td>
          <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.email}</td>
          <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.status} </td>
          <td className='font-semibold text-lg'>
            <div className="">

            <button onClick={()=>handlePostDelete(post._id)} className="bg-gradient-to-r from-indigo-700 to-cyan-400 text-white sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-3 "><IoTrashBinOutline /></button>

            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        )}
    </div>
    );
};

export default RequestPost;