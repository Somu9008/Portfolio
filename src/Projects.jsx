import React from "react";
import Project from "./Project";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h5 style={{ textAlign: "center", textTransform: "uppercase" }}>
        My Work{" "}
      </h5>
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Projects</h1>
      <div className="allProjects">
        <Project
          title={"Airbnb clone Project using MVC"}
          img={
            "https://res.cloudinary.com/dcqvebhun/image/upload/v1734747824/Screenshot_2024-12-18_140135_fefu5b.png"
          }
          link={"https://wonderlust-project-3.onrender.com/listings"}
          desc={
            "in this project using MVC pattern ,it has fetures like airbn website ,login and signUp functionality and listings ,add reviews and rating ,add new listing ,update listings , upload image in this project useing cloudinary to store files and users can filter by category and searching functionality"
          }
          tech={"MongoDb,Express.js,Node.js,Ejs"}
        />
        <Project
          img={
            "https://res.cloudinary.com/dcqvebhun/image/upload/v1734747822/Screenshot_2024-12-18_151221_n4hhq9.png"
          }
          link={"https://shopwell-78by.onrender.com/shop"}
          title={"ecommerse-website using MVC"}
          desc={
            "this project is  made by mvc pattern  in this project user can login and signup used passportjs for authentication and user can update their profile   upload user image in this project used cloudinary to upload files used shold be admin  to  add new item or edit or delete itrm and user  can add comment ratings and serch by category and add to cart functionality shiipping address and user can make order from cod method or stripe method in this project i used stripe payment gatway to get payment after user can track thire order and admin can manage their ordered status"
          }
          tech={"#Node.js , Express.js, Mongodb ,EJS"}
        />
        <Project
          title={"Simon-Says-Game"}
          img={
            "https://res.cloudinary.com/dcqvebhun/image/upload/v1734747819/Screenshot_2024-12-18_160756_cx2fmy.png"
          }
          link={"https://simon-says-game-dhyi.onrender.com/"}
          desc={
            "Simon Game using HTML, CSS, and JavaScript. In a Simon game, if the player succeeds, the series becomes progressively longer and more complex. Once the user is unable to repeat the designated order of the series at any point, the game is over"
          }
          tech={"Html,CSS,Javascript"}
        />
        <Project
          title={" Find My City Weather Condition"}
          img={
            "https://res.cloudinary.com/dcqvebhun/image/upload/v1734747821/Screenshot_2024-12-18_164617_g3xnbt.png"
          }
          link={"https://findmyweathercity.netlify.app/"}
          desc={
            " This is the weather app using ReactJs Project. Here we will get the current Weather data From the OpenWeatherMap API . display the weather data like Temperature ,Weather condition ,humidity and wind Speed according to the city"
          }
          tech={"#React,using OpenWeatherMap API"}
        />
        <Project
          title={"e-commerse-website using React Js"}
          link={"https://myshop-ecommerse.netlify.app/shop"}
          img={
            "https://res.cloudinary.com/dcqvebhun/image/upload/v1734747823/Screenshot_2024-12-18_164913_s8hrvk.png"
          }
          desc={
            "In this frontend eCommerce website Project using ReactJs ,user can explore product,filter and short the produce And user can addthe product in cart by selecting product variant like size. user can also order the product by providing the delivery Address and using any paymentmethod either cash on delivery or online payment"
          }
          tech={"#React,useReducer,Jsx"}
        />
        <Project
          title={"University website"}
          link={"https://studenteducationweb.netlify.app/"}
          img={
            "https://res.cloudinary.com/dcqvebhun/image/upload/v1734747831/Screenshot_2024-12-18_170819_dfmhhh.png"
          }
          desc={
            "this project done by using React this is the landing page of the college or university website, this will be the completely responsive and added react-smoth-scroll effect,slider,,and working contact form on this website ,you can receive the contact form enquireires on your email address "
          }
          tech={"#React,other packeges"}
        />
      </div>
    </div>
  );
}
