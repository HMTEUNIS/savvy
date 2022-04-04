import gsap from "gsap";
import { Link } from "react-router-dom";

function Navbar() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#1dd635cc",
      scale: 1.2,
      zindex: 1,
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      backgroundColor: "#1dd7367e",
      scale: 1,
      zindex: 0,
    });
  };
  const restbox = { backgroundColor: "#1dd7367e", scale: 1, zindex: 0 };
  return (
    <div className="navbar">
      <Link to="read">
        <div
          className="navbox"
          style={restbox}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          Read
        </div>
      </Link>
      <Link to="discuss">
        <div
          className="navbox"
          style={restbox}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          Discuss
        </div>
      </Link>
      <Link to="about">
        {" "}
        <div
          className="navbox"
          style={restbox}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          About
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
