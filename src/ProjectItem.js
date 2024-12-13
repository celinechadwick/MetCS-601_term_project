

import React from 'react';

const ProjectItem = ({ item , index}) => {
  //use index to calculate nth child for staggered fadein effect!
  // Then we need to set the delay to be the index * .2s. we use animationDelay in JSX instead of "animation-delay" from CSS

  return (

    <a href={item.href} className="fade-in"  style={{animationDelay: `${index * 0.15}s`, }}>
      <div style={{
      backgroundImage: `linear-gradient(rgba(49, 51, 59, 0.58), rgba(31, 25, 13, 0.67)), url(${item.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
        <strong>{item.name}</strong><br />
      </div>
    </a>

  );
}
export default ProjectItem;
