
import React, { useState, useEffect } from 'react';
import experienceData from './experience.json';
import ExperienceItem from './ExperienceItem.js';
import DotBackground from './DotBackground.js';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(experienceData);
  }, []);
  return (
    <div className="experience-items">
      <h1>Experience</h1>
      <DotBackground />
      {experience.map((item, index) => (
        <ExperienceItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Experience;
