import React from 'react'
import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import logo from '../assets/LoGo-UDOne.png'

const Hero = () => {

  const socialIcons = [
    { icon: FaInstagram, alt: "Instagram", link: "#" },
    { icon: FaTiktok, alt: "Tiktok", link: "#" },
    { icon: FaGithub, alt: "Github", link: "#" },
    { icon: FaYoutube, alt: "Youtube", link: "#" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div
            className="lg:w-2/5 w-full flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative group">
              {/* Disparition de l'animation avec ce bloc */}
              <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 border-2 border-red-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 " />
                <div className="absolute inset-0 border-2 border-red-500/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500 " />
              </div>
            </div>
          </div>
          <div
            className="lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            data-aos="fade-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium dark:text-red-300 text-gray-700">
                Available for work
              </span>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 dark:text-white text-gray-900'>
              Bienvenue, je suis <span>Danylex</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero