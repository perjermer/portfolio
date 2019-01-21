import React from 'react';

const Skill = (props) => {
  return (
    <div className="skill-box">
      <span className="skill-text">{props.skill}</span>
    </div>
  );
}

export default Skill;