import React from "react";

import "./Skills.css";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="skills">
      <div>
        <h1>Skills</h1>
        <div className="skill">
          <SkillCard
            title={"HTML"}
            img="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          />
          <SkillCard
            title={"CSS"}
            img={"https://logospng.org/download/css-3/logo-css-3-2048.png"}
          />
          <SkillCard
            title={"JS"}
            img="https://th.bing.com/th/id/OIP.RSL3grnJx6jDO_4dPr4j1gHaIY?rs=1&pid=ImgDetMain"
          />
          <SkillCard
            title={"REACT"}
            img="https://shopify.github.io/react-native-skia/img/logo.png"
          />
          <SkillCard
            title={"REDUX"}
            img="https://pagepro.co/blog/wp-content/uploads/2019/12/redux.png"
          />
          <SkillCard
            title={"Matirial UI"}
            img="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
          />
          <SkillCard
            title={"Node JS"}
            img="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png"
          />
          <SkillCard
            title={"Express JS"}
            img="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?rs=1&pid=ImgDetMain"
          />
          <SkillCard
            title={"MongoDb"}
            img="https://th.bing.com/th/id/R.d1dbc4c147a3c563a3f2fac1b4d32379?rik=NZYBtp%2fkyEdrSw&riu=http%3a%2f%2fwww.lafabriquedecode.com%2fblog%2fwp-content%2fuploads%2f2013%2f04%2fmongo_logo.png&ehk=qKLLgzDPGWxoKP78VZeyf5fgfeFQIu9dEEnLY7DlT9E%3d&risl=&pid=ImgRaw&r=0"
          />
          <SkillCard
            title={"Mongoose"}
            img="https://cdn2.hubspot.net/hubfs/4008838/mogoose-logo.png"
          />
          <SkillCard
            title={"Git"}
            img="https://cdn.freebiesupply.com/logos/large/2x/git-icon-logo-png-transparent.png"
          />
          <SkillCard
            title={"GitHub"}
            img="https://th.bing.com/th/id/OIP.NDtgPlMGa_BTPZPrt4JZ-AHaHa?rs=1&pid=ImgDetMain"
          />
        </div>
        <p
          style={{ textAlign: "center", marginTop: "3rem", marginBottom: "0" }}
        >
          TOOLS AND SOFTWARES
        </p>
        <div className="skill">
          <SkillCard
            title={"Postman"}
            img="https://sdtimes.com/wp-content/uploads/2018/08/logo-glyph.png"
          />
          <SkillCard
            title={"Chrome"}
            img="https://www.pinclipart.com/picdir/big/493-4935950_chrome-logo-png-transparent-google-chrome-png-clipart.png"
          />
          <SkillCard
            title={"VS Code"}
            img="https://i.pinimg.com/originals/24/42/f8/2442f8e6dbd772f0cf1dad8d803399bc.png"
          />
          <SkillCard
            title={"Chat Gpt"}
            img="https://static.vecteezy.com/system/resources/previews/022/227/365/original/openai-chatgpt-logo-icon-free-png.png"
          />
          <SkillCard
            title={"MOngo compass"}
            img="https://static-00.iconduck.com/assets.00/mongodb-compass-icon-512x511-15uiytr9.png"
          />
        </div>
      </div>
    </div>
  );
}
