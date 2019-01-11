import React from 'react';
import Title from "./reusable/Title";

const About = () => {
  return (
    <div>
      <Title title="About" desc="All you need to know about me." />
      <img id="me" src={require('../public/me2.jpg')} alt="me" />
      <div className="text">
        Started programming back in 2015; learnt the fundamentals using Python, creating very simple
        algorithms and desktop shortcuts. Found an interest into the many aspects of web development
        from backend to frontend and everything in between.
        <br />
        <br />
        I had a taste of full stack development first with PHP as part of a first year University
        project, which inspired me to look into other web development frameworks/libraries i.e. Node & React.
        Since then, I've been honing my skills whilst working on my degree.
        <br />
        <br />
        I am currently studying Computer Science & Artificial Intelligence & learning Japanese on the side
        with the <a href="http://www.alljapaneseallthetime.com/blog/all-japanese-all-the-time-ajatt-how-to-learn-japanese-on-your-own-having-fun-and-to-fluency/">AJATT</a> method.
      </div>
    </div>
  );
}

export default About;