import react from "react";
import Link from "next/link";


const bgUrl = 'https://purecous.s3.us-east-2.amazonaws.com/IMG_9413.jpg'


const Hero = () => {
    return (
      
  <div className="grid place-items-center relative bg-[url('https://purecous.s3.us-east-2.amazonaws.com/IMG_9413.jpg')] bg-cover w-screen h-[500px]">
  <Link href="/#services">
  <span className=" bg-white border-black border rounded-md shadow-lg text-center w-52 h-30 font-mel p-2 text-2xl hover:shadow-2xl">
 Schedule Now
    
  </span>
</Link>
</div>
    );
  };

  export default Hero