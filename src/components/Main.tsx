import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQEvWye3ooZG2g/profile-displayphoto-shrink_200_200/B56ZXFXG1zGsAY-/0/1742772924941?e=1775692800&v=beta&t=szkobamITaF1rAd8L3vMXE1NJqL0EgZeNntrj2EKKvQ" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/jakechen-cdm/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jake Chen</h1>
          <p>Analytics Engineer / BI Engineer</p>
          <p>I build scalable data products that turn insights into business decisions.</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/jakechen-cdm/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;