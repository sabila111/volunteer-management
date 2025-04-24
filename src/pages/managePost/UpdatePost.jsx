import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const UpdatePost = () => {
    const update = useLoaderData()
    console.log(update);
    const { user } = useContext(AuthContext)
 const [startDate, setStartDate] = useState(new Date())

 const { postTitle, thumbnail, category, description, location, volunteersNeeded,   _id, } = update

const handleAddVolunteer = e => {


        e.preventDefault()
        const form = e.target
        const organizer_name = form.organizer_name.value
        const organizer_email = form.organizer_email.value
        const postTitle = form.postTitle.value
        const category = form.category.value
        const location = form.location.value
        const description = form.description.value
        const volunteersNeeded = form.volunteersNeeded.value
        const deadline = startDate
        const thumbnail = form.thumbnail.value

        const addReview = {
            organizer_name,
            organizer_email, postTitle, category, location, description, thumbnail, volunteersNeeded, deadline
        }
        console.log(addReview)
        fetch(`https://assignment-11-server-delta-bice.vercel.app/volunteer/${_id}`, {
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        
        body:JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Update response:",data)
            if(data. modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset()
            }

        })
        .catch(error => {
    console.error("catch error:", error);
});
    }

    return (
        <div>
        <Helmet>

<title>KindHive |Update Volunteer Need Post</title>
</Helmet>


<div className="p-14 md:p-20 lg:p-24">
       <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-700 pb-1 text-transparent bg-clip-text text-center mt-10 mb-5">Update Volunteer Need Post</h2>
       <form onSubmit={handleAddVolunteer}>
           {/* form row 1 */}
           {user? 
           <div className="md:flex mb-1 md:mb-6 lg:mb-6">
           <div className="form-control md:w-1/2">
               <label className="label">
                   <span className="label-text text-black dark:text-white">Name</span>
               </label>
               <label className="input-group">
                   <input readOnly value={user.displayName || 'No Name'} type="text" name="organizer_name" placeholder="name" className="input input-bordered w-full text-black dark:text-black" />
               </label>
           </div>

           <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
               <label className="label">
                   <span className="label-text  text-black dark:text-white">Email</span>
               </label>
               <label className="input-group">
                   <input readOnly value={user.email} type="email" name="organizer_email" placeholder="email" className="input input-bordered w-full text-black dark:text-black" />
               </label>
           </div>


       </div>
           
           :   <p></p> }
           

           {/* form row 2 */}
           <div className="md:flex mb-1 md:mb-6 lg:mb-6">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text text-black dark:text-white">Post Title</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="postTitle" defaultValue={postTitle} placeholder="Post Title" className="input input-bordered w-full text-black dark:text-black" />
                   </label>
               </div>

               <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                   <label className="label">
                       <span className="label-text text-black dark:text-white" >Category</span>
                   </label>
                   <label className="input-group">
                       <input list="dropdown-options" id="options" name="category" placeholder="Category" defaultValue={category} className="input input-bordered w-full text-black dark:text-black" />
                       <datalist id="dropdown-options">
                           <option value="healthcare" />
                           <option value="education" />
                           <option value="social service" />
                           <option value="animal welfare" />
                       </datalist>

                   </label>
               </div>


           </div>
           {/* form row 3 */}
           <div className="md:flex mb-1 md:mb-6 lg:mb-6">
               <div className="form-control md:w-1/2">
                   <label className="label">
                       <span className="label-text text-black dark:text-white">Location</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full text-black dark:text-black"/>
                   </label>
               </div>

               <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                   <label className="label">
                       <span className="label-text text-black dark:text-white">Description</span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="description" defaultValue={description} placeholder="description" className="input input-bordered w-full text-black dark:text-black" />
                   </label>
               </div>


           </div>

           {/* form row 4 */}

           <div className="md:flex mb-1 md:mb-6 lg:mb-6">
          
           <div className="form-control md:w-1/2 ">
                   <label className="label">
                       <span className="label-text text-black dark:text-white">Volunteers Needed </span>
                   </label>
                   <label className="input-group">
                       <input type="text" name="volunteersNeeded" defaultValue={volunteersNeeded} placeholder="Volunteers Needed " className="input input-bordered w-full text-black dark:text-black" />
                   </label>
               </div>

               <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4 ">
                   <label className="label">
                       <span className="label-text text-black dark:text-white">Deadline </span>
                   </label>
                   
                   <DatePicker
           className='border p-3 w-full rounded-md text-black dark:text-black'
           selected={startDate}
           onChange={date => setStartDate(date)}
         />
               </div>


           </div>

           <div className="md:flex mb-1 md:mb-6 lg:mb-6">
          
          <div className="form-control md:w-full ">
                  <label className="label">
                      <span className="label-text text-black dark:text-white">Thumbnail </span>
                  </label>
                  <label className="input-group">
                      <input type="text" name="thumbnail" defaultValue={thumbnail} placeholder="Thumbnail " className="input input-bordered w-full text-black dark:text-black" />
                  </label>
              </div>


          </div>
           
           <input type="submit" value="Update Post" className="btn btn-block bg-gradient-to-r from-indigo-700 to-cyan-400 text-white mt-6 " />
       </form>
   </div>

   </div>
    );
};

export default UpdatePost;