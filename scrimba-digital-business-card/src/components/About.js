import profilePic from "./profile-pic.JPG"

function About() {
  return (
    <div>
      <img src={profilePic} alt="profilePic" width="400px" />
      <h2>Morton Nicolaysen</h2>
      <h3>Frontend Developer</h3>
      <button>Email</button>
      <button>LinkedIn</button>
    </div>
  );
};

export default About;
