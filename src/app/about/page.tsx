"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
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
  }, []); // Empty dependency array to run only on component mount

  return (
    <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 py-12">
      {/* Section Wrapper */}
      <div className="flex items-start space-y-8 md:space-y-0 md:space-x-8">

        {/* Text Content */}
        <div className="flex-1 fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About SM Blogify</h1>

          {/* Image Section */}
          <div className="flex-1 fade-in">
            <Image
              src="/about/about.png" // Replace with your image path
              alt="About SM Blogify"
              width={600}
              height={400}
              className="rounded-lg tems-start md:mr-[1000px] shadow-md object-cover w-full sm:w-[96px] md:w-80 lg:w-96 mx-auto"
            />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 fade-in">What We Cover</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2 fade-in">
            <li><strong>Artificial Intelligence:</strong> Explore how AI is reshaping industries and our daily lives.</li>
            <li><strong>Robotic AI:</strong> Discover the innovations driving robotics and their applications.</li>
            <li><strong>Blockchain:</strong> Understand the foundation of cryptocurrencies and secure digital transactions.</li>
            <li><strong>Artificial Intelligence and Machine Learning:</strong> Explore how AI and ML are reshaping industries.</li>
            <li><strong>Virtual Reality and the Metaverse:</strong> Dive into the immersive world of virtual experiences.</li>
            <li><strong>Cloud Computing:</strong> Learn about the backbone of modern IT infrastructure.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 fade-in">Why SM Blogify?</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2 fade-in">
            <li>Simplified explanations for complex topics.</li>
            <li>Regularly updated and well-researched content.</li>
            <li>A commitment to providing value through every article.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 fade-in">Get Involved</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {`We’d love to hear from you! Whether you have suggestions, feedback, or just want to say hi, feel free to
            reach out via our`} <Link href="/contact" className="text-blue-600 underline">Contact Page</Link>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            {`Thank you for being part of the SM Blogify journey. Let’s learn and grow together!`}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 fade-in">Want a Stunning Blog Website That Stands Out? Let Me Help You!</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 fade-in">
            {`Are you looking for a professional, eye-catching, and fully functional blog website that reflects your vision? I specialize in creating blog websites tailored to your unique needs, using the latest technologies like Next.js, Tailwind CSS, and more.`}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4 fade-in">Why Choose Me?</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6 space-y-2 fade-in">
            <li><strong>Custom Designs:</strong> {`I’ll design a blog that aligns with your brand and audience.`}</li>
            <li><strong>Responsive Layouts:</strong> {`Your blog will look perfect on all devices—mobile, tablet, and desktop.`}</li>
            <li><strong>User-Friendly Interface:</strong> Easy navigation for your readers to keep them engaged.</li>
            <li><strong>Fast Loading Speeds:</strong> Optimized for performance to improve user experience and SEO.</li>
            <li><strong>Full Support:</strong>{`From idea to launch, I’ll guide you every step of the way.`}</li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-8 fade-in">
            {`Let’s Build Your Dream Blog Together!`}
          </h2>

          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg fade-in">
            {`Send me a message today, and let’s discuss how I can bring your blogging ideas to life. Your readers deserve an amazing experience, and I’m here to make that happen!`}
          </p>

          {/* Contact Button */}
          <button className="mt-6 py-2 px-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 fade-in">
          <Link href="mailto:shaikhsamra855@gmail.com">
            Contact Me
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
