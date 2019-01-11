import React from 'react'

const Project = (props) => {
  return (
    <div className="card grow">
      <a href={props.link}>
        <img className="project-img" src={props.img} alt="" />
        <div className="container">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <ul>
            {props.tech.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <br />
        </div>
      </a>
    </div>
  );
}

export default Project;