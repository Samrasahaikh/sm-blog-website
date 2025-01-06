"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card } from "../ui/card"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  // Add image sources and text content
  const slides = [
    {
      src: "/hero-images/hero1.png",
      text: "Welcome to SM Blogify Website",
      dec: " Explore a world of knowledge and insights at SM Blogify, your go-to platform for thought-provoking articles on technology, innovation, and trends shaping our future. Whether you're curious about Artificial Intelligence, Blockchain, the Metaverse, or Cloud Computing, we've got you covered. Stay informed, inspired, and engaged with our expertly crafted blogs."
    },
    {
      src: "/hero-images/hero2.png",
      text: "Exploring the World of Artificial Intelligence: Benefits, Challenges, and Future Prospects",
      dec: "AI is rapidly evolving, and it's changing the way we live, work, and play. From smart homes to autonomous vehicles, AI is poised to revolutionize various industries. Learn about the benefits, challenges, and future prospects of AI in today's world."
    },
    {
      src: "/hero-images/hero3.png",
      text: "Understanding Robotic AI: Innovations, Applications, Benefits, and Challenges",
      dec: "Robotic AI is revolutionizing industries like manufacturing, logistics, and healthcare. Learn about innovations, applications, benefits, and challenges of robotic AI in today's world."
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="lg:w-[1200px] md:w-[760px] md:h-[300px] lg:h-[500px] w-[350px] h-[250px] max-w-screen-2xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="relative overflow-hidden">
                {/* Image */}
                <Image
                  src={slide.src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="object-cover rounded-md lg:h-[490px] lg:w-[1500px] md:h-[290px] md:w-[760px] h-[250px] w-[350px]"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 items-center justify-center bg-black bg-opacity-50 ">
                    <div className="justify-center items-center lg:h-[300px] h-[200px] w-[250px] p-2 md:w-[500px] md:ml-[150px] lg:ml-[350px] lg:mt-[130px] mt-6 ml-16 bg-black bg-opacity-50">
                  <h2 className="text-slate-200 text-sm md:text-3xl font-extrabold text-center px-2 font-serif ">
                    {slide.text}
                  </h2>
                  <p className="text-slate-200 text-[10px] md:text-sm mt-2 text-center px-4 font-serif">
                    {slide.dec}
                  </p>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
