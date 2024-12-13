

import React from 'react';

const ExperienceItem = ({ item , index}) => {

  return (

    <div className = "experience">
      <span>{item.year}</span>
      <h2>{item.position}</h2>
      <h3>{item.company}</h3>
      <p>{item.description}</p>
    </div>

  );
}
export default ExperienceItem;
