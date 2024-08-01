import "./portfolio.css";
import img1 from "../../../public/project1.jpeg";
import img2 from "../../../public/project2.png";
import img3 from "../../../public/project3.jpeg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Travel Tour & Guide",
    github: "https://github.com/travel-tour",
    demo: "https://travel-tour-nine.vercel.app/",
  },
  {
    id: 2,
    image: img2,
    title: "Home-Axil",
    github: "https://github.com/homeaxil",
    demo: "https://homeaxil-five.vercel.app",
  },
  {
    id: 3,
    image: img3,
    title: "WeightLess Non-Profit Organization",
    github: "https://El-jefecito/weightless-org",
    demo: "https://weightless-org.vercel.app/",
  },
  // {
  //   id: 4,
  //   image: img4,
  //   title: "Crypto Currency & Financial Visualization",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
