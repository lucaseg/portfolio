import { Container } from "./styles";
import javaIcon from "../../assets/java-icon.svg";
import dockerIcon from "../../assets/docker.svg";
import awsIcon from "../../assets/aws-icon.svg";
import springIcon from "../../assets/spring-boot-icon.svg";
import goIcon from "../../assets/go-icon.svg";
import mySqlIcon from "../../assets/mysql-icon.svg";
import kafkaIcon from "../../assets/kafka.svg";
import postManIcon from "../../assets/postman-icon.svg";
import intellijIcon from "../../assets/intellij-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <div>
          <h2>About me</h2>
        </div>
        <div>
          <p>
            Hi there! I'm Lucas, a backend developer with over 5 years of
            experience, I specialize in creating robust and scalable
            microservices. Currently, I work at Mercado Libre, where my primary
            responsibilities include developing microservices for configuring
            fraud business rules, understanding and analyzing user requirements
            to provide effective solutions, and assisting my partners in
            grasping business concepts while guiding them through the feature
            development process.
          </p>
        </div>

        <div className="main-skills">
          <div className="skill-containse">
            <div className="skills-title">
              <h3>My main skills</h3>
            </div>
            <div className="lenguages">
              <div className="hard-skills">
                <div className="hability">
                  <div>
                    <img className="icon" src={javaIcon} alt="Java" />
                  </div>
                </div>
                <div className="hability">
                  <div>
                    <img className="icon" src={springIcon} alt="Spring" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-containse">
            <div>
              <div className="skills-title">
                <h3>I have worked with</h3>
              </div>
              <div className="hard-skills">
                <div className="hability">
                  <div>
                    <img className="icon" src={goIcon} alt="Golang" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skill-container">
          <div>
            <h3>Databe and Infraestructure</h3>
          </div>
          <div className="hard-skills">
            <div className="hability">
              <div>
                <img className="icon" src={mySqlIcon} alt="MySql" />
              </div>
            </div>
            <div className="hability">
              <div>
                <img src={dockerIcon} alt="Docker" />
              </div>
            </div>
            <div className="hability">
              <div>
                <img className="icon" src={awsIcon} alt="AWS" />
              </div>
            </div>
          </div>
        </div>

        <div className="skill-container">
          <div>
            <h3>Tools</h3>
          </div>
          <div className="hard-skills">
            <div className="hability">
              <div>
                <img className="icon" src={postManIcon} alt="Postman" />
              </div>
            </div>
            <div className="hability">
              <div>
                <img className="icon" src={intellijIcon} alt="intelliJ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
