import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const AboutStory: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-up">
            <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
              Why We Started Sahayam
            </h2>
            <p className="text-lg text-gray-600 font-lato leading-relaxed">
              A personal journey that became our mission to transform elder care
            </p>
          </div>

          {/* Story Content */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg fade-up">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 font-lato leading-relaxed space-y-6">
                <p className="text-xl text-gray-800 font-medium">
                  In 2021, everything changed for our family.
                </p>
                
                <p>
                  Like many Indian families living abroad, we stayed closely connected to our grandparents 
                  back home in Hyderabad. They were retired government officials, financially stable, and 
                  lived with dignity. We arranged full-time caregivers through different agencies, paying 
                  ₹25,000 each per month, switching agencies to find the best possible help.
                </p>

                <p>
                  <strong>It seemed like the problem was solved. But the truth is — it wasn't.</strong>
                </p>

                <p>
                  As we got busy with our own lives, the reality inside that house started falling apart. 
                  The caregivers started mistreating our grandfather — forcing him to eat, forcing him to 
                  shower, speaking without respect. This wasn't care — it was control.
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                  <p className="text-red-800 font-medium">
                    Then came the real tragedy. Due to mishandling, our grandmother suffered a serious 
                    leg and hip injury. What began as a small accident became much worse. She eventually 
                    slipped into a coma and we lost her — not because of fate, but because of carelessness.
                  </p>
                </div>

                <p>
                  It took us months to process what had happened and ask ourselves: 
                  <em>How did this happen even when we could afford help?</em>
                </p>

                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 my-8">
                  <p className="text-teal-800 font-medium">
                    That's when we realized the real problem: Hiring a caregiver is not enough. 
                    The system is broken. There's no trust, no proper training, no accountability, 
                    and most of all — no empathy.
                  </p>
                </div>

                <p className="text-xl text-gray-800 font-semibold">
                  So we decided to do something about it.
                </p>

                <p className="text-lg text-teal-700 font-medium">
                  That's how Sahayam started — not just a business, but a promise from two grandchildren 
                  who never want another family to go through what we did.
                </p>
              </div>
            </div>
          </div>

          {/* Our Promise */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 fade-up">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">
                Empathy First
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Every caregiver is trained to treat your parents with the same love and respect 
                they would want for their own family.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">
                Complete Accountability
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                Regular monitoring, family updates, and transparent communication ensure 
                the highest standards of care at all times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-gray-800 mb-2">
                Family Connection
              </h3>
              <p className="text-gray-600 font-lato text-sm">
                We bridge the distance between you and your parents with regular updates, 
                video calls, and constant communication.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 fade-up">
            <p className="text-gray-600 font-lato mb-6">
              Let us give your parents the care they deserve, and give you the peace of mind you need.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#discovery-call');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              Start Your Care Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;