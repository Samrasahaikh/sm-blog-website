"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {

   useEffect(() => {
      const fadeElements = document.querySelectorAll('.fade-in');
  
      const observerOptions = {
        rootMargin: '0px 0px -20% 0px',
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      }, observerOptions);
  
      fadeElements.forEach(element => {
        observer.observe(element);
      });
  
      return () => {
        fadeElements.forEach(element => {
          observer.unobserve(element); // Clean up on unmount
        });
      };
    }, []);
  
  return (
    <div>
      <footer className="text-gray-600 font-serif bg-slate-50 max-w-screen-2xl mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 fade-in">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                FOLLOW US
              </h2>
              <Image 
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="w-20 h-20 rounded-full ml-[130px] md:ml-0"
              />
              <span className="inline-flex gap-2">
                <Link href="#"><FaTwitter /></Link>
                <Link href="#"><FaFacebook /></Link>
                <Link href="#"><FaGithub /></Link>
                <Link href="#"><FaLinkedin /></Link>
                <Link href="#"><FaInstagram /></Link>
              </span>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 fade-in">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                BLOG CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Tech</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Travel</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Lifestyle</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Food</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 fade-in">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                QUICK LINKS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About Us</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms of Service
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 fade-in">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter your email"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Stay updated with our latest blog posts!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 max-w-screen-2xl mx-auto">
          <div className="container px-5 py-6 mx-auto flex items-center justify-center sm:flex-row flex-col">
            <Link href={"/"} className="flex title-font font-medium items-center text-gray-900">
              <Image 
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="w-10 h-10 bg-slate-100 rounded-full"
              />
              <span className="ml-1 text-xl">Blogify</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2025 Blogify — All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
