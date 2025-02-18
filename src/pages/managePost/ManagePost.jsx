import { useState } from 'react';
import NeedPost from './NeedPost';
import RequestPost from './RequestPost';
import { Helmet } from 'react-helmet';

const ManagePost = () => {
    const [activeSection, setActiveSection] = useState("needPosts");

  const handleToggle = (section) => {
    setActiveSection(section);
  };

  const getTitle = () => {
    return activeSection === "needPosts"
        ? "My Volunteer Need Posts Dashboard"
        : "My Volunteer Request Posts Dashboard";
};

    return (
        <div>

<Helmet>

<title>KindHive | Volunteer Dashboard</title>
</Helmet>

<h1 className="text-4xl pt-32 font-bold text-center bg-gradient-to-r from-cyan-400 to-indigo-700 pb-1 text-transparent bg-clip-text my-8">
                {getTitle()}
            </h1>
      <div className="flex justify-center gap-4 mb-8 mt-12">
        <button
          className={`px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-700 to-cyan-400 text-white font-bold ${activeSection === "needPosts" ? "active" : ""}`}
          onClick={() => handleToggle("needPosts")}
        >
          My Volunteer Need Posts
        </button>
        <button
          className={`px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-700 to-cyan-400 text-white font-bold ${activeSection === "requestPosts" ? "active" : ""}`}
          onClick={() => handleToggle("requestPosts")}
        >
          My Volunteer Request Posts
        </button>
      </div>

      <div>
        {activeSection === "needPosts" ? (
          <div>
           <NeedPost></NeedPost>
          </div>
        ) : (
          <div>
           <RequestPost></RequestPost>
          </div>
        )}
      </div>
        </div>
    );
};

export default ManagePost;