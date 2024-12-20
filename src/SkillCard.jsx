import React from "react";
import "./SkillCard.css";

export default function SkillCard({ img, title }) {
  return (
    <div
      className="skill-img"
      style={{
        margin: "2rem",
        width: "5rem",
      }}
    >
      <img style={{ height: "5rem", width: "5rem" }} src={img} alt="" />
      <p style={{ fontSize: "0.8rem", textAlign: "center" }}>{title}</p>
    </div>
  );
}
