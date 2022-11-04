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
    <section id='services'  className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div id="services"className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <div className="inline-block px-3 py-px mb-4 text-xs font-mel tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Heal with AJ
            </div>
          </div>
          <div className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">The</span>
            </span>{' '}
            simplest way to schedule{' '} a session
          </div>
          <div className="text-base text-gray-700 md:text-lg">
          
          </div>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        {services.map((service) => (
    <div
      key={service.id}
      className="card glass"> <div className="card-body">
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
