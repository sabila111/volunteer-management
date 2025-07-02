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
        <div className="ml-10">
<h1 className="text-2xl md:text-3xl lg:text-4xl pt-5 font-bold text-center bg-gradient-to-r from-cyan-400 to-indigo-700 pb-1 text-transparent bg-clip-text my-8">
               My Volunteer Request Posts 
            </h1>
        {posts.length === 0 ? (

<p className="text-center text-lg text-gray-500 font-semibold">
You have no volunteer need posts. Add one to see it here!
</p>

        ): (

            <div className="overflow-x-auto pt-10">
  <table className="sm:table-auto md:table lg:table w-full">

    <thead >
      <tr className='font-bold  text-base md:text-lg lg:text-xl dark:text-white'>
        <th >Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Button</th>
        
      </tr>
    </thead>
    <tbody>
     
      {posts.map((post) => (
        <tr key={post._id}
        className="text-xs text-center md:text-start lg:text-start sm:text-sm md:text-base lg:text-lg border-b"
        >
          <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.name}</td>
          <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.email}</td>
          <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.status} </td>
          <td className='font-semibold text-lg'>
            <div className="">

            <button onClick={()=>handlePostDelete(post._id)} className="bg-gradient-to-r from-indigo-700 to-cyan-400 text-white text-base px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-3 md:text-lg lg:text-xl "><IoTrashBinOutline /></button>

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