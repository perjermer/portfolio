import React from 'react';
import Title from "./reusable/Title";

const About = () => {
  return (
    <div>
      <Title title="About" desc="All you need to know about me." />
      <img id="me" src={require('../public/me2.jpg')} alt="me" />
      <div className="text">
          Started programming back in 2015; learnt the fundamentals using Python, creating very simple algorithms and desktop shortcuts. Found an interest into the many aspects of web development from backend to frontend and everything in between.
      </div>
    </div>
  );
}

export default About;