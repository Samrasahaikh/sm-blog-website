"use client"
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";

export function CarouselPlugin() {
  // Ensure the autoplay plugin is correctly initialized and referenced
  const plugin = React.useMemo(() => Autoplay({ delay: 2000, stopOnInteraction: true }), []);

  const slides = [
    {
      src: "/hero-images/hero1.png",
      text: "Welcome to SM Blogify Website",
      dec: "Explore a world of knowledge and insights at SM Blogify, your go-to platform for thought-provoking articles on technology, innovation, and trends shaping our future. Whether you're curious about Artificial Intelligence, Blockchain, the Metaverse, or Cloud Computing, we've got you covered. Stay informed, inspired, and engaged with our expertly crafted blogs."
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
  ];

  return (
    <Carousel
      plugins={[plugin]}
      className="w-full max-w-screen-2xl mx-auto"
      onMouseEnter={plugin.stop}
      onMouseLeave={plugin.reset}
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
                  width={1920}
                  height={1080}
                  className="object-cover rounded-md w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px]"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="text-center p-4 md:p-6 lg:p-8 bg-black bg-opacity-60 rounded-md w-[90%] md:w-[70%] lg:w-[60%]">
                    <h2 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold font-serif mb-4">
                      {slide.text}
                    </h2>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-serif">
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
  );
}
