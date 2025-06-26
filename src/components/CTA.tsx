import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello! I\'m interested in Sahayam elder care services. Can you please provide more information?');
    window.open(`https://wa.me/918328635419?text=${message}`, '_blank');
  };

  const callNow = () => {
    window.location.href = 'tel:+918328635419';
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-600 via-teal-700 to-blue-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-white font-poppins mb-6">
            Ready to Give Your Parents the Care They Deserve?
          </h2>
          <p className="text-xl text-teal-100 font-lato mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't wait another day worrying about your parents' wellbeing. Start their care journey with Sahayam today 
            and experience the peace of mind you've been looking for.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
           <button
  onClick={() => {
    window.open(
      'https://calendar.app.google/1GGuUTziG3ht8fR6A',
      '_blank'
    );
  }}
  className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-semibold flex items-center group"
>
  Schedule Free Call
  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
</button>

            <button
              onClick={openWhatsApp}
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-semibold flex items-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
            <button
              onClick={callNow}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-200 font-semibold flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white font-poppins">100+</div>
              <p className="text-teal-100 font-lato text-sm">Families Trust Us</p>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white font-poppins">24/7</div>
              <p className="text-teal-100 font-lato text-sm">Care Available</p>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white font-poppins">4.7★</div>
              <p className="text-teal-100 font-lato text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white font-poppins">$20</div>
              <p className="text-teal-100 font-lato text-sm">Simple Pricing</p>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-white font-lato text-lg">
              <strong>Limited Availability:</strong> We only accept 20 new families per month to ensure 
              quality care. Book your consultation today to secure your spot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;