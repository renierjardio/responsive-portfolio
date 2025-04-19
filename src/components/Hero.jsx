export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/images/profile.jpg" alt="Profile" className="profile-pic" />
        <div className="text-content">
          <h1 className="name">Renier James Jardio</h1>
          <p className="title">Creative Coder & Aspiring Software Engineer</p>
          <button className="connect-btn">LET'S CONNECT!</button>

          <div className="description">
            <p>
              I'm Renier, a passionate software developer who finds joy in
              creating elegant solutions through code. I believe in blending
              creativity with logic to turn ideas into impactful applications
              that make a difference.
            </p>
            <p>
              Whether it would be about front-end magic or talking about design
              choices, I enjoy exploring new technologies and collaborating with
              others to build meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
