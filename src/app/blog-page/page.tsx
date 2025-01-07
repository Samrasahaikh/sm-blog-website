"use client"; // Enable client-side rendering for animations
import Hero from '@/components/hero/hero'
import Link from 'next/link';
import React, { useEffect } from 'react'

const BlogPage = () => {
  const email = "shaikhsamra855@gmail.com"; // Replace with your email
  const subject = "SM Blog Website!"; // Replace with your subject
  const body = "Hi, I want to connect with you.";

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delayed');
    
    const observerOptions = {
      rootMargin: '0px 0px -20% 0px', // Trigger when element is 20% from entering viewport
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
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-16 py-6">
      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-blue-900 py-4 fade-in">
        {`Welcome To Sm Blogify Website Blog's`}
      </h1>

      {/* Hero Section */}
      <div className="fade-in-delayed">
        <Hero />
      </div>

      {/* What I Can Create for You */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-8 fade-in">
        What I Can Create for You:
      </h2>

      <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg fade-in-delayed">
        <li>Personal blogs</li>
        <li>Business blogs</li>
        <li>Technology blogs</li>
        <li>Lifestyle blogs</li>
        <li>Niche blogs</li>
      </ul>

      {/* Let’s Build Your Dream Blog Together */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-8 fade-in">
        {`Let’s Build Your Dream Blog Together!`}
      </h2>

      <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg fade-in-delayed">
        {`Send me a message today, and let’s discuss how I can bring your blogging ideas to life. Your readers deserve an amazing experience, and I’m here to make that happen!`}
      </p>

      {/* Contact Button */}
      <Link href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
      <button className="mt-6 py-2 px-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 fade-in-delayed">
        Contact Me
      </button>
      </Link>
    </div>
  );
}

export default BlogPage;
