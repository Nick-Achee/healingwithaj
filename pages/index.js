import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/hero'
import Nav from '../components/nav'
import AboutModal from '../components/AboutModal'
import About from '../components/About'


const bgUrl = 'https://purecous.s3.us-east-2.amazonaws.com/HWA+BG+.mp4'



export default function Home() {
  return (
    <div className="mx-auto bg-[#ffffff] overflow-hidden scroll-snap-x ">
    <Head />
    <Nav />
    <Hero />
    <About />
  
  
  
      </div>
  )
}
