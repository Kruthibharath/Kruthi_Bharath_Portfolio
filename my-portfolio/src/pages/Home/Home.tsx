import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import heroImage from "../../assets/images/kruthi.jpg";
import "./Home.scss";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";

export const Home: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_text-wrapper">
          <h1>Kruthi Bharath</h1>
          <h2>Front End Web Developer</h2>
          <p>
            Hi, I am Kruthi Bharath looking for the Front End Web Developer
            position in the London area. This is my portfolio to showcase my
            skills, experience and projects I have worked so far.
          </p>
          <PersonalDetails />
          <SocialMedia />
        </div>
        <div className="hero_image-wrapper">
          <img
            className="hero_image"
            alt="Image of Kruthi Bharath"
            src={heroImage}
          />
        </div>
        <div className="hero_contactInfo">
          <button></button>
        </div>
      </section>
    </>
  );
};
