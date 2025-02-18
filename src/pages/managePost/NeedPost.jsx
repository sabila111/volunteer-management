import { useContext, useEffect, useState } from "react";
import { IoPencil, IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const NeedPost = () => {
    const [posts, setPosts] = useState([]);
    const{user}= useContext(AuthContext)
    console.log("Logged-in user:", user);
    

    const filteredPosts = posts.filter((post) => post.email === user?.email);
    console.log("Filtered posts:", filteredPosts);
    

  useEffect(() => {
   
    fetch("https://assignment-11-server-delta-bice.vercel.app/volunteer") 
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
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
    fetch(`https://assignment-11-server-delta-bice.vercel.app/volunteer/${id}`, {
        method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('delete is done',data.deletedCount)
        
          if(data.deletedCount > 0){
            console.log('anything')
            Swal.fire({
                    title: "Deleted!",
                    text: "Your post has been deleted.",
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
          <tr className='font-bold  sm:text-base md:text-lg lg:text-xl dark:text-white'>
            <th className="">Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Buttons</th>
            
          </tr>
        </thead>
        <tbody>
         
          {posts.map((post) => (
            <tr key={post._id}
            className="text-xs sm:text-sm md:text-base lg:text-lg border-b"
            >
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.postTitle}</td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.category}</td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{post.location} </td>
              <td className='font-semibold text-lg'>
                <div className="flex flex-col  items-center gap-3">

                <button onClick={()=>handlePostDelete(post._id)} className="bg-gradient-to-r from-indigo-700 to-cyan-400 text-white sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-3 "><IoTrashBinOutline /></button>

            <Link to={`/manage/update/${post._id}`}>
            <button className="bg-gradient-to-r from-indigo-700 to-cyan-400 text-white sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-3 "><IoPencil /></button>
            </Link>
              
              

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

export default NeedPost;