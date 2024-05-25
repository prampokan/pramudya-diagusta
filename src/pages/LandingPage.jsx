import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <Banner/>
        <Projects/>
        <Experience/>
        <Contact/>
    </div>
  )
}

export default LandingPage