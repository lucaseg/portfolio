import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX" animateOnce={true}>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/lucaseg/product-service"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/*<a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>*/}
              </div>
            </header>
            <div className="body">
              <h3>Serverless Voting Application for Programming Languages</h3>
              <p>
                {" "}
                This is a simple and basic rest api, developed to show you how to implement a simple CRUD,
                good practices using dependency injections and the power of the use of interfaces.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Java 11</li> <li>Spring boot</li> <li>MySql</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
