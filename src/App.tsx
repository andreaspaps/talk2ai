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

// Image imports - assuming these exist in your project structure
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';

interface SliderImage {
  src: string;
  alt: string;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const sliderImages: SliderImage[] = [
  { src: image1, alt: "Stunning AI Art Creation App Screenshot" },
  { src: image2, alt: "AI Chat Conversation App Screenshot" },
  { src: image3, alt: "User-Friendly Interface App Screenshot" },
  { src: image4, alt: "Voice Interaction Demo App Screenshot" },
  { src: image5, alt: "Top News Web Search App Screenshot" }
];

const features: Feature[] = [
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
  }
];

const App: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-teal-900/30" />
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left lg:pl-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-fade-in">
                Free AI Chatbot & Image Generator
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl animate-fade-in mx-auto lg:mx-0">
                Unlimited AI chat with voice conversations and high quality image generation - No Sign-Up, No ads!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in">
                <button
                  onClick={() => scrollToSection(downloadRef)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/25"
                >
                  Download Now
                </button>
                <button
                  onClick={() => scrollToSection(featuresRef)}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
              {/* Social Proof */}
              <div className="space-y-4 animate-fade-in">
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://www.producthunt.com/posts/free-ai-chatbot-image-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=668996&theme=dark"
                      alt="Free AI Chatbot and Image Generator - Product Hunt"
                      className="w-[250px] h-[54px]"
                    />
                  </a>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="https://www.buymeacoffee.com/freeaichat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
                      alt="Buy Me A Coffee"
                      className="h-[60px] w-[217px]"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Phone Frame with Slider */}
            <div className="flex-1 flex justify-center items-center animate-fade-in lg:pr-4">
              <div className="relative w-[320px] h-[640px] rounded-[3rem] bg-gray-800 p-4 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-white">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {sliderImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover flex-shrink-0"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute mt-4 bottom-8 w-full text-center animate-bounce">
          <ChevronDown className="mx-auto w-8 h-8" />
        </div>
      </section>

      {/* App Description */}
      <section className="py-10">
        <div className="container mx-auto px-6 py-4 md:px-8 lg:px-12 max-w-5xl text-gray-300 text-center">
          <p className="text-xl md:text-2xl font-medium">
            Discover the ultimate free AI chatbot and image generator app - all for free! No sign-up, no advertisements, just pure creative freedom. Enjoy endless conversations and high-quality image generation anytime, anywhere!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section ref={downloadRef} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-3xl text-center">
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Install Now for Unlimited AI Chat and Image Creation
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.aichatbot.free&utm_source=website&utm_medium=referral"
                className="flex items-center justify-center gap-5 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-6 h-6" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <nav className="space-x-6">
            <a href="/top-10-free-ai-image-generation-apps.html" className="text-gray-400 hover:text-white transition-colors">
              Top Free Image Generator Apps
            </a>
            <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy - How To Use
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;