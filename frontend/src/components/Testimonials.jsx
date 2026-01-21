import React, { useState } from 'react';
import { mockData } from '../mock';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % mockData.testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + mockData.testimonials.length) % mockData.testimonials.length);
  };

  return (
    <section className="bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-4">L'avis de nos clients</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ce qui compte, c'est ce qu'ils disent
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockData.testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                      <div className="flex items-start gap-8 mb-8">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <img
                              src={testimonial.logo}
                              alt={testimonial.company}
                              className="h-8 object-contain grayscale opacity-60"
                            />
                          </div>
                          <h4 className="text-white font-bold text-xl mb-1">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-full p-3 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={next}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-full p-3 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {mockData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
