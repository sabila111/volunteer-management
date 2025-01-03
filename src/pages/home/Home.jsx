import { Helmet } from "react-helmet";
import Banner from "./Banner";
import VolunteerNow from "./VolunteerNow";


const Home = () => {
    return (
        <div>
            <Helmet>

            <title>KindHive | Home</title>
            </Helmet>


<Banner></Banner>
<VolunteerNow></VolunteerNow>
        </div>
    );
};

export default Home;