import Head from 'next/head'
import Hero from '../components/hero'
import Nav from '../components/nav'
import About from '../components/About'
import { Client } from '@notionhq/client'
import Link from 'next/link'


export default function Home({services}) {
  
  return (
    <div className="mx-auto bg-[#ffffff] overflow-hidden scroll-snap-x ">
    <Head />
    <Nav />
    <Hero />
    <About />
    <section id='services'  className="bg-[url('https://purecous.s3.us-east-2.amazonaws.com/plants-l.jpg')] bg-cover h-screen w-screen overflow-y-scroll mb-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full ">
        <div className="max-w-lg mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <div className="text-center inline-block px-3 py-px mb-4 text-xs font-mel tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Heal with AJ
            </div>
          </div>
          <div className="text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">The</span>
            </span>{' '}
            simplest way to schedule{' '} a session
          </div>
          <div className="text-base text-gray-700 md:text-lg">
          
          </div>
        </div>
        <div className="px-10 grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2 overflow-auto ">
        {services.map((service) => (
    <div
      key={service.id}
      className="card glass m-2 hover:shadow-2xl"> <div className="card-body">
      <div className="card-title mx-auto">{service.properties.service.title[0].plain_text}</div>
      <div className="card-paragraph mx-auto">{service.properties.description.rich_text[0].plain_text}</div>
<div className="card-actions">
<button className="btn btn-sm" ><Link target="_blank" rel="noreferrer" href={service.properties.siteLink.rich_text[0].plain_text} >Book Now</Link></button>
</div>
</div>
</div>
))}
</div>
</section>  
</div>
)
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return {
    props: {
      services: response.results,
    },
    revalidate: 1,
  };
}
