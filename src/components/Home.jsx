import React, { Component } from 'react';
import MarkDown from 'markdown-to-jsx';
import { SocialIcon } from 'react-social-icons';
import Title from "./reusable/Title";
import Skill from "./reusable/Skill";
import about from '../pages/About';

class Home extends Component {

  render() {

    const frontendSkills = ["React.js", "Redux", "CSS3", "HTML5", "Validation"];
    const backendSkills = ["Node.js", "MongoDB", "SQL"];
    const securitySkills = ["JWT", "Hashing", "Authentication", "Authorisation"];
    const developmentSkills = ["Git", "Agile methodologies", "UML (Unified Modelling Language)", "VSTS (Visual Studio Team Services)", "NPM (Node Package Manager)"];

    return (
      <div>
        <Title title="Pierce James Morris" desc="Aspiring web developer, avid Japanese learner, Comp Sci university student" />
        <img id="me" src={require('../public/me2.jpg')} alt="me" />
        <MarkDown options={{ forceBlock: true }} className="text">
          {about}
        </MarkDown>

        <h3>Frontend Skills</h3>
        <ul>
          {frontendSkills.map(skill => (
            <li>
              <Skill key={skill} skill={skill} />
            </li>
          ))}
        </ul>

        <h3>Backend Skills</h3>
        <ul>
          {
            backendSkills.map(skill => (
              <li>
                <Skill key={skill} skill={skill} />
              </li>
            ))
          }
        </ul>

        <h3>Security Skills</h3>
        <ul>
          {
            securitySkills.map(skill => (
              <li>
                <Skill key={skill} skill={skill} />
              </li>
            ))
          }
        </ul>

        <h3>Development Skills</h3>
        <ul>
          {
            developmentSkills.map(skill => (
              <li>
                <Skill key={skill} skill={skill} />
              </li>
            ))
          }
        </ul>

        <p>You can find me on several social media.</p>
        <SocialIcon className="space grow" url="https://twitter.com/perjermer" />
        <SocialIcon className="space grow" url="https://www.linkedin.com/in/pierce-morris-166698136/" />
        <SocialIcon className="space grow" url="https://github.com/perjermer" />
      </div >
    );
  }
}

export default Home;