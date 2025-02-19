import { FaHandsHelping, FaChalkboardTeacher, FaHandHoldingHeart, FaUsers } from "react-icons/fa";

const GetInvolved = () => {
  return (
    <section className="py-16 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-700 pb-1 text-transparent bg-clip-text text-center pt-14 mb-5">Get Involved</h2>
        <p className="text-gray-600 mt-3 dark:text-white">Make a lasting impact by donating, mentoring, sponsoring, or volunteering.</p>
      </div>

      {/* Contribution Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Donate */}
        <div className="p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-all">
          <FaHandHoldingHeart className="text-5xl text-red-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Donate</h3>
          <p className="text-gray-600 mt-2 dark:text-white">Support us with funds to help those in need.</p>
          <button className="mt-4 px-5 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">Donate Now</button>
        </div>

        {/* Mentor */}
        <div className="p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-all">
          <FaChalkboardTeacher className="text-5xl text-blue-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Mentor</h3>
          <p className="text-gray-600 mt-2 dark:text-white">Guide and inspire the next generation of volunteers.</p>
          <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">Become a Mentor</button>
        </div>

        {/* Sponsor */}
        <div className="p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-all">
          <FaHandsHelping className="text-5xl text-green-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Sponsor</h3>
          <p className="text-gray-600 mt-2 dark:text-white">Partner with us to expand our impact.</p>
          <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">Become a Sponsor</button>
        </div>

        {/* Volunteer */}
        <div className="p-8 rounded-2xl shadow-lg text-center border hover:shadow-xl transition-all">
          <FaUsers className="text-5xl text-purple-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Volunteer</h3>
          <p className="text-gray-600 mt-2 dark:text-white">Join us in making a difference through hands-on involvement.</p>
          <button className="mt-4 px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">Join as a Volunteer</button>
        </div>
      </div>

      {/* Impact Counter */}
      <div className="mt-16 bg-gray-100 py-12 rounded-lg text-center">
        <h3 className="text-3xl font-semibold text-gray-800">Our Impact</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div>
            <h4 className="text-4xl font-bold text-red-500">500+</h4>
            <p className="text-gray-600">Volunteers Engaged</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-blue-500">$50K+</h4>
            <p className="text-gray-600">Funds Raised</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-green-500">10K+</h4>
            <p className="text-gray-600">Lives Impacted</p>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default GetInvolved;
