import React from 'react';
import { Video } from 'lucide-react';

const DiscoveryCall: React.FC = () => {
  return (
    <section id="discovery-call" className="py-16 lg:py-24 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
            Schedule a Free Discovery Call
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-lato leading-relaxed">
            Click below to book your free discovery call and share your details with us through our form.
          </p>
          <a
            href="https://calendar.app.google/1GGuUTziG3ht8fR6A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-teal-600 text-white py-4 px-6 rounded-xl hover:bg-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
          >
            <Video className="w-5 h-5 mr-2" />
            Schedule Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCall;
