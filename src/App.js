import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import './App.scss'

function App() {
  return (
    <div className='content'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
