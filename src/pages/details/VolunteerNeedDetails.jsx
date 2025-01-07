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

<h2 className='text-center text-3xl font-bold mt-10 mb-8 text-indigo-700'>----Volunteer Details Page----</h2>

<div className=" bg-base-100 w-8/12 mx-auto shadow-xl px-7">
  <figure>
    <img
    className='w-full'
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="my-5 ">
    <h2 className="text-center text-3xl font-bold">{postTitle}</h2>
    <p className='my-3 font-medium text-gray-500 text-center'>Category: {category}</p>
    <p className='text-center font-semibold text-lg my-3'>{description}</p>
    <p className='text-center font-semibold mb-3 text-xl'>Volunteers Need: <span className='text-gray-500'>{volunteersNeeded}</span></p>
   <div className='flex justify-around text-xl font-medium'>
   <p className=''>Deadline: <span className='text-gray-500'>{deadline}</span></p>
   <p className=''>Location: <span className='text-gray-500'>{location}</span></p>
   </div>
   
   
  
     <Link to={`/beVolunteer/${volunteer._id}`}>
     <button className="px-4 py-3 rounded-lg text-white w-full my-5  bg-gradient-to-r from-indigo-700 to-cyan-400">Be a Volunteer</button>
     </Link>
  
  </div>
</div>

        </div>
    );
};

export default VolunteerNeedDetails;