import React from "react";
import "./Project.css";

export default function Project({ img, link, desc, title, tech }) {
  return (
    <div className="project">
      <a href={link}>
        <img
          style={{ width: "100%", height: "11rem" }}
          src={img}
          alt="project"
        />
        <h4>{title}</h4>
        <p>{desc}</p>
        <b style={{ color: "skyblue" }}>{tech}</b>
      </a>

      <div className="links"></div>
    </div>
  );
}
