"use client"; // Enable client-side rendering for animations
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const blogs = [
    {
      id: 1,
      title: 'What is Artificial Intelligence?',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: '/dynamic-images/ai.png',
      link: '/blog/ai-blog'
    },
    {
      id: 2,
      title: 'What is Robotic AI?',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: '/dynamic-images/robot.png',
      link: '/blog/robotic-ai'
    },
    {
      id: 3,
      title: 'What is Blockchain?',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: '/dynamic-images/blockChain.png',
      link: '/blog/blockChain'
    },
    {
      id: 4,
      title: 'Artificial Intelligence and Machine Learning',
      description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      image: "/dynamic-images/ai-ml.png",
      link: '/blog/ai-and-ml'
    },
    {
      id: 5,
      title: 'Metaverse and Virtual Reality',
      description: 'The Metaverse refers to a collective virtual shared space that is created by the convergence of virtually enhanced physical reality and physically persistent virtual spaces',
      image: "/dynamic-images/metavers.png",
      link: '/blog/metaverse'
    },
    {
      id: 6,
      title: 'Cloud Computing',
      description: 'Cloud computing refers to the delivery of computing services—including servers, storage, databases, networking, software,fade-in',
      image: '/dynamic-images/cloud.png',
      link: '/blog/cloud-computing'
    }
  ];

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
    <div className='max-w-screen-2xl mx-auto bg-slate-100'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog, index) => (
              <div key={index} className="p-4 md:w-1/3 fade-in">
                <div className="h-full border-2 border-gray-600 shadow-lg shadow-blue-500 border-opacity-60 rounded-lg overflow-hidden">
                  <Link href={blog.link}>
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={blog.image}
                      alt={blog.title}
                      width={300}
                      height={300}
                    />
                  </Link>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {blog.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {blog.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <Link href={blog.link} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
