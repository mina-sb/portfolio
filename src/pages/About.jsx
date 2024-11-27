import React from 'react'
import { skills } from '../constants/skills/index'

const About = () => {
  return (
    <section className="main-section">
      <section className="max-container">
        <h1 className=" text-white">
          Hello, I'm
          <span className="gold-gradient-text font-semibold drop-shadow"> Mina</span>
        </h1>
        <div className="about-p-container">
          <p>
            Web Developer specializing in frontend development,
            <span className="md:block hidden"></span>
            focused on creating efficient and well-structured applications.
          </p>
          <a
            href="https://mina-sb.github.io/handmade-ceramic-online-store/"
            target="_blank"
            class="flex items-center px-3 py-3 text-md font-medium text-center text-white bg-[#C1A156] rounded-lg hover:bg-[#f3bf47] focus:ring-4 focus:outline-none focus:ring-[#C1A156]"
          >
            Download My Resume
            <svg
              className="rotate-90 w-3.5 h-3.5 ms-2"
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
          </a>
        </div>

        <div className="pt-3">
          <h3 className="subhead-text text-white mt-7">My Skills</h3>
          <div className="about-skills-container">
            {skills.map((skill) => (
              <div>
                <div className="about-skill" key={skill.name}>
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front about-skill-front-btn ">
                    <img src={skill.imageUrl} alt={skill.name} />
                  </div>
                </div>
                <p className="about-skill-p">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
