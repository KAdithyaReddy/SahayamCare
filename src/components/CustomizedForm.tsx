import React, { useState } from 'react';
import { Send, CheckCircle, User, Phone, Mail, FileText } from 'lucide-react';

const CustomizedForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    parentName: '',
    parentAge: '',
    currentCondition: '',
    specificNeeds: '',
    additionalServices: '',
    urgency: 'normal',
    preferredStartDate: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Create detailed email body
      const emailBody = encodeURIComponent(`
CUSTOMIZED CARE REQUEST

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Parent Information:
- Parent's Name: ${formData.parentName}
- Age: ${formData.parentAge}
- Current Health Condition: ${formData.currentCondition}

Care Requirements:
- Specific Needs: ${formData.specificNeeds}
- Additional Services: ${formData.additionalServices}
- Urgency Level: ${formData.urgency}
- Preferred Start Date: ${formData.preferredStartDate}

Special Requests:
${formData.specialRequests}

Please contact me to discuss a customized care plan.
      `);

      // Send email
      window.open(`mailto:sahayamcare@gmail.com?subject=Customized Care Request - ${formData.name}&body=${emailBody}`);

      // Also create WhatsApp message
      const whatsappMessage = encodeURIComponent(`
Hello Sahayam Team,

I'm interested in customized elder care services for my parent.

Contact: ${formData.name}
Phone: ${formData.phone}
Parent: ${formData.parentName} (Age: ${formData.parentAge})

Specific needs: ${formData.specificNeeds}

Please contact me to discuss a customized care plan.
      `);

      // Open WhatsApp (will work on mobile, fallback on desktop)
      setTimeout(() => {
        window.open(`https://wa.me/918328635419?text=${whatsappMessage}`, '_blank');
      }, 1000);

      // Reset form after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          parentName: '',
          parentAge: '',
          currentCondition: '',
          specificNeeds: '',
          additionalServices: '',
          urgency: 'normal',
          preferredStartDate: '',
          specialRequests: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="customized-form" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 fade-up">
            <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Customized Care
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
              Need Something Specific? We're Here to Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato leading-relaxed">
              Every family's needs are unique. Tell us about your specific requirements, 
              and we'll create a personalized care plan tailored for your loved one.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 fade-up">
            {showSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-poppins">
                  Request Submitted Successfully!
                </h3>
                <p className="text-gray-600 font-lato mb-6 max-w-md mx-auto">
                  We've received your customized care request. Our team will contact you within 24 hours 
                  to discuss your specific needs and create a personalized care plan.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ Email notification sent to our care team</p>
                  <p>✓ WhatsApp message being prepared</p>
                  <p>✓ Expected response within 24 hours</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold font-poppins text-gray-800 mb-2">
                    Customized Care Request Form
                  </h3>
                  <p className="text-gray-600 font-lato">
                    Please provide detailed information so we can create the perfect care plan.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="border-l-4 border-teal-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-teal-600" />
                    Your Contact Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent Information */}
                <div className="border-l-4 border-amber-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-amber-500" />
                    Parent Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                        Parent's Name *
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Parent's full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentAge" className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <input
                        type="number"
                        id="parentAge"
                        name="parentAge"
                        value={formData.parentAge}
                        onChange={handleInputChange}
                        required
                        min="50"
                        max="120"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        placeholder="Age"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="currentCondition" className="block text-sm font-medium text-gray-700 mb-2">
                        Current Health Condition *
                      </label>
                      <textarea
                        id="currentCondition"
                        name="currentCondition"
                        value={formData.currentCondition}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Describe current health status, mobility level, any medical conditions, medications..."
                      />
                    </div>
                  </div>
                </div>

                {/* Care Requirements */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-blue-500" />
                    Care Requirements
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="specificNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Care Needs *
                      </label>
                      <textarea
                        id="specificNeeds"
                        name="specificNeeds"
                        value={formData.specificNeeds}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                        placeholder="What specific care does your parent need? (e.g., help with bathing, medication reminders, physical therapy, special diet, etc.)"
                      />
                    </div>
                    <div>
                      <label htmlFor="additionalServices" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Services Needed
                      </label>
                      <textarea
                        id="additionalServices"
                        name="additionalServices"
                        value={formData.additionalServices}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Any additional services beyond our standard offering? (e.g., pet care, garden maintenance, tech support, etc.)"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                          Urgency Level *
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        >
                          <option value="normal">Normal (Within 1-2 weeks)</option>
                          <option value="urgent">Urgent (Within 2-3 days)</option>
                          <option value="emergency">Emergency (Within 24 hours)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="preferredStartDate" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Start Date
                        </label>
                        <input
                          type="date"
                          id="preferredStartDate"
                          name="preferredStartDate"
                          value={formData.preferredStartDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Questions
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Any specific preferences, cultural considerations, or questions you'd like to discuss..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-teal-600 text-white px-12 py-4 rounded-xl hover:bg-teal-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Customized Care Request
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    We'll respond within 24 hours with a detailed care plan and pricing.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedForm;