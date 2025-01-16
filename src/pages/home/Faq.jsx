
const Faq = () => {
    return (
       <div className="my-16 max-w-7xl mx-auto">
 <h2 className="text-center text-2xl md:text-4xl lg:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
<div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> What is the purpose of this website?</div>
            <div className="collapse-content">
                <p>This website connects volunteers with organizations and projects that need assistance.</p>
            </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium">Who can sign up to be a volunteer?</div>
            <div className="collapse-content">
                <p>Anyone who is willing to dedicate their time and skills to help others can sign up.

</p>
            </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium">How do I find opportunities that match my skills and interests?</div>
            <div className="collapse-content">
                <p> Use the search or filter options to browse opportunities by category, location, or skill set.

                </p>
            </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> Can I cancel my participation in a volunteer activity?</div>
            <div className="collapse-content">
                <p>Yes, but please inform the organizer as early as possible to avoid inconveniences.
                </p>
            </div>
        </div>

        <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg md:text-xl lg:text-xl font-medium"> How do I post a volunteer need?</div>
            <div className="collapse-content">
                <p>Log in to your account, navigate to the Post Volunteer Need section, and fill in the details of your requirement.
                </p>
            </div>
        </div>

    </div>

       </div>
    );
};

export default Faq;