function ExternalVideo({ src }) {
  // default width and height: 560x315. It was reduced by 0.8
  return (
    <div className='video'>
      <iframe
        width='448'
        height='252'
        src={src}
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default ExternalVideo