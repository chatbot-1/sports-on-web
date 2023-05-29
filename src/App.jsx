import './App.css'
import About from './components/about/About'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'
import Goal from './components/goal/Goal'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <div>
        <Home/>
        <About/>
        <Goal/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
