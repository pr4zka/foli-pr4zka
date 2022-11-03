import Navbar from './components/Navbar'
import './App.css'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects'
import { Contact } from './components/Contacts'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
