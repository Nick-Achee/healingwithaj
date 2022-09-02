import react from "react";
import Link from "next/link";


const bgUrl = 'https://purecous.s3.us-east-2.amazonaws.com/HWA+BG+.mp4'


const Hero = () => {
    return (
      <div className="w-max bg-right md:w-screen bg-black center">
        <section className="flex flex-col bg-right  h-full min-h-max justify-center overflow-auto">
      <video autoPlay loop muted playsInline className="brightness-75"
            src={bgUrl}
            />
  
      <div className="lg:container flex flex-col items-center content-center justify-center z-40 absolute">
        
          <h1 className="text-4xl outline-none border-black text-white  mb-2  z-5 md:text-5xl z-6 lg:text-5xl text-center font-mel pb-4">Transform into the person <br/> you were born to be  </h1>
          <div className="bg-white py-2 px-4 border border-black rounded-lg shadow-sm hover:animate-bounce hover:shadow-2xl">
  <Link href="#services">
  <span className="font-mel p-2 text-xl">
 Schedule Now<span aria-hidden="true" className="ml-2" role="img">✨</span>
    
  </span>
</Link></div>
       </div>
     
      
  
    </section>
      </div>
    );
  };

  export default Hero