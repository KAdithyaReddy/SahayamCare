import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    '24/7 Companionship & Emotional Support',
    'Personal Grooming & Hygiene Care',
    'Healthcare Monitoring & Medication Management',
    'Nutritious Meal Planning & Preparation',
    'House Cleaning & Maintenance',
    'Regular Family Updates & Video Calls',
    'Emergency Response & Medical Escort',
    'Customized Care Plans',
    'Cultural & Religious Respect',
    'Professional Trained Caregivers'
  ];

  const plans = [
    {
      title: 'Monthly Plan',
      price: '$20',
      cycle: '/month'
    },
    {
      title: 'Quarterly Plan',
      price: '$60',
      cycle: '/quarter'
    },
    {
      title: 'Half-Yearly Plan',
      price: '$120',
      cycle: '/half-year'
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
            Flexible Plans, All Services Included
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-lato leading-relaxed">
            No hidden costs, no complicated packages. Choose a plan that suits you and access all our professional elder care services with complete transparency.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3 fade-up">
          {plans.map((plan, idx) => (
            <div key={idx} className="relative bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-6 lg:p-8 shadow-xl">
              {idx === 0 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center text-white mb-4">
                <h3 className="text-lg font-bold font-poppins mb-1">{plan.title}</h3>
                <p className="text-teal-100 font-lato text-sm">Everything your parents need, in one simple plan</p>
              </div>

              <div className="text-center mb-5">
                <div className="flex items-center justify-center">
                  <span className="text-3xl lg:text-4xl font-bold text-white font-poppins">{plan.price}</span>
                  <span className="text-teal-200 font-lato ml-1 text-sm">{plan.cycle}</span>
                </div>
                <p className="text-teal-100 font-lato text-xs mt-1">Billed accordingly, cancel anytime</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-5">
                <h4 className="text-sm font-semibold text-white font-poppins mb-2">What's Included:</h4>
                <div className="grid gap-1">
                  {features.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-start space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white font-lato text-xs">{feature}</span>
                    </div>
                  ))}
                  <span className="text-teal-100 text-xs italic">+ more features</span>
                </div>
              </div>

              <button
                onClick={() => {
                  window.open(
                    'https://docs.google.com/forms/d/e/1FAIpQLSdcK41TbORsBnTG0WMKr9wNv-V3kOpLgwZDjsD2oouBcZc_Xw/viewform?usp=header',
                    '_blank'
                  );
                }}
                className="w-full bg-white text-teal-600 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 font-semibold font-poppins text-sm flex items-center justify-center group"
              >
                Start Your Care Plan Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-teal-100 font-lato text-xs mt-2">
                No setup fees • No long-term contracts • Cancel anytime
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center fade-up">
          <div className="bg-gray-50 rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold font-poppins text-gray-800 mb-6">
              Why Our Pricing is Transparent
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-teal-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 font-poppins text-sm">No Hidden Costs</h4>
                <p className="text-gray-600 font-lato text-xs">
                  Everything is included in your subscription. No surprise charges or additional fees.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-teal-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 font-poppins text-sm">Flexible Plans</h4>
                <p className="text-gray-600 font-lato text-xs">
                  Scale services up or down based on your parent's changing needs without penalties.
                </p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-teal-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1 font-poppins text-sm">Value Guarantee</h4>
                <p className="text-gray-600 font-lato text-xs">
                  If you're not completely satisfied, we'll make it right or refund your subscription.
                </p>
              </div>
            </div>

            <div className="mt-6 p-3 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-amber-800 font-lato text-center text-sm">
                <strong>Special Offer:</strong> First Subscription is 50% off for new subscribers. Start your care plan today for just $10!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
