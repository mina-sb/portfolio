import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectList } from '../constants/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  console.log(projectList[id])
  return (
    <section className="main-section">
      <section className="max-container">
        <div className="pt-3 flex flex-col">
          <h3 className="subhead-text text-white mt-7">{projectList[id - 1].title}</h3>
          <div className="project-detail-container">
            <div>
              <img class="project-detail-img" src={projectList[id - 1].imageUrl} />
              <div className="project-detail-techs-container">
                {projectList[id - 1].techs.map((tech) => (
                  <span className="project-detail-tech">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-detail-desc-container">
              <ul className="project-detail-desc">
                {projectList[id - 1].projectDetails.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
              <div className="flex justify-end mt-3 pb-2">
                {projectList[id - 1].video ? (
                  <a href={projectList[id - 1].video} target="_blank" class="project-btn">
                    Watch demo Video
                  </a>
                ) : (
                  ''
                )}
                {projectList[id - 1].demo ? (
                  <a href={projectList[id - 1].demo} target="_blank" class="project-btn ml-2">
                    Visit Site
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link
        to="/projects"
        class="flex fixed bottom-5 right-5  items-center px-3 py-3 text-md font-medium text-center text-white bg-[#C1A156] rounded-lg hover:bg-[#f3bf47] focus:ring-4 focus:outline-none focus:ring-[#C1A156]"
      >
        <svg
          className="rotate-180 w-3.5 h-3.5  mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        Back to Projects
      </Link>
    </section>
  )
}

export default ProjectDetail
