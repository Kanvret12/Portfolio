'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import profilePic from '../../public/img/mee.jpeg';
import Cyber from '../../public/img/cybermedia.jpg';
import MataSiber from '../../public/img/matasiber.png';
import ServiceAce from '../../public/img/serviceace.png';
import SimanBumbu from '../../public/img/simanbumbu.png';

export default function Home() {
  useEffect(() => {
    const skills = document.getElementById('animated');
    const skillItems = document.querySelectorAll('#animated-items > div');
    
    skills.classList.add('animate-blur-down');
    
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate-blur-down');
      }, index * 50);
    });
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="flex flex-col pb-16 animated" id="home"> 
        <section className="hero">
          <div className="flex gap-2 justify-between animate-blur-down">
            <div className="mx-auto w-full max-w-2xl space-y-1">
              <header className="flex">
                <h1 className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi 👋
                </h1>
              </header>
              <p className="inline-block max-w-[600px] md:text-xl">
                I'm Muhammad Sauma M. as ShielD. Freelance Front-End & Back-End Developer, I build clear, beautiful front-end interfaces and robust back-end systems, turning ideas into functional, elegant products.
              </p>
            </div>
            <div className="flex">
              <span className="block w-28 h-28 relative overflow-hidden rounded-full">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </span>
            </div>
          </div>
        </section>
        <section className="about pt-10 text-white animated-items animate-blur-down">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="max-w-full text-pretty font-sans text-sm text-muted-foreground text-neutral-400 pb-5 pt-2">
                I'm Muhammad Sauma from Indonesia. I possess strong professional skills with a focus on building highly complex applications. My experience extends well beyond my educational background.
              </p>
              <p className="max-w-full text-pretty font-sans text-sm text-muted-foreground text-neutral-400">
                💼 My work includes extensive involvement in developing both back-end and front-end solutions. I've been engaged in organizational tasks at private companies.
              </p>
            </div>
          </div>
        </section>
        <section className='education animated-items animate-blur-down'>
          <div className='text-2xl font-bold mt-8 mb-3'>
            <span>
              Education
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <div className='flex'>
                <div className='relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted-background'>
                <Image
                  src={Cyber}
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                </div>
                <div className='flex flex-col pl-3'>
                    <span className='text-sm'>
                    Smk cybermedia
                    </span>
                    <span className='text-xs text-neutral-400'>
                      Teknik Komputer dan Jaringan
                    </span>
                </div>
              </div>
            </div>
            <div>
              <span className='text-xs sm:text-sm tabular-nums text-muted-foreground text-right text-neutral-400'>
                2021 - 2024
              </span>
            </div>
          </div>
        </section>
        <section className='skills animate-blur-down' id="animated">
           <div className='text-2xl font-bold mt-8 mb-3' >
            <span>
              Skills
            </span>
          </div>
          <div className='flex flex-wrap gap-1' id="animated-items">
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Javascript</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Node.js</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>React.js</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>MongoDB</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Express</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Next.js</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Html</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Css</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>GPT Prompt</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Tailwind</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Excell</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Debian</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Ubuntu</div>
            <div className='inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-white text-black hover:bg-neutral-300'>Cisco</div>
          </div>
        </section>
        <section className="project">
          <div className="relative flex items-center my-8" id="animated-items">
            <div className="flex-grow border-t border-neutral-400"></div>
            <span className="mx-4 text-white font-medium">Project</span>
            <div className="flex-grow border-t border-neutral-400"></div>
          </div>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto' id="animated-items">
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border-neutral-400 hover:shadow-lg transition-all duration-300 ease-out h-full">
              <div className='relative flex shrink-0 overflow-hidden border h-40 w-full m-auto bg-muted-background'>
                <Image src={MataSiber} alt="Profile Picture" layout="fill" objectFit="cover" className="h-40 w-full overflow-hidden object-cover object-top"/>
                <a href="https://matasiber.id" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 left-4 flex items-center rounded-md border px-2.5 py-1 text-xs bg-white bg-opacity-30 text-white border-white backdrop-blur-sm">
                  Views
                </a>

              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border-neutral-400 hover:shadow-lg transition-all duration-300 ease-out h-full">
              <div className='relative flex shrink-0 overflow-hidden border h-40 w-full m-auto bg-muted-background'>
                <Image src={SimanBumbu} alt="Profile Picture" layout="fill" objectFit="cover" className="h-40 w-full overflow-hidden object-cover object-top"/>
                <button className="absolute bottom-4 left-4 items-center rounded-md border px-2.5 py-1 text-xs bg-white bg-opacity-30 text-white border-white backdrop-blur-sm">
                Cooming Soon
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border-neutral-400 hover:shadow-lg transition-all duration-300 ease-out h-full">
              <div className='relative flex shrink-0 overflow-hidden border h-40 w-full m-auto bg-muted-background'>
                <Image src={ServiceAce} alt="Profile Picture" layout="fill" objectFit="cover" className="h-40 w-full overflow-hidden object-cover object-top"/>
                <button className="absolute bottom-4 left-4 items-center rounded-md border px-2.5 py-1 text-xs bg-white bg-opacity-30 text-black border-black backdrop-blur-sm">
                  Cooming Soon
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white py-3 px-6 bg-background rounded-full bg-black [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        <div className="container mx-auto  px-4 flex justify-center">
          <ul className="flex space-x-7">
            <li>
              <a href="#home" className="hover:text-gray-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                  <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M15 18H9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kanvretid?igsh=MTl0eXcwY2U1NGt5bg==" className="hover:text-gray-400">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
               <g id="SVGRepo_iconCarrier">
               <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"/>
               <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"/>
               <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"/>
               </g>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/Kanvret12" className="hover:text-gray-400">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="w-5 h-5">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> </path> </g> </g> </g> </g>
              </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
