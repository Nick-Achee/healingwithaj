import React from "react";
import Link from 'next/link'


const products = [
    {
        cardId:"1",
        title:"Product",
        des:"Here is a description",
        link:"https://calendly.com"
    },
    {
        cardId:"2",
        title:"product",
        des:"Here is a description",
        link:"https://calendly.com"
    }, 
    {
        cardId:"3",
        title:"product",
        des:"Here is a description",
        link:"https://calendly.com"
    },
]




export default function Services() {
 
    return (
      <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-mel tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Heal with AJ
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">The</span>
            </span>{' '}
            simplest way to schedule{' '} a session
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
         
         
          
          {products.map(({title, des, link, cardId})=>(  <div key={cardId} className="card w-96 glass">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{des}</p>
    <div className="card-actions">
      <button className="btn btn-sm" ><a href={link} >Learn now!</a></button>
    </div>
  </div>
</div>

          ))}
         
        

        
         
        </div>
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </Link>
        </div>
      </div>
    );
  };


