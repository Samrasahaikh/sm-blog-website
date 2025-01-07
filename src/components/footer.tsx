"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observerOptions = {
      rootMargin: "0px 0px -20% 0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <footer className="text-gray-600 font-serif bg-slate-50">
        <div className="container px-5 py-12 mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap justify-between md:justify-start md:text-left text-center order-first gap-y-10">
            {/* Follow Us Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 fade-in flex flex-col items-center md:items-start">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                FOLLOW US
              </h2>
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="w-20 h-20 rounded-full mb-3"
              />
              <span className="flex justify-center md:justify-start gap-3">
                <Link href="#" aria-label="Twitter">
                  <FaTwitter className="hover:text-indigo-500 transition-colors duration-300" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <FaFacebook className="hover:text-indigo-500 transition-colors duration-300" />
                </Link>
                <Link href="#" aria-label="Github">
                  <FaGithub className="hover:text-indigo-500 transition-colors duration-300" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-indigo-500 transition-colors duration-300" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <FaInstagram className="hover:text-indigo-500 transition-colors duration-300" />
                </Link>
              </span>
            </div>

            {/* Blog Categories Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 fade-in">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                BLOG CATEGORIES
              </h2>
              <nav className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    Tech
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    Travel
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    Lifestyle
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    Food
                  </a>
                </li>
              </nav>
            </div>

            {/* Quick Links Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 fade-in">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                QUICK LINKS
              </h2>
              <nav className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-600 hover:text-indigo-500 transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </nav>
            </div>

            {/* Subscribe Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 fade-in">
              <h2 className="font-extrabold text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-full">
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
                <button className="mt-3 w-full md:w-auto inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 text-center md:text-left">
                Stay updated with our latest blog posts!
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex flex-wrap items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="w-10 h-10 bg-slate-100 rounded-full"
              />
              <span className="ml-2 text-xl text-gray-900">Blogify</span>
            </Link>
            <p className="text-sm text-gray-500 mt-4 sm:mt-0">
              © 2025 Blogify — All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
