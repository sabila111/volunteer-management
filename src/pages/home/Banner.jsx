
const Banner = () => {
    return (
        <div className="carousel w-full h-96 mt-6">
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
           <button className="px-3 py-3 bg-indigo-500 text-white rounded-lg">Join Us</button>
          <button className="px-3 py-2 rounded-lg border-2 border-indigo-500 font-bold text-white">Check Our Program</button>
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
           <button className="px-3 py-3 bg-indigo-500 text-white rounded-lg">Join Us</button>
          <button className="px-3 py-2 rounded-lg border-2 border-indigo-500 font-bold text-white">Check Our Program</button>
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
           <button className="px-3 py-3 bg-indigo-500 text-white rounded-lg">Join Us</button>
          <button className="px-3 py-2 rounded-lg border-2 border-indigo-500 font-bold text-white">Check Our Program</button>
           </div>
            </div>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/nRL02r5/images-5.jpg"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <div>
            <h2 className="text-4xl font-bold text-white ">WE TRY TO HELP PEOPLE WITH VOLUNTEERING</h2>
            <p className="text-2xl font-bold mb-8 mt-4 text-center text-indigo-600">Try Our Programs and Help People For Their Needs </p>
            <div className="flex justify-center gap-3 items-center">
           <button className="px-3 py-3 bg-indigo-500 text-white rounded-lg">Join Us</button>
          <button className="px-3 py-2 rounded-lg border-2 border-indigo-500 font-bold text-white">Check Our Program</button>
           </div>
            </div>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;