import { useEffect, useState } from "react";

const NeedPost = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    fetch("http://localhost:5000/volunteer") 
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);
    return (
        <div>
            hiii
        </div>
    );
};

export default NeedPost;