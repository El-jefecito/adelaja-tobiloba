import CV from "../../assets/TOBILOBA_ADELAJA[1].pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};

export default Cta;
