import './ExternalVideo.scss'

function ExternalVideo({ src }) {
  // default width and height: 560x315. It was reduced by 0.8
  return (
    <div>
      CISCO
      <div className='video'>
        <iframe
          width='448'
          height='252'
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