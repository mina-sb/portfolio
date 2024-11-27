import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import { call, email } from '../assets/icons'
import Snowman from '../models/Snowman'
import Snowflake from '../models/Snowflake'
import Loader from '../components/Loader'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('a')

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleFocus = () => setCurrentAnimation('metarig|metarigAction')
  const handleBlur = () => setCurrentAnimation('a')

  const handleClick = (e) => {
    e.preventDefault()
    setCurrentAnimation('SKM_Crow.ao|ANIM_Crow_IdleMeatPicking')
  }

  return (
    <section className="main-section">
      <section className="contact-main-container">
        <div>
          <h3 className="text-4xl font-semibold  text-white mt-7">Let's Talk</h3>
          <br />
          <div className="contact-info-container">
            <img src={call} className="w-6" />
            <span className="text-white font-semibold">+90 536 013 61 14</span>
          </div>
          <div className="contact-info-container mt-2">
            <img src={email} className="w-6" />
            <span className="text-white font-semibold text-xs sm:text-sm">
              sadeghbayan.mina@gmail.com
            </span>
          </div>
        </div>
        <div className="relative flex md:flex-row flex-col pt-4">
          <div className="flex-1 min-w-[50%] flex flex-col">
            <hr />
            <form ref={formRef} className="w-full flex flex-col gap-4 mt-1">
              <input
                type="text"
                name="name"
                className="input outline-none"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input
                type="email"
                name="email"
                className="input outline-none"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                on
              />
              <textarea
                name="Message"
                rows="4"
                className="textarea outline-none"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <button
                type="submit"
                disabled={loading}
                className="btn"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onClick={handleClick}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 h-[300px]">
            <Canvas
              camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000
              }}
            >
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={1} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
              <Snowflake />
              <Suspense fallback={<Loader />}>
                <Snowman
                  currentAnimation={currentAnimation}
                  position={[0.5, 0.35, 0]}
                  rotation={[12.629, -0.6, 0]}
                  scale={[0.5, 0.5, 0.5]}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contact
