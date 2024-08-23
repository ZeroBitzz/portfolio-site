import './App.css'
import pfp from './pfp.png'
import proj1 from './project screenshots/weatherfinder.png'
import proj2 from './project screenshots/passgen.png'
import proj3 from './project screenshots/rgbguesser.png'
import linkedin from './contact icons/linkedin.png'
import github from './contact icons/GitHub-Mark-ea2971cee799.png'
import email from './contact icons/free-email-2026367-1713640.webp'
import scroller from './scroll icon.png'

//icon imports
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
import PHPicon from './techstack icons/php.png'
import EXPRESSJSicon from './techstack icons/express-js.png'
import Cicon from './techstack icons/Clanguage.png'
import JAVAicon from './techstack icons/java.png'


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
      {/* introduction section */}
      <section className='introduction-section'>
        <div className='main-intro'>
          <h1 className='changing-text'>Hey! I'm Broderick!<span id='typewriter'></span></h1>
          <img src={pfp} className='pfp' alt='pfp' id='pfp'/>
          <span id='demo'></span>
        </div>
        <div className='scroller-container'>
          <span className='scroller'>scroll down <img src={scroller} alt='scroll icon'/></span>
        </div>
      </section>

      {/* projects section */}
      <section className='projects-section'>
        <h1 className='section-title'>MY FAVORITE PROJECTS</h1>
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
                <a href='https://github.com/ZeroBitzz/weather-finder' target='blank' className='first-link'>GITHUB</a>
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
                <a href='https://github.com/ZeroBitzz/password-generator' target='blank' className='first-link'>GITHUB</a>
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
                <a href='https://github.com/ZeroBitzz/rgb-guesser' target='blank' className='first-link'>GITHUB</a>
                <a href='https://gentle-kheer-60f8f5.netlify.app/' target='blank'>DEMO</a>
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
          I embarked on my software engineering journey in middle school, captivated by the 
          seemingly impossible complexity of computers. My fascination with their intricacy
           and my passion for problem-solving naturally led me to software engineering.
            I earned a computer science and programming certificate during high school and, 
            after a brief period working in various roles, I completed a software engineering 
            bootcamp at the University of Utah.
          </span>
          <span>
           My greatest strength is my ability to rapidly learn and adapt to new technologies. 
           I am excited to contribute to a dynamic team and tackle challenging projects, collaborating
           with amazing people and being on the forefront of cutting-edge technologies.
          </span>
          <span>
            I have worked in these technologies:
          </span>
          <div className='technology-stack'>

            {/* first section of techstack */}
            <div className='techstack1'>
              <div className='technology-name-icon-group'>
                <img src={JSicon} alt='javascript icon'/>
                <span>Javascript</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={CSSicon} alt='CSS icon'/>
                <span>CSS</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={HTMLicon} alt='HTML icon'/>
                <span>HTML</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={REACTicon} alt='React Native icon'/>
                <span>React Native</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={MONGODBicon} alt='Mongodb icon'/>
                <span>Mongodb</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={NODEJSicon} alt='node js icon'/>
                <span>Node JS</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={Cicon} alt='C icon'/>
                <span>C</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={PHPicon} alt='php icon'/>
                <span>PHP</span>
              </div>
            </div>

            {/* second section techstack */}
            <div className='techstack2'>
              <div className='technology-name-icon-group'>
                <img src={VSCODEicon} alt='vs code icon'/>
                <span>VS code</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={GITicon} alt='git icon'/>
                <span>GIT</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={PYTHONicon} alt='python icon'/>
                <span>Python</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={FIGMAicon} alt='figma icon'/>
                <span>Figma</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={JAVAicon} alt='java icon'/>
                <span>JAVA</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={MYSQLicon} alt='mysql icon'/>
                <span>MYSQL</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={ARDUINOicon} alt='arduino icon'/>
                <span>Arduino</span>
              </div>
              <div className='technology-name-icon-group'>
                <img src={EXPRESSJSicon} alt='express js icon'/>
                <span>Express JS</span>
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
