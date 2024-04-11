import React from "react";

const Projects = ({ projects }) => {
  const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, link } = project;

    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover object-center"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <a href={link} className="text-blue-500 hover:underline mt-2 block">
            View Project
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
