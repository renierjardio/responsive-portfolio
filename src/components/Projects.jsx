import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
    {
      title: "Ballpoint",
      subtitle: "AI-Powered Note-taking Application",
      description:
        "Designed and prototyped an intuitive AI note-taking app to solve modern-day challenges in organization and productivity. Integrated features like context-aware prompts and AI-generated summaries.",
      technologies: [
        "Figma",
        "React Native",
        "Tailwind CSS",
        "TypeScript",
        "Django",
        "AI Integration",
      ],
      githubLink: "https://github.com/Loweso/ballpoint",
    },
    {
      title: "UPokémon",
      subtitle: "Game Development",
      description:
        "Recreated the classic Pokémon gameplay using C++ and SFML. Implemented file-saving features for persistent game data.",
      technologies: ["C++", "SFML", "Game Development"],
      githubLink: "",
    },
    {
      title: "Doorm",
      subtitle: "Web Application",
      description:
        "Designed UI with Figma and implemented responsive front-end using Tailwind CSS & Next.js. Developed backend with Express.js, Sequelize, and MySQL.",
      technologies: [
        "Figma",
        "Tailwind CSS",
        "Next.js",
        "Express.js",
        "Sequelize",
        "MySQL",
      ],
      githubLink: "https://github.com/Loweso/doorm",
    },
    {
      title: "Rain de Luca in Action!",
      subtitle: "Game Development",
      description:
        "Developed interactive story-driven game using Godot Engine. Created custom visual assets and decision logic based on finite automata.",
      technologies: ["Godot Engine", "Sprite Art", "Finite Automata"],
      githubLink: "https://github.com/Loweso/rain_deLuca",
    },
    {
      title: "Paper Townsman",
      subtitle: "Game Development",
      description:
        "Created a pixel-art RPG in Python using PyGame. Integrated basic AI and dynamic narrative storytelling.",
      technologies: ["Python", "PyGame", "Pixel Art", "Game Design"],
      githubLink: "https://github.com/Loweso/paper-townsman",
    },
    {
      title: "RoboManger",
      subtitle: "Line-Following Robot",
      description:
        "Engineered a logic-gated robot using AND, OR, NOT gates. Awarded Champions in a robotics racetrack competition.",
      technologies: ["Logic Gates", "Robotics", "Electronics"],
    },
  ];

  return (
    <section className="projects">
      <h2 className="header projects">Projects</h2>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div>
              <h3>{project.title}</h3>
              {project.subtitle && (
                <h4 className="project-subtitle">{project.subtitle}</h4>
              )}
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>

            <div>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
