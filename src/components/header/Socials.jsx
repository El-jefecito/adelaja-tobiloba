import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/adelaja-oluwatobi-a3715425b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/El-jefecito" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/TobbyAdelaja" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default Socials;
