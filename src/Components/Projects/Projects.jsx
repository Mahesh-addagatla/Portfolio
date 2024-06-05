import React from 'react';
import './Projects.css';
import myprojects from '../../assets/Myprojects';

const Projects = () => {
  return (
    <div className='portfolio-projects' id='projects'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src="" alt="" />
      </div>
      <div className="project-container">
        {myprojects.map((work,index)=>{
          return <img key={index} src={work.w_img} alt='' className='projects-img'/>
        })}
      </div>
      <div className="projects-show-more">
        <p>Show More</p>
        {/* arrow icon */}
      </div>
    </div>
  )
}

export default Projects
