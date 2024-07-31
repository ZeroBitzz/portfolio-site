import './App.css'
import pfp from './pfp.png'
import Header from './Header'
import Text from './Text'

function App() {
  return (
    <div className='App'>
      <Header />
      <Text />
      <section className='introduction-section'>
        <img src={pfp} className='pfp'/>
      </section>
      <section className='experience-section'>
        section2 - experience
      </section>
      <section className='projects-section'>
        section3 - projects
      </section>
      <section className='contact-section'>
        section4 - contact me
      </section>
    </div>
  )
}

export default App
