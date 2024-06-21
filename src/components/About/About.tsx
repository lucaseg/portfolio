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
            Hi there! I'm Lucas, a backend developer with over 5 years of experience, I specialize in creating robust and scalable microservices. Currently, I work at Mercado Libre, where my primary responsibilities include developing microservices for configuring fraud business rules, understanding and analyzing user requirements to provide effective solutions, and assisting my partners in grasping business concepts while guiding them through the feature development process.
          </p>
        </div>
        <div>
          <p>
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for my clients to take control of their own websites and keep them up to date.</p>
        </div>
        <div>
          <p>
            So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!</p>
        </div>
        <div className="skills-title">
          <h3>My main skills</h3>
          <h3>I have worked with</h3>
        </div>
        <div className="lenguages">
        <div className="hard-skills">
          <div className="hability">
            <div>
              <img src={javaIcon} alt="Java" />
            </div>
          </div>
          <div className="hability">
            <div>
              <img src={springIcon} alt="Spring" />
            </div>
          </div>
          <div className="hability">
            <div>
              <img src={kafkaIcon} alt="Kafka" />
            </div>
          </div>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <div>
              <img src={goIcon} alt="Golang" />
            </div>
          </div>
        </div>
        </div>

        <div >
          <h3>Databe and Infraestructure</h3>
        </div>
        <div className="hard-skills">
        <div className="hability">
            <div>
              <img src={mySqlIcon} alt="MySql" />
            </div>
          </div>
          <div className="hability">
            <div>
              <img src={dockerIcon} alt="Docker" />
            </div>
          </div>
          <div className="hability">
            <div>
              <img src={awsIcon} alt="AWS" />
            </div>
          </div>
        </div>

        

        <div >
          <h3>Tools</h3>
        </div>
        <div className="hard-skills">
        <div className="hability">
            <div>
              <img src={postManIcon} alt="Postman" />
            </div>
          </div>
        <div className="hability">
            <div>
              <img src={intellijIcon} alt="intelliJ" />
            </div>
          </div>
        </div>
      </div>
    
    </Container>
  )
}
