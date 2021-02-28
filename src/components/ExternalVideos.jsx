import ExternalVideo from './ExternalVideo'
import Polygon from '../components/Polygon'
import './ExternalVideos.scss'

function ExternalVideos() {
  return (
    <>
      <div className='external-videos'>
        <ExternalVideo src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
        <ExternalVideo src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
        <ExternalVideo src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
        <ExternalVideo src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
        <ExternalVideo src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
        <ExternalVideo src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
      </div>
      <div className='more-videos'>
        <span/>
          <Polygon isSideSquare color='#EDEDED'/>
          <button type='button'>MAIS V&Iacute;DEOS</button>
          <Polygon isSideSquare color='#EDEDED'/>
        <span/>
      </div>
    </>
  )
}

export default ExternalVideos