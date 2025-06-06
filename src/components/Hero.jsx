import profilePic from "/images/profile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profpic-wrapper">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>
        <div className="text-content">
          <h1 className="name">Renier James Jardio</h1>
          <p className="title">Creative Coder & Aspiring Software Engineer</p>

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

          <a href="#contact">
            <button className="connect-btn">LET'S CONNECT!</button>
          </a>
        </div>
      </div>
    </section>
  );
}
