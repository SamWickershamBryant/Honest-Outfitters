'use client';
import React, { useState, FormEvent } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      
      // Convert FormData to a format URLSearchParams can handle
      const formDataObj: Record<string, string> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value.toString();
      });
      
      await fetch("/contactform.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj).toString(),
      });
      
      // Success handling
      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      // Error handling
      setError('There was a problem submitting your form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#2c1810] text-center mb-8">
          Contact Us
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg text-[#2c1810] mb-6 text-center">
              Have any questions or interested in booking a hunt? We&apos;d love to hear from you!
            </p>
            
            {/* Success message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md text-center">
                {error}
              </div>
            )}
            
            {/* Contact Form */}
            <form 
              name="contact" 
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-[#2c1810] font-medium mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c1810]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#2c1810] font-medium mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c1810]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#2c1810] font-medium mb-2">
                  Message
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c1810]"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-[#e67e22] hover:bg-[#d35400] text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-[#2c1810] mb-4 text-center">
                Other Ways to Reach Us
              </h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
                <a 
                  href="tel:+15128101310" 
                  className="flex flex-col items-center text-[#2c1810] hover:text-[#e67e22] transition-colors"
                >
                  <span className="text-3xl mb-2">📞</span>
                  <span className="font-medium">Call Us</span>
                  <span>(512) 810-1310</span>
                </a>
                <a 
                  href="mailto:honestoutfittersllc@gmail.com" 
                  className="flex flex-col items-center text-[#2c1810] hover:text-[#e67e22] transition-colors"
                >
                  <span className="text-3xl mb-2">✉️</span>
                  <span className="font-medium">Email Us</span>
                  <span>honestoutfittersllc@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 