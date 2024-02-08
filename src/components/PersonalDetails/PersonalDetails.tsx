import "./PersonalDetails.scss";
import socialMediaIcons from "../../utils/SocialMediaIcons";
export const PersonalDetails = () => {
  const PersonalInfo = {
    email: "kruthi.bharath@gmail.com",
    phone: "+44 7848389020",
    homeAddress: "Epsom, London",
  };
  const googleMapsLink = `https://www.google.com/maps/place/${encodeURIComponent(
    PersonalInfo.homeAddress
  )}`;
  return (
    <ul className="personalInfo">
      <li className="personalInfo_lists">
        {/* <strong>Email: </strong> */}
        <img src={socialMediaIcons.emailIcon} alt="" />
        <a href={`mailto:${PersonalInfo.email}`}>{PersonalInfo.email}</a>
      </li>
      <li className="personalInfo_lists">
        <img src={socialMediaIcons.phoneIcon} alt="" />
        <a href={`tel:${PersonalInfo.phone}`}>{PersonalInfo.phone}</a>
      </li>
      <li className="personalInfo_lists">
        <img src={socialMediaIcons.addressIcon} alt="" />
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          {PersonalInfo.homeAddress}
        </a>
      </li>
    </ul>
  );
};
