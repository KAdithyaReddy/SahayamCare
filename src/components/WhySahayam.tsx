import React from 'react';
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';
import four from '../img/four.png';
import five from '../img/five.png';
import six from '../img/six.png';
import seven from '../img/seven.png';
import eight from '../img/eight.png';


import {
  Shield,
  Clock,
  Banknote,
  Award,
  Users,
  HeartHandshake,
} from 'lucide-react';

// Add this CSS inside your global CSS file (e.g., `index.css` or via <style> tag if needed)
// If you're using Tailwind and want to keep it inline, use tailwind-variants or extend utilities.
const styles = `
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: fit-content;
  animation: marquee 40s linear infinite;
}
`;

const WhySahayam: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Trained & Certified',
      description:
        'Rigorous training and background verification for highest care standards.',
      stats: '100% Verified',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock availability with emergency response protocols.',
      stats: '24/7 Available',
    },
    {
      icon: Banknote,
      title: 'Transparent Pricing',
      description: 'Simple subscription model with no hidden costs or surprise fees.',
      stats: '$20/month',
    },
    {
      icon: HeartHandshake,
      title: 'Cultural Understanding',
      description:
        'Deep respect for Indian traditions, customs, and family values.',
      stats: '100+ Families',
    },
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'Fully insured service with comprehensive safety protocols.',
      stats: '4.7 Star Rated',
    },
    {
      icon: Users,
      title: 'Family-Centered Care',
      description:
        'Regular communication with family members through video calls.',
      stats: 'Global Reach',
    },
  ];

  // Place this inside your WhySahayam component

const partners = [
  { name: 'Apollo Home Care', logo: one, category: 'Healthcare Partner' },
  { name: 'Brahmana Vantillu', logo: two, category: 'Dietary Food services' },
  { name: 'Homes Kitchen', logo: three, category: 'Food services' },
  { name: 'MallaReddy Nursing', logo: four, category: 'Healthcare' },
  { name: 'Driver', logo: five, category: 'Driver Services' },
  { name: 'Care taker', logo: six, category: 'Companionship Services' },
  { name: 'COOX', logo: seven, category: 'Cooking Services' },
  { name: 'Urban Company', logo: eight, category: 'Cleaning Services' }
];


  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <style>{styles}</style>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Sahayam?
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
            Your Parents Deserve the Best Care
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed">
            We understand the challenges of <span className="text-teal-600 font-semibold">caring for elderly parents while living abroad. </span>
            Sahayam bridges that gap with professional, compassionate care that feels like family.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 fade-up">
          {[
             ['100%', 'Verified Caregivers'],
           
            ['24/7', 'Support Available'],
            ['4.7', 'Average Rating'],
             ['100+', 'Happy Families'],
           
          ].map(([stat, label], i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 font-poppins mb-2">{stat}</div>
              <p className="text-gray-600 font-lato">{label}</p>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 fade-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold font-poppins text-gray-800 mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 font-lato leading-relaxed mb-2">
                  {feature.description}
                </p>
                <span className="inline-block text-xs font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded-full">
                  {feature.stats}
                </span>
              </div>
            );
          })}
        </div>

        {/* Rotating Partner Logos Section */}
        <div className="mb-16 fade-up">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Trusted Network
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold font-poppins text-gray-800 mb-4">
              Our Exclusive Partners
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato leading-relaxed">
              We collaborate with <span className="text-teal-600 font-semibold">leading healthcare providers</span> and <span className="text-teal-600 font-semibold">medical institutions</span> to ensure
              the highest quality care for your loved ones.
            </p>
          </div>

          <div className="overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl py-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

            {/* Marquee animation */}
            <div className="animate-marquee space-x-8 px-4">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-40 h-20 flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-800 font-poppins text-sm mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-teal-600 font-lato font-medium">
                      {partner.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {[
            {
              icon: Shield,
              title: 'Quality Assurance',
              text:
                'All partners are vetted for quality standards and service excellence to ensure premium care',
              bg: 'bg-blue-50',
              border: 'border-blue-100',
              iconBg: 'bg-blue-100',
              iconColor: 'text-blue-600',
            },
            {
              icon: HeartHandshake,
              title: 'Seamless Care',
              text:
                'Integrated services ensure smooth transitions and comprehensive healthcare coordination',
              bg: 'bg-green-50',
              border: 'border-green-100',
              iconBg: 'bg-green-100',
              iconColor: 'text-green-600',
            },
            {
              icon: Award,
              title: 'Trusted Network',
              text:
                'Access to premium healthcare facilities and specialized medical services when needed',
              bg: 'bg-amber-50',
              border: 'border-amber-100',
              iconBg: 'bg-amber-100',
              iconColor: 'text-amber-600',
            },
          ].map(({ icon: Icon, title, text, bg, border, iconBg, iconColor }, i) => (
            <div
              key={i}
              className={`text-center p-6 rounded-2xl ${bg} ${border} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`w-8 h-8 ${iconColor}`} />
              </div>
              <h4 className="font-semibold text-gray-800 font-poppins mb-3 text-lg">{title}</h4>
              <p className="text-gray-600 font-lato text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 lg:p-12 text-center fade-up">
          <h3 className="text-2xl lg:text-3xl font-bold text-white font-poppins mb-4">
            Peace of Mind for Your Family
          </h3>
          <p className="text-teal-100 font-lato text-lg mb-6 max-w-2xl mx-auto">
            Join hundreds of families who trust Sahayam for their elder care needs.
            Your parents' comfort and safety are our top priority.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#discovery-call');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
          >
            Start Your Care Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhySahayam;
