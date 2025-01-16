import { Helmet } from "react-helmet";
import Banner from "./Banner";
import VolunteerNow from "./VolunteerNow";
import News from "./News";
import Faq from "./Faq";


const Home = () => {
    return (
        <div>
            <Helmet>

            <title>KindHive | Home</title>
            </Helmet>


<Banner></Banner>
<VolunteerNow></VolunteerNow>
<Faq></Faq>
<News></News>
        </div>
    );
};

export default Home;