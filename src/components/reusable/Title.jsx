import React from 'react';

const Title = (props) => {
  return (
    <div className="title">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;