import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Crow from '../models/Crow'
import Castle from '../models/Castle'
import NightSky from '../models/NightSky'
import Moon from '../models/Moon'
import HomeInfo from '../components/HomeInfo'
import Snowflake from '../models/Snowflake'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustCastleForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 768) {
      screenScale = [0.6, 0.6, 0.6]
      screenPosition = [0, -0.5, -1]
    } else {
      screenScale = [0.9, 0.9, 0.9]
      screenPosition = [0, -1.5, -1]
    }
    return [screenScale, screenPosition]
  }

  const adjustMoonForScreenSize = () => {
    let moonScale, moonPosition

    if (window.innerWidth < 768) {
      moonScale = [1.46, 1.34, 1.46]
      moonPosition = [0.6, 3, -4]
    } else {
      moonScale = [2.2, 2.05, 2.2]
      moonPosition = [0.6, 2.4, -4]
    }
    return [moonScale, moonPosition]
  }

  const adjustSnowForScreenSize = () => {
    let snowScale

    if (window.innerWidth < 768) {
      snowScale = [0.6, 0.6, 0.6]
    } else {
      snowScale = [0.65, 0.65, 0.65]
    }
    return snowScale
  }

  const [castleScale, castlePosition] = adjustCastleForScreenSize()
  const [moonScale, moonPosition] = adjustMoonForScreenSize()
  const snowScale = adjustSnowForScreenSize()

  return (
    <section className="home-main-section">
      <Canvas
        className={`w-full h-screen bg-transparent absolute   ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}></Suspense>
        <directionalLight position={[1, 5, 1]} intensity={3} />
        <ambientLight intensity={1} />
        <Snowflake scale={snowScale} />
        <Castle
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={castlePosition}
          rotation={[0.1, 2, 0]}
          scale={castleScale}
        />
        <NightSky isRotating={isRotating} />
        <Moon position={moonPosition} scale={moonScale} />
        <Crow screenSize={window.innerWidth > 768 ? 'md' : 'sm'} />
      </Canvas>
      <div className="absolute">
        <HomeInfo currentStage={currentStage} />
      </div>
    </section>
  )
}

export default Home
