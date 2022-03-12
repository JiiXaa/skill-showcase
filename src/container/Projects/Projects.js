import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrapper, MotionWrapper } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Projects.scss';

const filterItems = ['JavaScript', 'ReactJS', 'NodeJS', 'NextJS', 'All'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleProjectsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>
        My Portfolio
        <span> Projects </span>
        Experience
      </h2>

      <div className='app__projects-filter'>
        {filterItems.map((item, i) => (
          <div
            key={i}
            onClick={() => handleProjectsFilter(item)}
            className={`app__projects-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__projects-portfolio'
      >
        {filterProjects.map((project, i) => (
          <div className='app__projects-item app__flex' key={i}>
            <div className='app__projects-img app_flex'>
              <img src={urlFor(project.imgUrl)} alt={project.name} />
            </div>

            <div className='app__projects-content app__flex'>
              <h4 className='bold-text'>{project.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className='app__projects-goto app__flex'>
                <div className='app__projects-goto-item'>
                  <a
                    href={project.projectLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
                <div className='app__projects-goto-item'>
                  <a href={project.codeLink} target='_blank' rel='noreferrer'>
                    Code
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrapper(
  MotionWrapper(Projects, 'app__projects'),
  'projects',
  'app__primarybg'
);
