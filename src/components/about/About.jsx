import "./about.css";
import AboutImg from "../../../public/avatar-profile.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about-card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about-card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>200+ clients worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article> */}
          </div>

          <p>
            As a frontend web developer, I specialize in crafting exceptional
            user experiences through proficient implementation of frontend
            technologies. With a robust foundation in HTML, CSS, and JavaScript,
            I have practical experience with modern frontend frameworks like
            React.js, and I am keen to expand my knowledge further. I excel in
            translating designs and wireframes into high-quality code. I am
            passionate about creating responsive, pixel-perfect layouts and
            optimizing website performance for various devices and browsers.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
