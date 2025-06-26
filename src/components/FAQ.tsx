import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the $25/month subscription work?',
      answer: 'Our simple subscription model gives you access to all our elder care services for just $25 per month. This includes 24/7 companionship, healthcare monitoring, grooming assistance, meal preparation, cleaning services, and regular family updates. There are no hidden costs or additional charges. You can cancel anytime without penalties.'
    },
    {
      question: 'What qualifications do your caregivers have?',
      answer: 'All our caregivers are professionally trained and undergo rigorous background verification. They are certified in basic healthcare, CPR, and elderly care protocols. We ensure cultural sensitivity training and regular skill updates. Each caregiver is matched based on your parent\'s specific needs and personality compatibility.'
    },
    {
      question: 'How do you ensure my parent\'s safety and security?',
      answer: 'Safety is our top priority. We have 24/7 monitoring systems, emergency response protocols, and regular check-ins. All caregivers carry emergency contact information and are trained in first aid. We also provide family members with regular updates and have a direct communication channel for any concerns.'
    },
    {
      question: 'Can I customize the care plan for my parent\'s specific needs?',
      answer: 'Absolutely! Every care plan is tailored to individual needs. We conduct a comprehensive assessment and create a personalized care routine. Whether your parent needs specialized medical attention, dietary requirements, cultural preferences, or specific daily routines, we adapt our services accordingly.'
    },
    {
      question: 'How do I stay updated about my parent\'s wellbeing while living abroad?',
      answer: 'We provide regular communication through video calls, daily text updates, and weekly detailed reports. Our caregivers document daily activities, health observations, and any concerns. You\'ll receive photos, videos, and can schedule calls with both your parent and the caregiver at convenient times across time zones.'
    },
    {
      question: 'What happens in case of medical emergencies?',
      answer: 'We have established protocols for medical emergencies. Our caregivers are trained to handle urgent situations and have direct contacts with local hospitals and doctors. We immediately notify family members and coordinate with healthcare providers. All medical information is maintained and easily accessible during emergencies.'
    },
    {
      question: 'Is there a trial period or contract commitment?',
      answer: 'We offer a 7-day trial period for new families to ensure our services meet your expectations. There are no long-term contracts required - you can cancel your subscription anytime with just 30 days notice. Our goal is to earn your trust through quality service, not binding contracts.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-up">
            <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato leading-relaxed">
              Got questions about our elder care services? We've got answers. If you don't find what you're 
              looking for, feel free to contact us directly.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 fade-up">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  aria-expanded={openFAQ === index}
                >
                  <h3 className="text-lg font-semibold text-gray-800 font-poppins pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-600 font-lato leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 fade-up">
            <p className="text-gray-600 font-lato mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
  onClick={() => {
    window.open(
      'https://calendar.app.google/1GGuUTziG3ht8fR6A',
      '_blank'
    );
  }}
  className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
>
  Schedule a Call
</button>

              <button
                onClick={() => {
                  const message = encodeURIComponent('Hi! I have some questions about Sahayam elder care services. Can you help me?');
                  window.open(`https://wa.me/918328635419?text=${message}`, '_blank');
                }}
                className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;