import './App.css'
import pfp from './pfp.png'
import proj1 from './project screenshots/weatherfinder.png'
import proj2 from './project screenshots/passgen.png'
import proj3 from './project screenshots/rgbguesser.png'
import linkedin from './contact icons/linkedin.png'
import github from './contact icons/GitHub-Mark-ea2971cee799.png'
import email from './contact icons/free-email-2026367-1713640.webp'
import scroller from './scroll icon.png'

//icons 
import JSicon from './techstack icons/js.webp'
import CSSicon from './techstack icons/css.png'
import HTMLicon from './techstack icons/html.webp'
import FIGMAicon from './techstack icons/figma.png'
import GITicon from './techstack icons/git.png'
import NODEJSicon from './techstack icons/node.png'
import PYTHONicon from './techstack icons/python.webp'
import REACTicon from './techstack icons/react.webp'
import VSCODEicon from './techstack icons/vscode.png'
import MYSQLicon from './techstack icons/mysql.png'
import MONGODBicon from './techstack icons/mongodb.svg'
import ARDUINOicon from './techstack icons/arduino.webp'


// lazy way to re run the function when the element has not rendered yet
function runTypewriter(){
  if(document.getElementById("typewriter") != null){
    typeWriter()
  }else {
    setTimeout(() => {
      runTypewriter()
    }, 1000)
  }
}

// variables for typewriter function
let textBase = "I am a "
let jobs = ["Software Engineer", "Problem Solver", "University of Utah graduate", "Coffee Connoisseur"]
let jobIdx = 0
let i = 0
let reverse = false

// typewriter text effect function
function typeWriter() {
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45)

  if (reverse) {
    if (document.getElementById("typewriter").innerHTML.length > textBase.length) {
      document.getElementById("typewriter").innerHTML = document
        .getElementById("typewriter")
        .innerHTML.slice(0, -1)
      setTimeout(typeWriter, textJitter)
    } else {
      jobIdx = (jobIdx+1) % 4
      reverse = false
      setTimeout(typeWriter, 1000)
    }
  } else {
    if (i === (textBase + jobs[jobIdx]).length) {
      i = textBase.length
      reverse = true

      setTimeout(typeWriter, 3000)
    } else {
      if (i < (textBase + jobs[jobIdx]).length) {
        document.getElementById("typewriter").innerHTML = document.getElementById("typewriter").innerHTML + (
          textBase + jobs[jobIdx]
        ).charAt(i)
        i++
        setTimeout(typeWriter, textJitter)
      }
    }
  }
}

// main function for app
function App() {
  return (
    <div className='App'>
      <span className='metaspan'>created in august 2024</span>
      {/* introduction section */}
      <section className='introduction-section'>
        <div className='main-intro'>
          <h1>Hey! I'm Broderick!<span id='typewriter'></span></h1>
          <img src={pfp} className='pfp' alt='pfp' id='pfp'/>
          <span id='demo'></span>
        </div>
        <div className='scroller-container'>
          <span className='scroller'>scroll down <img src={scroller} alt='scroll icon'/></span>
        </div>
      </section>

      {/* projects section */}
      <section className='projects-section'>
        <h1 className='section-title'>MY PROJECTS</h1>
        <div className='projects-container'>
          
          <div className='project-div'>
            <img src={proj1} alt='weather-finder-img'/>
            <div className='project-desc'>
              <h2>Weather Finder</h2>
              <span>This project uses a weather api to detect the five day forecast depending on where you searched to see the weather!</span>
              <div className='tools-used'>
                <div>APIs</div>
                <div>Javascript</div>
                <div>HTML</div>
                <div>CSS</div>
              </div>
              <div className='link-buttons'>
                <a href='https://github.com/ZeroBitzz/weather-finder' target='blank'>GITHUB</a>
                <a href='https://serene-narwhal-b92afd.netlify.app/' target='blank'>DEMO</a>
              </div>
            </div>
          </div>

          <div className='project-div'>
            <img src={proj2} alt='password-generator-img'/>
            <div className='project-desc'>
              <h2>PassGen</h2>
              <span>Create a random password and test it's strength. Great for when you don't want to think about creating a new password!</span>
              <div className='tools-used'>
                <div>Javascript</div>
                <div>HTML</div>
                <div>CSS</div>
              </div>
              <div className='link-buttons'>
                <a href='https://github.com/ZeroBitzz/password-generator' target='blank'>GITHUB</a>
                <a href='https://unique-froyo-495763.netlify.app/' target='blank'>DEMO</a>
              </div>
            </div>
          </div>

          <div className='project-div'>
            <img src={proj3} alt='rgb-guesser-img'/>
            <div className='project-desc'>
              <h2>RGB Guesser</h2>
              <span>Randomly generates three rgb colors and you have to guess the correct answer. How many can you get in a row?</span>
              <div className='tools-used'>
                <div>React</div>
                <div>Javascript</div>
                <div>HTML</div>
                <div>CSS</div>
              </div>
              <div className='link-buttons'>
                <a href='https://github.com/ZeroBitzz/rgb-guesser' target='blank'>GITHUB</a>
                <a href='https://github.com/ZeroBitzz/rgb-guesser' target='blank'>DEMO</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about me section */}
      <section className='about-me-section'>
        <h1>ABOUT ME</h1>
        <div className='about-me-desc'>
          <span>
            I began in the world of software engineering when I was in middle school. I was fascinated by computers and their 
            seemingly impossible complexity. Software engineering perfectly aligned with my love for problem solving and
            creating things. I graduated high school with a computer science and computer programming certificate. Then after
            a year of taking a break and working some basic jobs I went to the University of Utah and graduated their 
            software engineering bootcamp.
          </span>
          <span>
            My greatest strength is my ability to learn new things quickly and efficiently.
            I am eager to get into the professional world of software engineering and collaborate with an awesome team of people(robots included).
          </span>
          <span>
            I am proficient with these technologies:
          </span>
          <div className='technology-stack'>
            <div className='techstack1'>
              <div className='technology-name-icon-group'>
                <img src={JSicon}/>
                <span>Javascript</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={CSSicon}/>
                <span>CSS</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={HTMLicon}/>
                <span>HTML</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={REACTicon}/>
                <span>React Native</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={MONGODBicon}/>
                <span>Mongodb</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={NODEJSicon}/>
                <span>Node JS</span>
              </div>
            </div>
            <div className='techstack2'>
              <div className='technology-name-icon-group'>
                <img src={VSCODEicon}/>
                <span>VS code</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={GITicon}/>
                <span>GIT</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={PYTHONicon}/>
                <span>Python</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={FIGMAicon}/>
                <span>Figma</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={MYSQLicon}/>
                <span>MYSQL</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={ARDUINOicon}/>
                <span>Arduino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact-me-section */}
      <section className='contact-me-section'>
        <h1>CONTACT ME</h1>
        <div>
          <a href='https://www.linkedin.com/in/broderick-howell-43b0161a4/' target='blank'>
            <img src={linkedin} className='contact-icon' alt='linkedin icon'/>
          </a>    

          <a href='https://github.com/ZeroBitzz' target='blank'>
            <img src={github} className='contact-icon' alt='github icon'/>
          </a>      

          <a href="mailto:zerothesu@gmail.com">
            <img src={email} className='contact-icon' alt='email icon'/>
          </a>
        </div>
      </section>
      {runTypewriter()}
    </div>
  )
}
export default App
