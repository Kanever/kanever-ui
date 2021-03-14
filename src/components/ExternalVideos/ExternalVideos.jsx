import { useState } from 'react'
import ExternalVideo from '../ExternalVideo/ExternalVideo'
import Polygon from '../Polygon/Polygon'
import MoreButton from '../MoreButton/MoreButton'
import { VIDEO_TYPES, videos, TEXT } from '../../utils/constants'
import './ExternalVideos.scss'

function ExternalVideos() {
  const [nVideos, setNVideos] = useState(6)
  const [videoTypesHash, setVideoTypesHash] = useState({
    [VIDEO_TYPES.MOTION_GRAPHICS]: false,
    [VIDEO_TYPES.WHITEBOARD]: false,
    [VIDEO_TYPES.EDITIONS]: false
  })

  function getVideos() {
    let filteredVideos = videos
    if (Object.values(videoTypesHash).indexOf(true) > -1)
      filteredVideos = videos.filter((video) => videoTypesHash[video.type])
    return filteredVideos
      .map((video, i) => (<ExternalVideo key={i} video={video} />))
      .slice(0, nVideos)
  }

  function handleClick() {
    nVideos >= videos.length
    ? alert('Sem mais videos disponíveis!')
    : setNVideos(nVideos + 3)
  }

  function handleListClick(index) {
    console.log(videoTypesHash)
    const newVideoTypesHash = {
      ...videoTypesHash,
      [index]: !videoTypesHash[index]
    }
    setVideoTypesHash(newVideoTypesHash)
  }

  return (
    <div className='external-videos'>
      <div className='video-filter'>
        <div className='flex-center video-filter-left'>
          <span>{TEXT.FILTER}</span><span />
          <ul>
            <li onClick={() => handleListClick(VIDEO_TYPES.MOTION_GRAPHICS)}>
              <span />
              <Polygon color='#DCDBD6' fill={videoTypesHash[VIDEO_TYPES.MOTION_GRAPHICS] ? '#DCDBD6' : 'none'} />
              {TEXT.MOTION_GRAPHICS}
            </li>
            <li onClick={() => handleListClick(VIDEO_TYPES.WHITEBOARD)}>
              <span />
              <Polygon color='#DCDBD6' fill={videoTypesHash[VIDEO_TYPES.WHITEBOARD] ? '#DCDBD6' : 'none'} />
              {TEXT.WHITEBOARD}
            </li>
            <li onClick={() => handleListClick(VIDEO_TYPES.EDITIONS)}>
              <span />
              <Polygon color='#DCDBD6' fill={videoTypesHash[VIDEO_TYPES.EDITIONS] ? '#DCDBD6' : 'none'} />
              {TEXT.EDDITINGS}
            </li>
          </ul>
        </div>
        <div className='video-filter-right flex-center'>
          <div className='portfolio-description'>
            <p>{TEXT.PTF1}</p>
          </div>
          <span />
        </div>
      </div>
      <span />
      <div className='videos'>
        {getVideos()}
      </div>
      <MoreButton text={TEXT.MORE_VIDEOS} onClick={handleClick} />
    </div>
  )
}

export default ExternalVideos