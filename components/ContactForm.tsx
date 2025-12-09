import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300 mb-4">
          Thank you for reaching out. We'll get back to you soon.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-teal hover:text-teal-light transition-colors underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-gray-300 text-sm font-medium mb-1">
          Name *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 backdrop-blur-sm"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-gray-300 text-sm font-medium mb-1">
          Email *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 backdrop-blur-sm"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-gray-300 text-sm font-medium mb-1">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 resize-none backdrop-blur-sm"
          placeholder="How can we help you?"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-300 text-sm bg-red-900/30 border border-red-500/30 p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-teal hover:bg-teal-light text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal/30"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
