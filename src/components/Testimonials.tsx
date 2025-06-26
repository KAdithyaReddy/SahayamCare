import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'London, UK',
      rating: 5,
      image: 'https://images.pexels.com/photos/8088174/pexels-photo-8088174.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'Sahayam has been a blessing for our family. Living in London, I was constantly worried about my mother in Hyderabad. The team provides exceptional care and sends regular updates. My mother loves her caregiver and feels comfortable and safe.',
      service: 'Companionship & Healthcare'
    },
    {
      name: 'Rahul Gupta',
      location: 'California, USA',
      rating: 5,
      image: 'https://images.pexels.com/photos/8088185/pexels-photo-8088185.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'The professionalism and compassion of Sahayam caregivers is outstanding. They treat my father with such respect and dignity. The transparent pricing and 24/7 support give me complete peace of mind while working in the US.',
      service: 'Full Care Package'
    },
    {
      name: 'Anita Reddy',
      location: 'Dubai, UAE',
      rating: 5,
      image: 'https://images.pexels.com/photos/8088178/pexels-photo-8088178.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      text: 'I cannot thank Sahayam enough for the wonderful care they provide to my parents. The customized meal plans, regular health monitoring, and emotional support make all the difference. Highly recommended for NRI families.',
      service: 'Dietary & Health Monitoring'
    }
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-up">
          <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-800 mb-6">
            What Families Say About Sahayam
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato leading-relaxed">
            Read genuine experiences from families across the globe who trust Sahayam 
            for their elder care needs in Hyderabad.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto fade-up">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-white p-8 lg:p-12"
                >
                  <div className="text-center">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Quote className="w-8 h-8 text-teal-600" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-amber-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg lg:text-xl text-gray-700 font-lato leading-relaxed mb-8 max-w-3xl mx-auto">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Profile */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-800 font-poppins">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 font-lato text-sm">
                          {testimonial.location}
                        </p>
                        <p className="text-teal-600 font-lato text-sm font-medium">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-teal-600 font-poppins">4.7/5</div>
              <p className="text-gray-600 font-lato text-sm">Average Rating</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600 font-poppins">100+</div>
              <p className="text-gray-600 font-lato text-sm">Happy Families</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600 font-poppins">24/7</div>
              <p className="text-gray-600 font-lato text-sm">Support</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600 font-poppins">100%</div>
              <p className="text-gray-600 font-lato text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;