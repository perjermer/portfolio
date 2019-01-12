import React from 'react'

const Project = (props) => {
  return (
    <div className="card grow">
      <a href={props.link}>
        <img className="project-img" src={props.img} alt="" />
        <div className="container">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <div className="tech-containter">
            {props.tech.map(item => (
              <div className="tech clearfix" key={item}> {item} </div>
            ))}
          </div>
          <br />
        </div>
      </a>
    </div>
  );
}

export default Project;