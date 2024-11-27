import { Link } from 'react-router-dom'
import { stagesContent } from '../constants/homeInfo/index'

const HomeInfo = ({ currentStage }) => {
  const stage = stagesContent[currentStage]
  if (!stage) return null

  return (
    <h1 className="home-info-h1">
      {stage.title}
      {stage.subhead && <span className="home-info-gold-subhead">{stage.subhead}</span>}
      <Link to={stage.link} className="home-info-button">
        {stage.buttonText}
      </Link>
    </h1>
  )
}

export default HomeInfo
