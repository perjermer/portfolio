import React from 'react';
import Title from "./reusable/Title";
import Project from "./reusable/Project";

const Portfolio = () => {
  return (
    <div>
      <Title title="Portfolio" desc="A list of all my learning / completed / ongoing projects." />
      <div className="project-cards">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      </div>
    </div>
  );
}

export default Portfolio;