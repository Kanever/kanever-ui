import './ExternalVideo.scss'

function ExternalVideo({ video }) {
  const { title, src, } = video
  // default width and height: 560x315. It was reduced by 0.8
  return (
    <div>
      {title}
      <div className='video-iframe'>
        <iframe
          src={src}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default ExternalVideo