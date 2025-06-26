import React from 'react';
import {
  Users,
  Sparkles,
  Heart,
  Utensils,
  Home,
  Settings,
} from 'lucide-react';

// local images (file names can’t start with a number, so use img2 … img7)
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string[];
  image: string;
}

const services: Service[] = [
  {
    icon: Users,
    title: 'Companionship (24/7)',
    description: [
      '24/7 emotional support and friendly companionship.',
      'Assistance with activities and hobbies.',
      'Encouragement for social interactions.'
    ],
    image: img2,
  },
  {
    icon: Sparkles,
    title: 'Grooming & Personal Care',
    description: [
      'Help with dressing, bathing, and grooming.',
      'Support for personal hygiene routines.',
      'Promotes safety and independence.'
    ],
    image: img3,
  },
  {
    icon: Heart,
    title: 'Healthcare Services',
    description: [
      'Medical monitoring and vital checks.',
      'Medication reminders and appointments.',
      'Coordination with healthcare providers.'
    ],
    image: img4,
  },
  {
    icon: Utensils,
    title: 'Dietary Meals & Nutrition',
    description: [
      'Healthy meals for dietary needs.',
      'Support with different foods.',
      'Meal plans for specific conditions.'
    ],
    image: img5,
  },
  {
    icon: Home,
    title: 'Cleaning Services',
    description: [
      'Housekeeping and laundry support.',
      'Organizing and sanitizing spaces.',
      'Help with daily chores.'
    ],
    image: img6,
  },
  {
    icon: Settings,
    title: 'Customized Services',
    description: [
      'Tailored care plans and flexible schedules.',
      'Special support for dementia or mobility.',
      'Ongoing assessment and updates.'
    ],
    image: img7,
  },
];


const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* section header */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
            Comprehensive Elder Care Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed">
            We provide a complete range of professional elder-care services
            designed to ensure your loved ones receive the highest quality
            care, comfort and companionship in the familiar surroundings of
            their home.
          </p>
        </div>

        {/* services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                </div>

                {/* content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold font-poppins text-gray-800 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <ul className="text-gray-600 font-lato leading-relaxed list-disc list-inside space-y-1">
                    {service.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* call-to-action */}
        <div className="text-center mt-12 fade-up">
          <p className="text-gray-600 mb-6 font-lato">
            Need a custom care plan? We&apos;re here to help.
          </p>
      <button
  onClick={() => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdcK41TbORsBnTG0WMKr9wNv-V3kOpLgwZDjsD2oouBcZc_Xw/viewform?usp=header',
      '_blank'
    );
  }}
  className="bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
>
  Request Custom Care Plan
</button>



        </div>
      </div>
    </section>
  );
};

export default Services;
