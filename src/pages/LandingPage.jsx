import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const LandingPage = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <Banner/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default LandingPage