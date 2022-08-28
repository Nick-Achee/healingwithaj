import Head from 'next/head'
import Hero from '../components/hero'
import Nav from '../components/nav'
import About from '../components/About'
import Services from '../components/Services'


export default function Home() {
  return (
    <div className="mx-auto bg-[#ffffff] overflow-hidden scroll-snap-x ">
    <Head />
    <Nav />
    <Hero />
    <About />
    <Services />
  
  
  
      </div>
  )
}
