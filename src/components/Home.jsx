import React, { Component } from 'react';
import Title from "./reusable/Title";
import MarkDown from 'markdown-to-jsx';
import { SocialIcon } from 'react-social-icons';
import about from '../pages/About';

class Home extends Component {
  render() {
    return (
      <div>
        <Title title="Pierce James Morris" desc="Aspiring web developer, avid Japanese learner, Comp Sci university student" />
        <img id="me" src={require('../public/me2.jpg')} alt="me" />
        <MarkDown options={{ forceBlock: true }} className="text">
          {about}
        </MarkDown>
        <p>You can find me on several social media</p>
        <SocialIcon className="space grow" url="https://twitter.com/perjermer" />
        <SocialIcon className="space grow" url="https://www.linkedin.com/in/pierce-morris-166698136/" />
        <SocialIcon className="space grow" url="https://github.com/perjermer" />
      </div>
    );
  }
}

export default Home;