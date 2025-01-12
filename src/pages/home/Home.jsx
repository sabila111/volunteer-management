import { Helmet } from "react-helmet";
import Banner from "./Banner";
import VolunteerNow from "./VolunteerNow";
import News from "./News";


const Home = () => {
    return (
        <div>
            <Helmet>

            <title>KindHive | Home</title>
            </Helmet>


<Banner></Banner>
<VolunteerNow></VolunteerNow>
<News></News>
        </div>
    );
};

export default Home;