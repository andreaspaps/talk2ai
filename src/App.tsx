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
  ChevronUp,
} from 'lucide-react';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';

const sliderImages = [image1, image2, image3, image4, image5];

function App() {
  const featuresRef = useRef(null);
  const downloadRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

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
                Unlimited AI chat with voice conversations and high quality image generation - No Sign-Up - No ads!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in">
                <button
                  onClick={scrollToDownload}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
                >
                  Download Now
                </button>
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
                    {sliderImages.map((src, index) => {
                      const altTexts = [
                        "AI Chat Conversation App Screenshot",
                        "Stunning AI Art Creation App Screenshot",
                        "User-Friendly Interface App Screenshot",
                        "Voice Interaction Demo App Screenshot",
                        "Customizable Persona Options App Screenshot"
                      ];
                      
                      return (
                        <img
                          key={index}
                          src={src}
                          alt={altTexts[index]}
                          className="w-full h-full object-cover flex-shrink-0"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute mt-4 bottom-8 w-full text-center animate-bounce">
          <ChevronDown className="mx-auto w-8 h-8" />
        </div>
      </div>
      <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl text-gray-300 text-center">
        <h3 className="text-xl md:text-3xl font-medium mb-2">
        Discover the ultimate AI chatbot and image creator app - all for free! No sign-up, no advertisements, just pure creative freedom. Enjoy endless conversations and high-quality image generation anytime, anywhere!
          </h3>
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
                description: "No subscriptions, no registration, no in-app purchases, and absolutely no ads. Enjoy unlimited AI chat and image generation.",
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-teal-400" />,
                title: "Natural Conversations",
                description: "Engage in fluid, context-aware conversations through text or voice. Powered by the smartest artificial intelligence.",
              },
              {
                icon: <Image className="w-12 h-12 text-indigo-400" />,
                title: "Image Generation",
                description: "Create and refine any image you can imagine with unlimited high-quality generations. Create art on the go.",
              },
              {
                icon: <Mic className="w-12 h-12 text-rose-400" />,
                title: "Voice Interaction",
                description: "Speak naturally with your AI companion using advanced voice recognition and speech synthesis.",
              },
              {
                icon: <Bot className="w-12 h-12 text-blue-400" />,
                title: "Customizable Personas",
                description: "Choose any known personality style or create your own custom personas with adjustable traits.",
              },
              {
                icon: <Brain className="w-12 h-12 text-pink-400" />,
                title: "Web Search",
                description: "Search for current events like top news headlines, weather forecasts or any other current information.",
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
      {/* Text Content Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl text-gray-300">
          <p className="mb-6">
            Imagine having a personal AI art generator and chatbot at your fingertips. Engage in seamless, natural conversations through text or voice, powered by the most advanced AI technology. Whether you’re chatting with a customizable personality or exploring stunning image creation, our app has you covered.
          </p>
          <p className="mb-6">
            Voice Interaction allows for a seamless and engaging dialogue, as you can speak naturally to your AI companion. The advanced voice recognition and speech synthesis ensure that every interaction feels fresh and personal.
          </p>
          <p className="mb-6">
            Our customizable personas let you tailor your interactions. Choose from diverse personalities or create your own unique traits for an experience that mirrors your imagination.
          </p>
          <p>
            Wondering what's happening in the world? Our AI integrates web searches allowing you to stay informed about the latest news, trending topics or even summarize a website, all within the same interface. It’s like having an intelligent friend at your fingertips!
          </p>
          </div>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute mt-4 w-full text-center cursor-pointer animate-bounce z-10"
            >
          <ChevronUp className="mx-auto w-8 h-8" />
        </div>
      </div>
      {/* Download Section */}
      <div ref={downloadRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Download Now for Unlimited AI Chat and Image Creation
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.aichatbot.free"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
                target="_blank"
              >
                <Download className="w-6 h-6" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <a href="/privacy.html">Privacy Policy - How To Use</a>
      </div>
    </div>
  );
}

export default App;