import React from "react";
import "./footer.scss";

function Footer() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Gražaus jums ryto!";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "Gražios dienos!";
  } else if (hours >= 18 && hours < 21) {
    timeOfDay = "Gražaus vakaro!";
  } else {
    timeOfDay = "Labos nakties!";
  }

  return (
    <footer className="footer">
      <p className="footer__time-of-day">{timeOfDay}</p>
      <span className="footer__copyright">
        &copy; {new Date().getFullYear()} ViArt
      </span>
    </footer>
  );
}

export default Footer;
