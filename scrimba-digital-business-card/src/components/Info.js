import "./Info.css"
import profilePic from "./profile-pic.JPG"

function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="profilePic" width="400px" />
      <h2>Morton Nicolaysen</h2>
      <h3>Frontend Developer</h3>
      <div className="info-btn">
        <button className="email-btn">
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button className="linkedin-btn">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
