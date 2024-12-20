import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience">
      <p style={{ textAlign: "center" }}>WHAT I HAVE DONE SO FAR</p>
      <h1 style={{ textAlign: "center" }}>Work Experience.</h1>

      <div className="frontend">
        <h2>Frontend Development</h2>
        <br />
        <b>React.js, Redux</b>
        <br />
        <br />
        <ul>
          <li>
            Advanced skill in React.js for building dynamin web application
          </li>
          <li>Ecpertise in Reduc for efficient state management</li>
          <li>
            implimented advanced architectural patterns for scalable
            applications.
          </li>
          <li>these are just a few of the many librarierys</li>
        </ul>
      </div>
      <div className="ui-design">
        <h2>UI Designing</h2>
        <br />
        <b>Material UI, BootStrap ,Tailwind CSS</b>
        <br />
        <br />
        <ul>
          <li>
            Proficient in Material UI for createing modern and responsive user
            interface
          </li>
          <li>
            Skillfull use of Tailwind CSS to stramline and enhance UI styling
          </li>
          <li>
            Ability to create responsice layouts for divers screen size and
            devices
          </li>
          <li>
            Prioritizing user experience and usability in UI design projects .
          </li>
          <li>
            Bootstrap is a popular front-end framework that helps developers
            create responsive and mobile-first web designs quickly and
            efficiently.
          </li>
        </ul>
      </div>
      <div className="backend">
        <h2>Backend Development</h2>
        <br />
        <b>Node js Express Js ,Monogdb,Mongoose</b>
        <br />
        <br />
        <ul>
          <li>
            proficient in Node.js for building robust and scalable serverside
            applications.
          </li>
          <li>
            Strong command of Express.js for createing RESTfull Apis and
            routing.
          </li>
          <li>
            Exprerience in using MongoDB and Mongooose,including the stratergic
            use of indexing ,for effcient data modeling,storage, and retrival
          </li>
          <li>
            Strategies for optimizing application performance and scalability.
          </li>
          <li>
            Skillfull use of postman for APi testing,validation,and
            documentaion.
          </li>
          <li>
            Familiarity with the Model-View-Controller (MVC) pattern for
            structured and maintainable code
          </li>
          <li>
            Application of clean Architecture principles for modular and
            testable codebases
          </li>
          <li>
            implementaion of security measures,including authorization ,and
            authentication mechanisms to protect data
          </li>
          <li>
            Expertis in error handling ,debugging and performance optimization
          </li>
        </ul>
      </div>
      <div className="dsa">
        <h2>DSA</h2>
        <br />
        <b>DSA</b>
        <br />
        <br />
        <ul>
          <li>
            Strong understanding of fundamental data structures and algorithems
            for efficient problum solving.knowlendge of big O notation for
            analyzing algithemic complexity and performance
          </li>
        </ul>
      </div>
    </div>
  );
}
