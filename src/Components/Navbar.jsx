import { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  const [isPage, setIsPage] = useState("hero");
  return (
    <div className="navMain">
      <div
        onClick={() => {
          setIsPage("hero");
        }}
        style={isPage === "hero" ? { color: "black" } : null}
      >
        <Link to="/">Shaik Shakeer</Link>
      </div>
      <div>
      <div
          onClick={() => {
            setIsPage("about");
          }}
          style={isPage === "about" ? { color: "black" } : null}
        >
          <Link to="/about-me">About</Link>
        </div>
        <div
          onClick={() => {
            setIsPage("project");
          }}
          style={isPage === "project" ? { color: "black" } : null}
        >
          <Link to="/projects">Projects</Link>
        </div>
        
        <div
          onClick={() => {
            setIsPage("skill");
          }}
          style={isPage === "skill" ? { color: "black" } : null}
        >
          <Link to="/skills">Skills</Link>
        </div>
        <div>
          <a
            href="https://medium.com/@shakeer043/e-commerce-product-selling-website-clone-eb4a3451d06b"
            rel="noreferrer"
            target="_blank"
          >
            Blog
          </a>
        </div>
        <div
          onClick={() => {
            setIsPage("Contact");
          }}
          style={isPage === "Contact" ? { color: "black" } : null}
        >
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};
