import './App.css'
import pfp from './pfp.png'
import proj1 from './project screenshots/weatherfinder.png'
import proj2 from './project screenshots/passgen.png'
import Header from './Header'
import Text from './Text'

function App() {
  return (
    <div className='App'>
      <Header />
      <Text />
      <section className='introduction-section'>
        <img src={pfp} className='pfp' alt='pfp'/>
      </section>
      <section className='projects-section'>
        <h1 className='section-title'>PROJECTS</h1>
        <div className='projects-container'>
          <div className='weather-finder project-div'>
            <img src={proj1} alt='weather-finder-img'/>
            <span>This project uses a weather api to detect the five day forecast depending on where you searched to see the weather!</span>
          </div>
          <div className='weather-finder project-div'>
            <img src={proj2} alt='weather-finder-img'/>
            <span>This project will generate a random secure password that you can test the strength of!</span>
          </div>
        </div>
      </section>
      <section className='about-me-section'>
        aboutme
      </section>
      <section className='contact-section'>
        section4 - contact me
      </section>
    </div>
  )
}

export default App
