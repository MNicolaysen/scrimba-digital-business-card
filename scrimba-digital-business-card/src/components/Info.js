import "./Info.css"
import profilePic from "./profile-pic.JPG"

function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="profilePic" width="400px" />
      <h2>Morton Nicolaysen</h2>
      <h3>Frontend Developer</h3>
      <div className="info-btn">
        <button id="email-btn" className="email-btn">
          <i class="fa-solid fa-envelope"></i> Email
        </button>
        <button id="linkedin-btn" className="linkedin-btn">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
};

// document.getElementById('email-btn').addEventListener("click", function() {
//   const email = <a href="mailto:morton.nicolaysen@gmail.com" target="_top">morton.nicolaysen@gmail.com</a>
//   document.location.href = email
// });

document.getElementById("linkedin-btn").addEventListener("click", function() {
  window.open = "https://www.linkedin.com/in/morton-nicolaysen/".focus();
})



export default Info;
