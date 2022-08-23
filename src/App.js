import { VirtualType } from "mongoose";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="cvWrapper">
        <div className="grid">
          <div id="main" className="gridItem">
            <div className="sectionContainer">
              <div id="profileImage">
                <img src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>

              <div id="jobTitle">Web Developer</div>

              <div id="userDescription"  className="listItemFontSize">
                lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor lorem
                ipsum dolor lorem ipsum dolor lorem sit.
              </div>

              <div id="skills"  className="listItemFontSize">
                <p className="title">skills</p>

                <div className="skillWrapper">
                  <div className="skillName">Skill name</div>
                  <div className="percentContainer">
                    <div className="skill skill1">90%</div>
                  </div>
                </div>
                <div className="skillWrapper">
                  <div className="skillName">Skill name</div>
                  <div className="percentContainer">
                    <div className="skill skill2">70%</div>
                  </div>
                </div>
                <div className="skillWrapper">
                  <div className="skillName">Skill name</div>
                  <div className="percentContainer">
                    <div className="skill skill3">60%</div>
                  </div>
                </div>
                <div className="skillWrapper">
                  <div className="skillName">Skill name</div>
                  <div className="percentContainer">
                    <div className="skill skill4">40%</div>
                  </div>
                </div>
                <div className="skillWrapper">
                  <div className="skillName">Skill name</div>
                  <div className="percentContainer">
                    <div className="skill skill5">30%</div>
                  </div>
                </div>

              </div>

              <div className="work">
                <p className="title">Work</p>
                <div className="workPosition">
                  <div className="timeLong">present</div>
                  <div className="company">company</div>
                  <div className="positionTitle">positionTitle</div>
                  <div className="positionDescription">lorem ipsum dolor sit lorem ipsum dolor</div>
                </div>

                <div className="workPosition">
                  <div className="timeLong">present</div>
                  <div className="company">company</div>
                  <div className="positionTitle">positionTitle</div>
                  <div className="positionDescription">lorem ipsum dolor sit lorem ipsum dolor</div>
                </div>

                <div className="workPosition">
                  <div className="timeLong">present</div>
                  <div className="company">company</div>
                  <div className="positionTitle">positionTitle</div>
                  <div className="positionDescription">lorem ipsum dolor sit lorem ipsum dolor</div>
                </div>
              </div>
            </div>
          </div>
          <div id="aside" className="gridItem">
            <div className="basicInfo subSection">
              <ul className="listItemFontSize">
                <li>date</li>
                <li>mail</li>
                <li>phone</li>
                <li>address</li>
                <li>website</li>
              </ul>
            </div>

            <div className="social">
              <i>icon</i>
              <i>icon</i>
              <i>icon</i>
            </div>

            <div className="education subSection">
              <p className="title">graduation</p>
              <p className="description">lorem ipsum dolor</p>
            </div>

            <div className="personalValues subSection">
              <p className="title">personalValues</p>
              <ul className="listItemFontSize">
                <li>value</li>
                <li>value</li>
                <li>value</li>
                <li>value</li>
                <li>value</li>
                <li>value</li>
              </ul>
            </div>

            <div className="expertise subSection">
              <p className="title">expertise</p>

              <ul className="listItemFontSize">
                <li>expertise</li>
                <li>expertise</li>
                <li>expertise</li>
                <li>expertise</li>
                <li>expertise</li>
                <li>expertise</li>
              </ul>
            </div>

            <div className="languages subSection">
              <p className="title">languages</p>
              <ul className="listItemFontSize">
                <li>languages</li>
                <li>languages</li>
                <li>languages</li>
                <li>languages</li>
                <li>languages</li>
                <li>languages</li>
              </ul>
            </div>

            <div className="interests subSection">
              <p className="title">interests</p>
              <i>icon</i>
              <i>icon</i>
              <i>icon</i>
              <i>icon</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
