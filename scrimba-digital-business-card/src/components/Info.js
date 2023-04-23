import "./Info.css"
import profilePic from "./profile-pic.JPG"

function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="profilePic" width="400px" />
      <h2>Morton Nicolaysen</h2>
      <h3>Frontend Developer</h3>
      <div className="info-btn">
        <a href="mailto:morton.nicolaysen@gmail.com?subject=RE:Digital business card " target="_top">
          <button id="email-btn" className="email-btn">
            <i class="fa-solid fa-envelope"></i> Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/morton-nicolaysen/" target="_blank">
          <button className="linkedin-btn">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
