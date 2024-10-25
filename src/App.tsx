import React, { useEffect, useRef, useState } from 'react';
import {
  Bot,
  Image,
  MessageSquare,
  Mic,
  Brain,
  Sparkles,
  Download,
  ChevronDown,
} from 'lucide-react';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';

// Use them in your sliderImages array:
const sliderImages = [image1, image2, image3, image4];

function App() {
  const featuresRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-teal-900/30" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/api/placeholder/2574/1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }} />
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left lg:pl-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-fade-in">
                Free AI Chatbot & Image Generator
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl animate-fade-in">
                Free AI chat bot app with voice conversations and free AI image creator - No Registration - No ads!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in">
                <a
                  href="#download"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
                >
                  Download Now
                </a>
                <button
                  onClick={scrollToFeatures}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Mobile Phone Frame with Slider */}
            <div className="flex-1 flex justify-center items-center animate-fade-in lg:pr-4">
              <div className="relative w-[320px] h-[640px] rounded-[3rem] bg-gray-800 p-4 shadow-xl">
                {/* Phone Frame */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                
                {/* Screen Content */}
                <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-white">
                  {/* Image Slider */}
                  <div 
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {sliderImages.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`App Screenshot ${index + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 w-full text-center animate-bounce">
          <ChevronDown className="mx-auto w-8 h-8" />
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-12 h-12 text-purple-400" />,
                title: "100% Free Forever",
                description: "No subscriptions, no registration, no in-app purchases, and absolutely no ads. Enjoy unlimited AI conversations and image generation.",
              },
              {
                icon: <Bot className="w-12 h-12 text-blue-400" />,
                title: "Customizable Personas",
                description: "Choose any known personality style or create your own custom personas with adjustable traits.",
              },
              {
                icon: <Brain className="w-12 h-12 text-pink-400" />,
                title: "Persistent Memory",
                description: "Advanced memory system for natural, context-aware conversations that remember your preferences.",
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-teal-400" />,
                title: "Natural Conversations",
                description: "Engage in fluid, context-aware conversations through text or voice with real-time responses.",
              },
              {
                icon: <Image className="w-12 h-12 text-indigo-400" />,
                title: "Image Generation",
                description: "Create and refine any image you can imagine with unlimited high-quality generations.",
              },
              {
                icon: <Mic className="w-12 h-12 text-rose-400" />,
                title: "Voice Interaction",
                description: "Speak naturally with your AI companion using advanced voice recognition and synthesis.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Download Now for Unlimited AI Chat and Image Creation
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
                type="button" // Added button type
              >
                <Download className="w-6 h-6" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="footer">
              <a href="/privacy.html">Privacy Policy - How To Use</a>
     </div>
    </div>
  );
}

export default App;
