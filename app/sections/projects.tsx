const projects = [
  {
    title: "E-Commerce Store",
    description: "A full-stack online store with Stripe payments.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A productivity app for managing daily tasks.",
    tech: ["React", "TypeScript", "Node.js"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my work.",
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        My Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-gray-200 dark:border-zinc-800 
                       bg-gray-50 dark:bg-zinc-900 hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm bg-gray-100 dark:bg-zinc-800 rounded text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
