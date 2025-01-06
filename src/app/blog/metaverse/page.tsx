"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import CommentSection from '@/components/commentSecton';

const MetaverseAndVirtualReality = () => {

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
    <div className="container mx-auto p-6 md:px-[300px]">
      <h1 className="text-3xl font-bold mb-4 fade-in">Metaverse and Virtual Reality</h1>

                <Image
                  src={"/dynamic-images/metavers.png"}
                  alt='AI Image'
                  width={400}
                  height={400}
                  className='w-[12000px] h-auto md:h-[400px] fade-in'></Image>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 mt-4 fade-in">What is the Metaverse?</h2>
        <p className="text-gray-700 mb-4 fade-in">
          {`The Metaverse refers to a collective virtual shared space that is created by the convergence of virtually
          enhanced physical reality and physically persistent virtual spaces. It is facilitated by the use of augmented
          reality (AR), virtual reality (VR), and other immersive technologies. Essentially, the Metaverse is a digital
          universe where users can interact, socialize, work, and play in ways that mirror real-life experiences.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 fade-in">What is Virtual Reality?</h2>
        <p className="text-gray-700 mb-4 fade-in">
         {` Virtual Reality (VR) is a simulated experience that employs computer technology to immerse users in a
          completely virtual world. By wearing a VR headset, users can experience environments that feel real, enabling
          them to interact with the virtual world as though they were physically present.`}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Applications of Metaverse and Virtual Reality</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 fade-in">
          {`<li><strong>Gaming:</strong> Immersive games where players can interact in 3D worlds.</li>
          <li><strong>Education:</strong> Virtual classrooms, interactive learning, and skill training.</li>
          <li><strong>Healthcare:</strong> Therapy, surgery simulations, and rehabilitation programs.</li>
          <li><strong>Work:</strong> Virtual offices and collaborative spaces.</li>
          <li><strong>Social Interaction:</strong> Virtual events, meetups, and networking.</li>`}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Benefits of Metaverse and Virtual Reality</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 fade-in">
          {`<li><strong>Enhanced Interaction:</strong> Enables richer social interactions and experiences.</li>
          <li><strong>Innovation in Education:</strong> Provides hands-on learning through simulations.</li>
          <li><strong>Improved Accessibility:</strong> Bridges geographical gaps for work and socialization.</li>
          <li><strong>Revolutionary Healthcare:</strong> Aids in therapy and medical training.</li>
          <li><strong>Creative Opportunities:</strong> Encourages artistic and technological advancements.</li>`}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Disadvantages of Metaverse and Virtual Reality</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 fade-in">
          {`<li><strong>Cost:</strong> High setup and maintenance costs for VR hardware.</li>
          <li><strong>Health Concerns:</strong> Issues like eye strain, motion sickness, and mental fatigue.</li>
          <li><strong>Privacy Risks:</strong> Potential misuse of personal data and security vulnerabilities.</li>
          <li><strong>Dependency:</strong> Risk of over-reliance on virtual environments.</li>
          <li><strong>Accessibility:</strong> Limited access for underprivileged groups due to cost and infrastructure.</li>`}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Future of Metaverse and Virtual Reality</h2>
        <p className="text-gray-700 mb-4 fade-in">
          {`The future of the Metaverse and VR looks promising with advancements in technology such as 5G, AI, and edge
          computing. These innovations are expected to make virtual environments more immersive, accessible, and
          realistic. From creating decentralized virtual economies to transforming industries like real estate and
          tourism, the possibilities are boundless.`}
        </p>
      </section>

      <div className="mt-8 text-gray-500 fade-in">
        <p>{`Metaverse and Virtual Reality are reshaping the way we interact with the digital world, offering both immense
          potential and significant challenges. The key lies in responsibly leveraging these technologies to benefit
          society.`}</p>
      </div>
      <CommentSection/>
    </div>
  );
};

export default MetaverseAndVirtualReality;
