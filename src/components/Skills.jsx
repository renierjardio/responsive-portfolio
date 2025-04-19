export default function Skills() {
  const skillCategories = {
    "Programming Languages": ["C", "C++", "Java", "Python"],
    "Web Development": [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "Next.js",
      "Express.js",
      "Node.js",
    ],
    "Database Management": ["Sequelize", "MySQL", "phpMyAdmin", "Django"],
    "UI/UX Design": ["Figma"],
    Others: ["Git", "GitHub"],
  };

  return (
    <section className="skills">
      <h2 className="header">Skills</h2>
      {Object.entries(skillCategories).map(([category, skills], idx) => (
        <div key={idx}>
          <h3 className="category-header">{category}</h3>
          <div className="skill-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card icon-only">
                <img
                  src={`images/skills/${skill
                    .toLowerCase()
                    .replace(/\s|\./g, "")}.png`}
                  alt={skill}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
