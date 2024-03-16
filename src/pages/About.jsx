import React from 'react'
import { skills} from "../constants/index";

const About = () => {
  return (
    <section
      className="w-100 h-auto  lg:h-screen relative 
            overflow-hidden
            block
            z-10
            before:bg-[url('../../public/images/sky-patternn.png')]
            before:bg-repeat	
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:opacity-75
            before:z-[-5]
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700  to-slate-900 
    "
    >
      <section className="max-container">
        <h1 className="head-text text-xl text-white">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Mina
          </span>
        </h1>

        <div className="mt-3 flex flex-col gap-3 text-slate-200">
          <p>
            Software Engineer based in Croatia, specializing in technical
            education through<br /> hands-on learning and building applications.
          </p>
        </div>

        <div className="pt-4 flex flex-col">
          <h3 className="subhead-text text-white mt-7">My Skills</h3>
          <div className="mt-10 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center cursor-pointer">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default About