import React from 'react';
import Title from "./reusable/Title";
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  return (
    <div>
      <Title title="Pierce James Morris" desc="Aspiring web developer, avid Japanese learner, Comp Sci university student" />
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
        I work with backend technologies such as Node, C# ASP.NET/.NET Core/
        <br />
        <br />
        I am currently studying Computer Science & Artificial Intelligence & learning Japanese on the side
        with the <a href="http://www.alljapaneseallthetime.com/blog/all-japanese-all-the-time-ajatt-how-to-learn-japanese-on-your-own-having-fun-and-to-fluency/">AJATT</a> method.
      </div>
      <br />
      <br />
      You can find me on several social media
      <br />
      <br />
      <SocialIcon className="space grow" url="https://twitter.com/perjermer" />
      <SocialIcon className="space grow" url="https://www.linkedin.com/in/pierce-morris-166698136/" />
      <SocialIcon className="space grow" url="https://github.com/perjermer" />
    </div>
  );
}

export default Home;