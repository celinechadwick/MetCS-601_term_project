import React, { useState, useEffect } from 'react';
import projectData from './projects.json';
import ProjectItem from './ProjectItem.js';
import DotBackground from './DotBackground.js';

//OLD WAY:

// class ProjectList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       project: [] // Initialize an empty project array
//     };
//   }


// componentDidMount() {
//   this.setState({ project: projectData });
// }

const ProjectList = () => {
  const [project, setProject] = useState([]);
  //OLD WAY:
  // const { project } = this.state;

  useEffect(() => {
    setProject(projectData);
  }, []);

  return (
    <div className="project-items">
    <h1>Portfolio</h1>
      <DotBackground />
      {project.map((item, index) => (
        <ProjectItem  key={item.id} item={item} index={index} />
      ))}
      <div className="button-holder">
        <a href="https://www.github.com/celinechadwick" target="_blank">View More</a>
      </div>
    </div>
  );
};

// Export the component at the bottom, outside of the function
export default ProjectList;
