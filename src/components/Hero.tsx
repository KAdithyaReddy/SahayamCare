import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

/* local hero image */
import img1 from '../img/1.jpg';     // adjust the path if the file lives elsewhere

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ─────────── Left content ─────────── */}
          <div className="fade-up">
            <div className="mb-6">
              <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Trusted Elder Care in Hyderabad
              </span>

              <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-gray-800 leading-tight mb-6">
                Caring Hands for
                <span className="text-teal-600"> Ageing Hearts</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 font-lato leading-relaxed">
                Professional elder-care services for families living abroad. We
                provide compassionate, 24/7 care for your loved ones in
                Hyderabad while you&apos;re away, giving you peace of mind and
                ensuring their dignity and comfort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
  onClick={() => window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLSdcK41TbORsBnTG0WMKr9wNv-V3kOpLgwZDjsD2oouBcZc_Xw/viewform?usp=header',
    '_blank'
  )}
  className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium flex items-center justify-center group"
>
  Schedule Free Consultation
  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</button>


              <button
                onClick={() => scrollToSection('#services')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-teal-600 hover:text-teal-600 transition-all duration-200 font-medium flex items-center justify-center group"
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                <span>Trained Caregivers</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                <span>Trusted by 100+ Families</span>
              </div>
            </div>
          </div>

          {/* ─────────── Right content (hero image) ─────────── */}
          <div className="fade-up lg:fade-up-delay">
            <div className="relative">
              <img
                src={img1}
                alt="Caring professional providing elder care support"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

              {/* Floating rating card */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4.7</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Excellent Care
                    </p>
                    <p className="text-sm text-gray-600">100+ happy families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full -mr-32 -mt-32 opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-100 rounded-full -ml-24 -mb-24 opacity-50" />
    </section>
  );
};

export default Hero;