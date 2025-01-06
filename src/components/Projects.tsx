const projects = [
  {
    title: "Data Visualization Dashboard",
    description:
      "Built an interactive data visualization dashboard using D3.js and React.",
    image: "/1.png",
  },
  {
    title: "Company Profile",
    description:
      "Developed a Company Profile platform using React and Tailwind CSS.",
    image: "/company.png",
  },
  {
    title: "Social Media Platform",
    description:
      "Built a social media app with real-time chat features using React, Node.js, and WebSocket.",
    image: "/circle.png",
  },
  {
    title: "Quiz Application",
    description:
      "Developed an interactive quiz application using React Native and Firebase .",
    image: "/apps1.png",
  },
  {
    title: "HotelScout Application",
    description:
      "Designed and developed a responsive portfolio site with React Native and Material UI.",
    image: "/apps2.png",
  },

  {
    title: "E-commerce",
    description:
      "Developed a E-commerc platform integrated with APIs using React and Node Js.",
    image: "/ecomm.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-500">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full  bg-gray-900 rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
