"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form submit hone par ye function chalega
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !message) {
      alert("Sab fields bharna zaroori hai!");
      return;
    }

    // Yahan aap API integrate kar sakte hain email bhejne ke liye
    console.log({ name, email, message });
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-24 bg-gray-100 max-w-screen-2xl mx-auto">
    <div className="max-w-4xl mx-auto p-6 md:p-12 font-serif ">
      <h2 className="text-2xl font-semibold text-center text-blue-900">Get in Touch</h2>
      <p className="mt-4 text-center text-gray-600 text-sm sm:text-base md:text-lg">
       {`Send me a message today, and let's talk about how I can help bring your ideas to life. I'm here to create an exceptional experience for your audience!`}
      </p>

      {/* Social Media Links Section */}
      <div className="flex justify-center mt-8">
        <div className="text-center">
          <h2 className="font-extrabold text-blue-900 tracking-widest text-lg mb-3">FOLLOW US</h2>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/Samrasahaikh" target="_blank" className="hover:text-gray-950 text-gray-700"><FaGithub size={24} /></Link>
            <Link href="https://linkedin.com/in/samra-shaikh-7164142b6" target="_blank" className="hover:text-blue-800 text-blue-700"><FaLinkedin size={24} /></Link>
            <Link href="https://instagram.com/abrish6587" target="_blank" className="hover:text-pink-400 text-pink-800"><FaInstagram size={24} /></Link>
            <Link href="https://facebook.com/samra.shaikh.14289" target="_blank" className="hover:text-blue-800 text-blue-700"><FaFacebook size={24} /></Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-800 text-blue-700"><FaTwitter size={24} /></Link>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6 mt-12 text-blue-900">Contact Us</h1>

      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-xl text-green-500 font-semibold mb-4">Your message has been sent!</h2>
          <p className="text-gray-600">We will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-blue-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-lg shadow-blue-400"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-blue-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-lg shadow-blue-400"
              placeholder="Enter your Email Address"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-blue-700 mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-lg shadow-blue-400"
              rows="6"
              placeholder="Enter your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ContactPage;
