import './ExternalVideo.scss'

function ExternalVideo({ video = {} }) {
  // default width and height: 560x315. It was reduced by 0.8
  return (
    <div>
      {video.title}
      <div className='video-iframe'>
        <iframe
          src={video.src}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default ExternalVideo