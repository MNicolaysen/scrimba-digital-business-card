import "./Info.css"
import profilePic from "./profile-pic.JPG"

function Info() {
  return (
    <div className="info">
      <div>
        <img className="profile-pic" src={profilePic} alt="profilePic" />
      </div>
      <div className="block-info">
        <div className="info-headers">
          <h2>Morton Nicolaysen</h2>
          <h3>Frontend Developer</h3>
        </div>
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
    </div>
  );
};

export default Info;
