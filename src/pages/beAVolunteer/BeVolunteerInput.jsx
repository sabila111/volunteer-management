import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BeVolunteerInput = ({ volunteer }) => {
    const { postTitle, thumbnail, category, deadline, description, location, volunteersNeeded, organizer_name, organizer_email } = volunteer

    const { user } = useContext(AuthContext)
    const{id} = useParams()

    const handleAddVolunteer = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const suggestion = form.suggestion.value

        const addReview = { name, email, suggestion, status: "requested", postId:id, }
        console.log(addReview)


        fetch('https://assignment-11-server-delta-bice.vercel.app/volunteer-application', {
                method:'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                
                body:JSON.stringify(addReview)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.result.insertedId && data.incrementResult.modifiedCount > 0 && data.incrementResult.matchedCount > 0){
                        Swal.fire({
                            title: 'Success',
                            text: 'Added successfully',
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
        <div className="  p-24">
            <h2 className="text-3xl font-extrabold mb-4 text-center mt-10 mb-5">Be a Volunteer</h2>
            <form onSubmit={handleAddVolunteer}>
                {/* form row 1 */}
                {user ?
                    <div className="md:flex mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Organizer Name</span>
                            </label>
                            <label className="input-group">
                                <input readOnly value={organizer_name} type="text"  placeholder="name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                            <label className="label">
                                <span className="label-text">Organizer Email</span>
                            </label>
                            <label className="input-group">
                                <input readOnly value={organizer_email} type="email"  placeholder="email" className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>

                    : <p></p>}


                {/* form row 2 */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Post Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={postTitle} name="post" placeholder="Post Title" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input list="dropdown-options" id="options" name="category" readOnly value={category} placeholder="Category" className="input input-bordered w-full" />
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
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={location} name="location" placeholder="Location" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={description} name="description" placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                {/* form row 4 */}

                <div className="md:flex mb-6">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Volunteers Needed </span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={volunteersNeeded} name="volunteersNeeded " placeholder="Volunteers Needed " className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4 ">
                        <label className="label">
                            <span className="label-text">Deadline </span>
                        </label>
                        <label className="input-group">
                            <input type="text" readOnly value={deadline} placeholder="Deadline " className="input input-bordered w-full" />
                        </label>

                    </div>


                </div>

                {/* form row 5 */}

                <div className="md:flex mb-6">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Volunteers Name </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" readOnly 
                            value={user.displayName || 'No Name'} placeholder="Volunteer Name " className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4 ">
                        <label className="label">
                            <span className="label-text">Volunteers Email </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" readOnly value={user.email} placeholder="Volunteers Email" className="input input-bordered w-full" />
                        </label>

                    </div>


                </div>

                {/* form row 6 */}

                <div className="md:flex mb-6">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Suggestion </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="suggestion" placeholder="Suggestion " className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4 ">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="status"
                                defaultValue="requested"
                                readOnly placeholder="Status" className="input input-bordered w-full" />
                        </label>

                    </div>


                </div>



                <div className="md:flex mb-6">

                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Thumbnail </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="thumbnail " readOnly value={thumbnail} placeholder="Thumbnail " className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                <input type="submit" value="Add Post" className="btn btn-block bg-gradient-to-r from-indigo-700 to-cyan-400 text-white mt-6 " />
            </form>
        </div>
    );
};

export default BeVolunteerInput;