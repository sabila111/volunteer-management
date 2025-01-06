import { useLoaderData } from "react-router-dom";
import BeVolunteerInput from "./BeVolunteerInput";
import { Helmet } from "react-helmet";

const BeVolunteer = () => {
    const volunteer = useLoaderData([])
    const volunteers = Array.isArray(volunteer) ? volunteer : [volunteer];
    console.log(volunteers)
    return (
        <div>
            <Helmet>

<title>KindHive |Be a Volunteer</title>
</Helmet>
            {
                volunteers.map(volunteer=> <BeVolunteerInput key={volunteer._id} volunteer={volunteer}></BeVolunteerInput>)
            }
        </div>
    );
};

export default BeVolunteer;