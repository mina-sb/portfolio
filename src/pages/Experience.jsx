import { experiences } from '../constants/experiences'
const Experience = () => {
  return (
    <div className="main-section">
      <section className="w-full h-screen flex items-center justify-center  text-white">
        <div className="relative w-full max-w-4xl px-6 mt-20">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 !== 0 ? 'order-3 text-left' : 'text-right'}`}>
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-sm text-gray-300">{exp.company}</p>
                <p className="mt-2 text-sm">{exp.description}</p>
              </div>
              <div
                className={`w-6 h-6 bg-blue-600  order-2 rounded-full border-4 border-white z-10`}
              />
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-3 text-left' : 'text-right'}`}>
                <span className="text-sm font-semibold text-blue-600">{exp.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default Experience
