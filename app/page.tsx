import Link from "next/link";
// import Image from "next/image";


import variables from '../styles/variables.module.scss'

export default function Home() {
  return (
    <>
    <div className={` ${variables.title}   w-full p-3 rouned-md  border-1 text-right flex flex-col justify-center `}>

        {/* <a href="https://bookama.ir">به نام خدا </a> */}
        
        <h1 className="mb-8 mt-8">
مزایای آموزش آنلاین

آموزش مجازی به روشی هیجان انگیز برای کسب آموزش در بین دانش آموزان تبدیل شده است. برای دانستن حقایق الهام‌بخش بیشتر در مورد آموزش آنلاین، به برخی از مزایای این شیوه آموزشی هیجان‌انگیز اشاره کرده‌ایم:
انعطاف پذیری

</h1>


  </div>





<div className={` 
${variables.title}
mb-20 text-lg  text-black   md:p-3  text-right
 flex flex-row flex-wrap md:flex-row justify-center gap-5
  md:gap-0 md:justify-center content-end
  
  fixed bottom-10 right-0 left-0
  
  `}>


<Link className="justify-evenly 
 rounded-md bg-white p-3 flex flex-row items-center w-[50%] md:w-[30%]  content-between" 
 href="/tests">

<h1>شروع ازمون</h1>

<img src="/icons/testicon.png" className="w-[50px]" />
{/* <Image
          className=""
            //it refers to public/
          alt="Next.js logo"
          width={150}
          height={20}
          priority
          /> */}
</Link>

          </div>
  








</>
  );
}
