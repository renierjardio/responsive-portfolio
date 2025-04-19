export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {[1, 2, 3].map((p) => (
          <div key={p} className="project-card">
            <img src={`images/project${p}.jpg`} alt={`Project ${p}`} />
            <h3>Project {p}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
