"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import CommentSection from '@/components/commentSecton';

const ArtificialIntelligence = () => {

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
    <div className="container mx-auto px-8 max-w-screen-2xl md:px-[300px] py-8">
      <h1 className="text-4xl font-bold mb-6 fade-in">What is Artificial Intelligence?</h1>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
        {`Artificial Intelligence (AI) refers to the simulation of human intelligence in machines designed to perform tasks that typically require human cognition. AI systems leverage algorithms and vast amounts of data to learn, reason, and adapt, enabling them to solve problems, recognize patterns, and make decisions.`}
      </p>
            <Image
            src={"/dynamic-images/ai.png"}
            alt='AI Image'
            width={400}
            height={400}
            className='w-[12000px] h-auto md:h-[450px] fade-in'></Image>

      <h2 className="text-2xl font-semibold mb-4 mt-4 fade-in">How Does Artificial Intelligence Work?</h2>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
       {` AI works through a combination of machine learning (ML), deep learning, and natural language processing (NLP). It involves training models on data to identify patterns and make predictions. Over time, these models improve through continuous learning and optimization, becoming more accurate in performing their tasks. Key components include:`}
      </p>
      <ul className="list-disc list-inside mb-6 fade-in">
        <li><strong>Machine Learning (ML):</strong> A subset of AI that focuses on algorithms to learn and make predictions from data.</li>
        <li><strong>Deep Learning:</strong> Advanced neural networks that mimic human brain functions to solve complex problems.</li>
        <li><strong>Natural Language Processing (NLP):</strong> Enables machines to understand, interpret, and respond to human language.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Applications of Artificial Intelligence</h2>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
        {`AI has revolutionized various fields, including:`}
      </p>
      <ul className="list-disc list-inside mb-6 fade-in">
        <li><strong>Healthcare:</strong> AI-powered diagnostics, robotic surgeries, and personalized medicine.</li>
        <li><strong>Finance:</strong> Fraud detection, automated trading, and financial analytics.</li>
        <li><strong>Retail:</strong> Personalized recommendations, inventory management, and automated checkouts.</li>
        <li><strong>Transportation:</strong> Autonomous vehicles, route optimization, and traffic management.</li>
        <li><strong>Education:</strong> Adaptive learning systems and virtual tutors.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Benefits of Artificial Intelligence</h2>
      <ul className="list-disc list-inside mb-6 fade-in">
        <li><strong>Efficiency:</strong> Automates repetitive tasks, saving time and resources.</li>
        <li><strong>Accuracy:</strong> Reduces human errors and enhances precision in complex tasks.</li>
        <li><strong>Innovation:</strong> Unlocks new possibilities in fields like drug discovery and space exploration.</li>
        <li><strong>Personalization:</strong> Tailors services and products to individual preferences.</li>
        <li><strong>Accessibility:</strong> Assists individuals with disabilities through AI-powered tools.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Disadvantages of Artificial Intelligence</h2>
      <ul className="list-disc list-inside mb-6 fade-in">
        <li><strong>Job Displacement:</strong> Automation can replace jobs, leading to unemployment in certain sectors.</li>
        <li><strong>Bias:</strong> AI systems can inherit biases from their training data, resulting in unfair outcomes.</li>
        <li><strong>Privacy Concerns:</strong> AI systems require vast amounts of data, raising issues about data security and privacy.</li>
        <li><strong>High Costs:</strong> Developing and maintaining AI systems is expensive, limiting accessibility for smaller organizations.</li>
        <li><strong>Dependence:</strong> Over-reliance on AI systems can be risky in case of failures or inaccuracies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Future of Artificial Intelligence</h2>
      <p className="text-gray-700 mb-4 leading-relaxed fade-in">
        {`The future of AI is both exciting and uncertain. As AI continues to evolve, it holds the potential to address global challenges like climate change, improve healthcare systems, and create new economic opportunities. However, ensuring ethical AI development and minimizing its risks will be crucial.`}
      </p>

      <h2 className="text-2xl font-semibold mb-4 fade-in">Conclusion</h2>
      <p className="text-gray-700 leading-relaxed fade-in">
        {`Artificial Intelligence is transforming the world at an unprecedented pace, influencing every aspect of our lives. While it offers immense benefits, it also presents significant challenges. By fostering responsible innovation and addressing ethical concerns, AI can be a force for good, paving the way for a more advanced and equitable society.`}
      </p>
      <CommentSection/>
    </div>
  );
};

export default ArtificialIntelligence;
