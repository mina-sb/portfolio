import React from 'react'
import { Link } from 'react-router-dom'
import { ListOfProjects } from '../components/ListOfProjects'

const Projects = () => {
  return (
    <section className="main-section">
      <div className="projects-main-container">
        <span className="text-white subhead-text">My Recent Projects</span>
        <div className="mt-3 text-slate-200">
          <span>
            Explore my recent work,
            <br />
            where I focus on crafting dynamic, scalable, and intuitive web applications.
          </span>
        </div>
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <ListOfProjects />
        </div>
      </div>
    </section>
  )
}

export default Projects
