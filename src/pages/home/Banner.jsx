import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="carousel w-full h-[400px] mt-20 inset-0 bg-black bg-opacity-50">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/Tq1MntK/medium.jpg"
            className="w-full " />
            
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <div>
            <h2 className="text-4xl font-bold text-white ">WE TRY TO HELP PEOPLE WITH VOLUNTEERING</h2>
            <p className="text-2xl font-bold mb-8 mt-4 text-center text-indigo-800">Try Our Programs and Help People For Their Needs </p>
           <div className="flex justify-center gap-3 items-center">
           <Link to={'/allVolunteerNeed'}>
           <button className="px-3 py-3 bg-gradient-to-r from-indigo-700 to-cyan-400 text-white rounded-lg">Check Our Programs</button>
           </Link>
         
           </div>
            </div>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/TqvMtQz/8.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <div>
            <h2 className="text-4xl font-bold text-white ">WE TRY TO HELP PEOPLE WITH VOLUNTEERING</h2>
            <p className="text-2xl font-bold mb-8 mt-4 text-center text-indigo-600">Try Our Programs and Help People For Their Needs </p>
            <div className="flex justify-center gap-3 items-center">
            <Link to={'/allVolunteerNeed'}>
           <button className="px-3 py-3 bg-gradient-to-r from-indigo-700 to-cyan-400 text-white rounded-lg">Check Our Programs</button>
           </Link>
           </div>
            </div>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/g6S37T8/2.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <div>
            <h2 className="text-4xl font-bold text-white ">WE TRY TO HELP PEOPLE WITH VOLUNTEERING</h2>
            <p className="text-2xl font-bold mb-8 mt-4  text-center text-indigo-600">Try Our Programs and Help People For Their Needs </p>
            <div className="flex justify-center gap-3 items-center">
            <Link to={'/allVolunteerNeed'}>
           <button className="px-3 py-3 bg-gradient-to-r from-indigo-700 to-cyan-400 text-white rounded-lg">Check Our Programs</button>
           </Link>
           </div>
            </div>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/SXpmjyCV/The-Career-Benefits-of-Volunteering-During-Your-Job-Search-2.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <div>
            <h2 className="text-4xl font-bold text-white ">WE TRY TO HELP PEOPLE WITH VOLUNTEERING</h2>
            <p className="text-2xl font-bold mb-8 mt-4 text-center text-indigo-600">Try Our Programs and Help People For Their Needs </p>
            <div className="flex justify-center gap-3 items-center">
            <Link to={'/allVolunteerNeed'}>
           <button className="px-3 py-3 bg-gradient-to-r from-indigo-700 to-cyan-400 text-white rounded-lg">Check Our Programs</button>
           </Link>
           </div>
            </div>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;