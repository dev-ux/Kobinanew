import React, { useState } from 'react';
import { mockData } from '../mock';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Les questions qu'on nous pose (vraiment)
          </h2>
        </div>

        <div className="space-y-4">
          {mockData.faq.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-semibold text-lg pr-8">{item.question}</span>
                <ChevronDown
                  className={`h-6 w-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-400 text-base leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
