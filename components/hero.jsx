import react from "react";
import Link from "next/link";


const bgUrl = 'https://purecous.s3.us-east-2.amazonaws.com/IMG_9413.jpg'


const Hero = () => {
    return (
      <section id="hero">
  <div className="grid place-items-center relative bg-[url('https://purecous.s3.us-east-2.amazonaws.com/IMG_9413.jpg')] bg-cover w-screen h-[500px]">
    <div className=" grid place-items-center">
    <h1 className="text-4xl outline-none mb-6 border-black text-white z-5 md:text-5xl z-6 lg:text-5xl text-center font-mel">Transform into the person <br/> you were born to be  </h1>
  <Link href="/#services">
  <span className="bg-white border-black border rounded-md shadow-lg text-center w-52 h-30 font-mel p-2 text-2xl hover:shadow-2xl">
 Schedule Now
    
  </span>
</Link>
</div>
</div></section>
    );
  };

  export default Hero