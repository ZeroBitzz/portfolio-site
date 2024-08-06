import './App.css'
import pfp from './pfp.png'
import proj1 from './project screenshots/weatherfinder.png'
import proj2 from './project screenshots/passgen.png'
import proj3 from './project screenshots/rgbguesser.png'
import Header from './Header'
import Text from './Text'

function App() {
  return (
    <div className='App'>
      <Header />
      <Text />

      {/* introduction section */}
      <section className='introduction-section'>
        <img src={pfp} className='pfp' alt='pfp'/>
      </section>

      {/* projects section */}
      <section className='projects-section'>
        <h1 className='section-title'>PROJECTS</h1>
        <div className='projects-container'>
          
          <div className='project-div'>
            <img src={proj1} alt='weather-finder-img'/>
            <span>This project uses a weather api to detect the five day forecast depending on where you searched to see the weather!</span>
          </div>

          <div className='project-div'>
            <img src={proj2} alt='password-generator-img'/>
            <span>This project will generate a random secure password that you can test the strength of!</span>
          </div>

          <div className='project-div'>
            <img src={proj3} alt='rgb-guesser-img'/>
            <span>Test your color guessing ability with this game by choosing between three colors!</span>
          </div>
        </div>
      </section>

      {/* about me section */}
      <section className='about-me-section'>
        <h1>ABOUT ME</h1>
        <span>
          I started in the world of software engineering in middle school and have been developing ever since.
          I graduated at the University of Utah's software engineering bootcamp and started developing my own app that I'm still
          proudly working on. I am also very eager to get into the professional field of software engineering at a company, to meet
          awesome developers, create amazing things, and learn evermore in the field.
        </span>
      </section>

      {/* contact-me-section */}
      <section className='contact-me-section'>
        section4 - contact me
      </section>
    </div>
  )
}

export default App
