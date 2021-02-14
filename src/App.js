import './App.css'
import ExternalVideo from './components/ExternalVideo'

function App() {
  return (
    <div className='content'>
      Almost before we knew it, we had left the ground.
      <svg width='22' height='21' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='2.5' y='2' width='17' height='17' stroke='#FFD029' stroke-width='4'/>
      </svg>
      <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='2.82843' y='14.8492' width='17' height='17' transform='rotate(-45 2.82843 14.8492)' stroke='#FFD029' stroke-width='4'/>
      </svg>
      <ExternalVideo src='https://www.youtube.com/embed/dQw4w9WgXcQ'/>
    </div>
  )
}

export default App
