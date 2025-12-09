import React, { useState } from 'react';
import { Modal } from './Modal';
import { CheckCircle } from 'lucide-react';
import {
  INDUSTRY_OPTIONS,
  COMPANY_SIZE_OPTIONS,
  AI_USAGE_OPTIONS,
  CHALLENGE_OPTIONS,
  BUDGET_OPTIONS
} from '../constants';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
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
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setError(null);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Self-Serve AI Audit">
      {isSuccess ? (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
          <p className="text-gray-400">
            We've received your audit request and will be in touch soon.
          </p>
        </div>
      ) : (
        <form
          name="ai-audit"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="ai-audit" />

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-teal text-sm font-medium mb-1">
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              className="form-input"
              placeholder="Your company name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-teal text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              placeholder="you@company.com"
            />
          </div>

          {/* Industry */}
          <div>
            <label htmlFor="industry" className="block text-teal text-sm font-medium mb-1">
              Industry *
            </label>
            <select
              id="industry"
              name="industry"
              required
              className="form-input"
            >
              <option value="">Select your industry</option>
              {INDUSTRY_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Company Size */}
          <div>
            <label htmlFor="companySize" className="block text-teal text-sm font-medium mb-1">
              Company Size *
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              className="form-input"
            >
              <option value="">Select company size</option>
              {COMPANY_SIZE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Current AI Usage */}
          <div>
            <label className="block text-teal text-sm font-medium mb-2">
              Current AI Usage *
            </label>
            <div className="space-y-2">
              {AI_USAGE_OPTIONS.map(opt => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="currentAIUsage"
                    value={opt.value}
                    required
                    className="w-4 h-4 accent-teal"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Primary Challenge */}
          <div>
            <label className="block text-teal text-sm font-medium mb-2">
              Primary Business Challenge *
            </label>
            <div className="space-y-2">
              {CHALLENGE_OPTIONS.map(opt => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="primaryChallenge"
                    value={opt.value}
                    required
                    className="w-4 h-4 accent-teal"
                  />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget Range (Optional) */}
          <div>
            <label htmlFor="budgetRange" className="block text-teal text-sm font-medium mb-1">
              Monthly AI Budget Range
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              className="form-input"
            >
              <option value="">Select budget range (optional)</option>
              {BUDGET_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-orange hover:bg-orange-light text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Audit Request'}
          </button>
        </form>
      )}
    </Modal>
  );
};

export default AuditModal;
