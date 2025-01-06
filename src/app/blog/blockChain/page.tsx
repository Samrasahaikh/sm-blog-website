"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import CommentSection from '@/components/commentSecton';

const Blockchain = () => {

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
    <div className="container mx-auto px-4 md:px-[300px] py-8">
      <h1 className="text-4xl font-bold text-start mb-6 fade-in">What is Blockchain?</h1>
       <Image
                  src={"/dynamic-images/blockChain.png"}
                  alt='AI Image'
                  width={400}
                  height={400}
                  className='w-[12000px] h-auto md:h-[450px] fade-in'></Image>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Introduction</h2>
        <p className="text-lg leading-7 fade-in">
          {`Blockchain is a decentralized, distributed ledger technology that allows for the secure and transparent recording of transactions. Each transaction is stored in a "block" and linked to the previous one, forming a "chain" of blocks. This structure makes it nearly impossible to alter data without altering all subsequent blocks, ensuring data integrity and security.`}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 fade-in">How Does Blockchain Work?</h2>
        <p className="text-lg leading-7 fade-in">
          {`Blockchain operates on a peer-to-peer network where participants, or nodes, maintain a copy of the entire ledger. When a transaction occurs, it is verified by the nodes through a consensus mechanism such as Proof of Work (PoW) or Proof of Stake (PoS). Once validated, the transaction is added to a block, which is then added to the chain.`}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Applications of Blockchain</h2>
        <ul className="list-disc ml-6 text-lg fade-in">
          <li>Cryptocurrencies like Bitcoin and Ethereum</li>
          <li>Supply chain management for tracking goods</li>
          <li>Healthcare for secure patient records</li>
          <li>Finance for faster and more secure transactions</li>
          <li>Voting systems for tamper-proof elections</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Benefits of Blockchain</h2>
        <ul className="list-disc ml-6 text-lg fade-in">
          <li><strong>Transparency:</strong> All transactions are visible to all participants.</li>
          <li><strong>Security:</strong> Data is encrypted and tamper-proof.</li>
          <li><strong>Decentralization:</strong> No single entity has control, reducing risks of fraud and censorship.</li>
          <li><strong>Efficiency:</strong> Automates processes, reducing time and cost.</li>
          <li><strong>Immutability:</strong> Data once written cannot be changed.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Disadvantages of Blockchain</h2>
        <ul className="list-disc ml-6 text-lg fade-in">
          <li><strong>Energy Consumption:</strong> Consensus mechanisms like PoW require significant energy.</li>
          <li><strong>Scalability:</strong> Managing a large number of transactions can be slow and costly.</li>
          <li><strong>Complexity:</strong> The technology is difficult to understand and implement for non-experts.</li>
          <li><strong>Irreversibility:</strong> Mistakes in transactions cannot be undone.</li>
          <li><strong>Regulatory Uncertainty:</strong> Governments are still formulating policies around blockchain use.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 fade-in">Future of Blockchain</h2>
        <p className="text-lg leading-7 fade-in">
          {`The future of blockchain technology looks promising as it continues to evolve and find applications in various industries. Innovations like decentralized finance (DeFi), non-fungible tokens (NFTs), and smart contracts are gaining traction. However, challenges such as scalability, regulation, and energy efficiency need to be addressed for widespread adoption.`}
        </p>
      </section>
      <CommentSection/>
    </div>
  );
};

export default Blockchain;
