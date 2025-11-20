import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Collection from './components/Collection'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Footer from './components/Footer'

const logoPath = '/mnt/data/WhatsApp Image 2025-11-21 at 02.26.34.jpeg'

function App(){
  return (
    <div className="font-[var(--font-sans)]">
      <Navbar />
      <Hero logoSrc={logoPath} />
      <Story />
      <Gallery />
      <Collection />
      <WhyUs />
      <Testimonials />
      <Process />
      <Footer />
    </div>
  )
}

export default App
