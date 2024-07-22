import "./header.css";
import Cta from "./Cta";
import ME from "../../../public/avatar-profile.jpg";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Adelaja Tobiloba</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <Cta />
        <Socials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
