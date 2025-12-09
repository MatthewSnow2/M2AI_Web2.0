import React from 'react';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm';
import { CALENDLY_URL } from '../../constants';
import { Calendar, MapPin, Mail } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <Section id="contact" themeClass="bg-white/5 backdrop-blur-sm text-white">
      <div className="text-center mb-12">
        <span className="text-xs font-bold text-teal tracking-widest uppercase">
          Let's Connect
        </span>
        <h2 className="text-4xl md:text-5xl font-serif-italic mt-4 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ready to transform your business with AI? Get in touch and let's discuss
          how we can help automate your operations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
          <ContactForm />
        </div>

        {/* Info & Calendly */}
        <div className="flex flex-col gap-6">
          {/* Calendly CTA */}
          <div className="bg-teal/15 backdrop-blur-md rounded-2xl p-8 border border-teal/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white">Book a Discovery Call</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Schedule a free 30-minute consultation to discuss your AI needs
              and explore how we can help your business grow.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange hover:bg-orange-light text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/30"
            >
              <Calendar size={18} />
              Book a Demo Now
            </a>
          </div>

          {/* Location Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-white font-medium">Nashville, TN</p>
                  <p className="text-gray-400 text-sm">Serving businesses nationwide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-white font-medium">Get in Touch</p>
                  <p className="text-gray-400 text-sm">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
