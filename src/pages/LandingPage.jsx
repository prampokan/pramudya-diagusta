import Banner from '../components/banner'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default LandingPage