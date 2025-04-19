import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
    {
      title: "Ballpoint",
      subtitle: "AI-Powered Note-taking Mobile Application",
      description:
        "Designed and prototyped an intuitive AI note-taking app to solve modern-day challenges in organization and productivity.",
      technologies: [
        "Figma",
        "React Native",
        "Tailwind CSS",
        "TypeScript",
        "Django",
        "AI Integration",
      ],
      deployedLink: "",
      githubLink: "https://github.com/Loweso/ballpoint",
    },
    {
      title: "UPokémon",
      subtitle: "Game Development",
      description:
        "Recreated the classic Pokémon gameplay using C++ and SFML. Implemented file-saving features for persistent game data.",
      technologies: ["C++", "SFML", "Game Development"],
      deployedLink: "",
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
      deployedLink: "",
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
      deployedLink: "",
      githubLink: "https://github.com/Loweso/paper-townsman",
    },
    {
      title: "RoboManger",
      subtitle: "Line-Following Robot",
      description:
        "Engineered a logic-gated robot using AND, OR, NOT gates. Awarded Champions in a robotics racetrack competition.",
      deployedLink: "",
      technologies: ["Logic Gates", "Robotics", "Electronics"],
    },
    {
      title: "99: The Card Duel",
      subtitle: "Web Application, Game Development",
      description:
        "Developed a web-based card game, incorporating AI decision-making to create a competitive, turn-based gameplay experience.",
      technologies: [
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Minimax Algorithm",
      ],
      deployedLink: "https://99-ten.vercel.app/",
      githubLink: "https://github.com/arwin50/99",
    },
    {
      title: "FireTrack",
      subtitle: "Web Application",
      description:
        "Conceptualized, designed, and developed a web application for firefighters and admin staff to monitor deployment of firetrucks and human resources in times of emergencies.",
      technologies: [
        "Vue",
        "TypeScript",
        "Tailwind CSS",
        "Nuxt.js",
        "Django",
        "Robotics",
      ],
      deployedLink: "https://firetrack-plum.vercel.app/",
      githubLink: "https://github.com/Christineeebagz/Team-Litson",
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
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.deployedLink && (
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  <FaGlobe />
                </a>
              )}
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
