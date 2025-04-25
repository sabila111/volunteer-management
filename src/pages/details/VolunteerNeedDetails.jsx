import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const VolunteerNeedDetails = () => {

    const volunteer = useLoaderData()
    const{postTitle, thumbnail, category, deadline, description, location, volunteersNeeded, organizer_name, organizer_email} = volunteer

    return (
        <div>
             <Helmet>

<title>KindHive | Volunteer Need Details Page</title>
</Helmet>

<h2 className='text-center text-3xl font-bold pt-28 mb-8 bg-gradient-to-r from-cyan-400 to-blue-800 text-transparent bg-clip-text'>Volunteer Details Page</h2>

<div className=" bg-base-100 w-8/12 mx-auto shadow-xl px-7 pt-7 rounded-xl">
  <figure>
    <img
    className='w-full rounded-xl'
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="my-5 ">
    <h2 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold text-black dark:text-black">{postTitle}</h2>
    <p className='my-3 font-medium text-gray-500 text-center'>Category: {category}</p>
    <p className='text-center font-semibold text-base md:text-lg lg:text-lg my-3 text-black dark:text-black'>{description}</p>
    <p className='text-center font-semibold mb-3 text-lg lg:text-xl text-black dark:text-black'>Volunteers Need: <span className='text-gray-500'>{volunteersNeeded}</span></p>
   <div className='flex justify-around text-xl font-medium'>
   <p className='text-base md:text-lg lg:text-xl text-black dark:text-black'>Deadline: <span className='text-gray-500'>{deadline}</span></p>
   <p className='text-base md:text-lg lg:text-xl text-black dark:text-black'>Location: <span className='text-gray-500'>{location}</span></p>
   </div>
   
   
  {
    volunteersNeeded > 0 ?  
    
    <Link to={`/beVolunteer/${volunteer._id}`}>
    <button className="px-4 py-3 rounded-lg text-white w-full my-5  bg-gradient-to-r from-indigo-700 to-cyan-400">Be a Volunteer</button>
    </Link>
    
    :
<p className="text-center text-red-600 font-bold text-lg my-5 pb-5">
              No more volunteers are needed for this post.
            </p>

  }
    
  
  </div>
</div>

        </div>
    );
};

export default VolunteerNeedDetails;