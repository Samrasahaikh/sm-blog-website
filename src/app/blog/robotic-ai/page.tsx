"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import CommentSection from '@/components/commentSecton';

const RoboticAI = () => {
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
    <div className="container mx-auto md:px-[300px] px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 fade-in">What is Robotic AI?</h1>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
        {`Robotic AI refers to the integration of Artificial Intelligence (AI) into robotics, enabling machines to perform tasks that typically require human intelligence. These robots are equipped with sensors, algorithms, and processing units that allow them to perceive their environment, make decisions, and execute actions autonomously or semi-autonomously. Robotic AI is at the forefront of innovation, transforming industries and shaping the future of automation.`}
      </p>
               <Image
                  src={"/dynamic-images/robot.png"}
                  alt='AI Image'
                  width={400}
                  height={400}
                  className='w-[12000px] h-auto md:h-[450px] fade-in'></Image>

      <h2 className="text-2xl font-semibold mb-4 mt-4 fade-in">How Does Robotic AI Work?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
        {`Robotic AI combines robotics and artificial intelligence to create intelligent machines capable of interacting with the physical world. Here are the key components:`}
      </p>
      <ul className="list-disc list-inside mb-6 fade-in">
       <li><strong>Sensors:</strong> {`Collect data about the robot's surroundings, such as visual, auditory, or tactile information.`}</li>
        <li><strong>Processing Units:</strong> Analyze data from sensors using AI algorithms to make decisions.</li>
        <li><strong>Actuators:</strong> Execute physical actions, such as moving, lifting, or assembling parts.</li>
        <li><strong>Machine Learning:</strong> Enables robots to learn from data, improve performance, and adapt to new situations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Applications of Robotic AI</h2>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
        {`Robotic AI is revolutionizing various sectors with its ability to perform complex tasks. Here are some key applications:`}
      </p>
      <ul className="list-disc list-inside mb-6 fade-in">
        <li><strong>Manufacturing:</strong> Robotic arms for assembly lines, quality control, and packaging.</li>
        <li><strong>Healthcare:</strong> Surgical robots, robotic prosthetics, and patient monitoring systems.</li>
        <li><strong>Logistics:</strong> Autonomous drones and robots for inventory management and delivery.</li>
        <li><strong>Agriculture:</strong> Robots for planting, harvesting, and monitoring crops.</li>
        <li><strong>Exploration:</strong> Space exploration robots and underwater drones for scientific research.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Benefits of Robotic AI</h2>
      <ul className="list-disc list-inside mb-6 fade-in">
        <li><strong>Efficiency:</strong> Performs tasks faster and more accurately than humans, reducing costs and time.</li>
        <li><strong>Precision:</strong> Executes highly delicate or complex tasks, such as surgeries, with unmatched accuracy.</li>
        <li><strong>Safety:</strong> Operates in hazardous environments, minimizing risks to human workers.</li>
        <li><strong>Scalability:</strong> Can be deployed across various industries for diverse applications.</li>
        <li><strong>24/7 Operation:</strong> Functions without fatigue, increasing productivity.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Disadvantages of Robotic AI</h2>
      <ul className="list-disc list-inside mb-6 fade-in">
        <li><strong>High Costs:</strong> Developing, deploying, and maintaining robotic AI systems can be expensive.</li>
        <li><strong>Job Displacement:</strong> Automation may lead to unemployment in certain sectors.</li>
        <li><strong>Technical Limitations:</strong> Robots can struggle with unstructured or unpredictable tasks.</li>
        <li><strong>Ethical Concerns:</strong> Raises questions about autonomy, accountability, and the role of humans in decision-making.</li>
        <li><strong>Dependency:</strong> Over-reliance on robots can create vulnerabilities in case of system failures.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">The Future of Robotic AI</h2>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
        {`Robotic AI holds immense potential for the future. Advancements in AI and robotics are paving the way for fully autonomous systems capable of learning and adapting in real-time. Innovations such as humanoid robots, collaborative robots (cobots), and AI-driven drones are expected to redefine industries. However, addressing ethical and societal challenges will be crucial for ensuring responsible development.`}
      </p>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Conclusion</h2>
      <p className="text-gray-700 leading-relaxed fade-in">
        {`Robotic AI represents a groundbreaking convergence of technology and intelligence, transforming the way we live and work. While it offers unparalleled benefits in terms of efficiency, precision, and safety, it also brings challenges that require careful consideration. By fostering innovation and addressing ethical concerns, Robotic AI can unlock new possibilities and drive progress for humanity.`}
      </p>
      <CommentSection/>
    </div>
  );
};

export default RoboticAI;
