import { FaGraduationCap } from "react-icons/fa";

const Qualifications = () => {
  const qualifications = [
    {
      title: "Bachelor of Science in Information Systems (Honours)",
      details: [
        "Period: 2020 - 2024",
        "Institution: Manicaland State University Of Applied Sciences",
      ],
      delay: 300,
    },
    {
      title: "MSc Information Systems and Technologies",
      details: [
        "Specialisation: Artificial Intelligence, Mathematical Modelling and Supercomputing",
        "Start: Sept 2025",
        "Status: Pending",
        "Institution: Don State Technical University",
      ],
      delay: 500,
    },
  ];

  return (
    <section id="qualifications">
      <div className="md:container px-5 py-14">
        {/* Section heading */}
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Qualifications
        </h2>
        <h4 className="subtitle text-gray-50" data-aos="fade-down">
          EDUCATION & DEGREES
        </h4>
        <br />

        {/* Qualification cards */}
        <div className="flex gap-5 justify-between flex-wrap group">
          {qualifications.map((q, index) => (
            <div
              key={index}
              className="min-w-[16rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-yellow-600 p-6 flex-1 group-hover:blur-sm hover:!blur-none"
              data-aos="fade-up"
              data-aos-delay={q.delay}
            >
              <div className="flex justify-center mb-4">
                {/* Changed icon color to black */}
                <FaGraduationCap className="text-black text-3xl" />
              </div>
              <h6 className="my-3 text-gray-50 font-semibold">{q.title}</h6>
              <ul className="text-gray-200 text-sm leading-6 space-y-1">
                {q.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
