import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophia Khan",
    role: "Community Volunteer",
    message:
      "Volunteering here changed my perspective on life. I feel more connected to the community than ever before.",
    image: "https://i.ibb.co.com/TxLQWTzr/vertical-shot-happy-dark-skinned-female-with-curly-hair.jpg",
  },
  {
    name: "David Wilson",
    role: "Event Coordinator",
    message:
      "Organizing events for this cause has been fulfilling. Seeing people come together for a purpose is truly inspiring.",
    image: "https://i.ibb.co.com/G4q2rqcW/eVT.jpg",
  },
  {
    name: "Emily Carter",
    role: "Medical Aid Volunteer",
    message:
      "Providing medical aid to those in need has been an eye-opening experience. I encourage everyone to contribute.",
    image: "https://i.ibb.co.com/WpjTVYQh/ght-in.jpg",
  },
];

const Testimonials = () => {
  return (
   
      <div className=" px-16 md:px-0 lg:px-0  py-6 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-700 pb-1 text-transparent bg-clip-text text-center mt-10 mb-5">
          Testimonials
        </h2>
        <p className="text-gray-600 mt-2 mb-10 font-medium">
          Hear from our amazing volunteers about their life-changing experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-lg border border-gray-300 hover:border-indigo-700 transition-all bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-indigo-700 object-cover"
              />
              <h3 className="text-lg font-semibold mt-4 text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-indigo-800 text-sm font-base">{testimonial.role}</p>
              <p className="mt-3 text-gray-700 text-sm">{testimonial.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
   
  );
};

export default Testimonials;
