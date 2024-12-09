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
    // Preload the image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/assets/1-5Y_e1NJV.jpg'; // Path to your image
    link.as = 'image';
    document.head.appendChild(link);
    
    // Cleanup when component unmounts
    return () => document.head.removeChild(link);
  }, []);

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
              {/* Product Hunt Embed */}
              <div className="mt-4 animate-fade-in mb-5 sm:mb-0">
                <a 
                  href="https://www.producthunt.com/posts/free-ai-chatbot-image-generator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-free&#0045;ai&#0045;chatbot&#0045;image&#0045;generator" 
                  target="_blank"
                >
                  <img 
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=668996&theme=dark" 
                    alt="Free&#0032;AI&#0032;Chatbot&#0032;&#0038;&#0032;Image&#0032;Generator - Unlimited&#0032;AI&#0032;chat&#0032;and&#0032;image&#0032;generation | Product Hunt" 
                    className="w-[250px] h-[54px] mx-auto sm:mx-0" 
                  />
                </a>
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
      <div className="py-10">
      <div className="container mx-auto px-6 py-4 md:px-8 lg:px-12 max-w-5xl text-gray-300 text-center">
        <div className="text-xl md:text-2xl font-medium mb-2">
        Discover the ultimate free AI chatbot and image generator app - all for free! No sign-up, no advertisements, just pure creative freedom. Enjoy endless conversations and high-quality image generation anytime, anywhere!
          </div>
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
<div className="py-10">
  <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-gray-300 overflow-hidden">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-2lg">
      <p className="mb-6 p-6 bg-gray-900 rounded-lg">
        Imagine having a personal AI image creator and chatbot at your fingertips. Engage in seamless, natural conversations through text or voice, powered by advanced AI technology. Whether you’re chatting with a custom personality or exploring stunning image creation, our app has you covered.
      </p>
      <p className="mb-6 p-6 bg-gray-900 rounded-lg">
        Wondering what's happening in the world? Our AI integrates web searches, allowing you to stay informed about the latest news, trending topics, or even summarize a website—all within the same interface. It’s like having an intelligent friend at your fingertips.
      </p>
      <p className="mb-6 p-6 bg-gray-900 rounded-lg">
        Our customizable personas let you tailor your interactions. Choose from diverse personalities, mix different ones or create your own unique traits for an experience that mirrors your imagination.
      </p>
        <p className="mb-6 p-6 bg-gray-900 rounded-lg">
        Voice Interaction allows for a seamless and engaging dialogue, as you can speak naturally to your AI companion. The advanced voice recognition and speech synthesis ensure that every interaction feels fresh and personal.
      </p>
    </div>
  </div>
  </div> 
  {/* Chevron for Scrolling */}
  <div className="w-full text-center z-10 overflow-hidden">
    <ChevronUp
      className="mx-auto w-8 h-8 text-white cursor-pointer animate-bounce"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    />
</div>
      {/* Download Section */}
      <div ref={downloadRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-3xl text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Install Now for Unlimited AI Chat and Image Creation
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.aichatbot.free&utm_source=website&utm_medium=referral"
                className="flex items-center justify-center gap-5 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
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