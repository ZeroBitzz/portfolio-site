import './App.css'
import pfp from './pfp.png'
import proj1 from './project screenshots/weatherfinder.png'
import proj2 from './project screenshots/passgen.png'
import proj3 from './project screenshots/rgbguesser.png'
import linkedin from './contact icons/linkedin.png'
import github from './contact icons/GitHub-Mark-ea2971cee799.png'
import email from './contact icons/free-email-2026367-1713640.webp'
import Header from './Header'
import scroller from './scroll icon.png'

let textBase = "I am a ";
let jobs = ["Software Engineer", "Problem Solver", "Coffee Lover", "University of Utah graduate"];
let jobIdx = 0;
let i = 0;
let reverse = false;

function runTypewriter(){
  if(document.getElementById("typewriter") != null){
    typeWriter()
  }else {
    setTimeout(() => {
      runTypewriter()
    }, 1000);
  }
}

function typeWriter() {
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45);

  if (reverse) {
    if (document.getElementById("typewriter").innerHTML.length > textBase.length) {
      document.getElementById("typewriter").innerHTML = document
        .getElementById("typewriter")
        .innerHTML.slice(0, -1);
      setTimeout(typeWriter, textJitter);
    } else {
      jobIdx = (jobIdx+1) % 4;
      reverse = false;
      setTimeout(typeWriter, 1000);
    }
  } else {
    if (i === (textBase + jobs[jobIdx]).length) {
      i = textBase.length;
      reverse = true;

      setTimeout(typeWriter, 3000);
    } else {
      if (i < (textBase + jobs[jobIdx]).length) {
        document.getElementById("typewriter").innerHTML = document.getElementById("typewriter").innerHTML + (
          textBase + jobs[jobIdx]
        ).charAt(i);
        i++;
        setTimeout(typeWriter, textJitter);
      }
    }
  }
}

function App() {
  return (
    <div className='App'>
      <Header />
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
          awesome developers, create amazing things, and be a master in the field of engineering.
        </span>
      </section>

      {/* contact-me-section */}
      <section className='contact-me-section'>
        <h1>CONTACT ME</h1>
        <div>
          <a href='https://www.linkedin.com/in/broderick-howell-43b0161a4/' target='_blank'>
            <img src={linkedin} className='contact-icon'/>
          </a>    

          <a href='https://github.com/ZeroBitzz' target='_blank'>
            <img src={github} className='contact-icon'/>
          </a>      

          <a href="mailto:recipient@example.com">
            <img src={email} className='contact-icon'/>
          </a>
        </div>
      </section>
      {runTypewriter()}
    </div>
  )
}
export default App
