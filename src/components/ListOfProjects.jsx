import { Link } from 'react-router-dom'
import { projectList } from '../constants/projects/index'

export const ListOfProjects = () => {
  {
    return projectList.map((project) => (
      <div key={project.id} className="project-container">
        <img className="rounded-lg w-full sm:w-44" src={project.imageUrl} alt={project.title} />
        <div>
          <h5 className="project-title">{project.title}</h5>
          <p className="project-desc">{project.desc}</p>
          <div className="flex justify-start mb-3 gap-2">
            {project.demo && (
              <a href={project.demo} target="_blank" className="project-btn">
                Live Demo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2 hidden md:block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
            <Link to={`/projects/${project.id + 1}`} className="project-btn">
              Project Details
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2 hidden md:block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    ))
  }
}
