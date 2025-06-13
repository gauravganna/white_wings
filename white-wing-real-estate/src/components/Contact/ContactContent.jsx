import React, { useState } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants/site-data';

const ContactContent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formData = new FormData(e.target);
    
    // Debug: Log form data
    console.log('=== FORM SUBMISSION DEBUG ===');
    console.log('Target email:', CONTACT_INFO.email);
    console.log('FormSubmit URL:', `https://formsubmit.co/${CONTACT_INFO.email}`);
    console.log('Form data entries:');
    for (let [key, value] of formData.entries()) {
      console.log(`  ${key}: ${value}`);
    }
    
    try {
      const response = await fetch(`https://formsubmit.co/${CONTACT_INFO.email}`, {
        method: 'POST',
        body: formData
      });

      // Debug: Log response details
      console.log('Response status:', response.status);
      console.log('Response statusText:', response.statusText);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      // Try to get response text
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok) {
        console.log('✅ Form submitted successfully');
        setSubmitStatus('success');
        e.target.reset();
      } else {
        console.log('❌ Form submission failed');
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      console.log('=== END FORM SUBMISSION DEBUG ===');
    }
  };

  return (
    <div className="relative z-10 md:min-h-screen flex items-center justify-center">
      {/* Main Container with specified margins */}
      <div className="w-full max-w-screen-xl mx-auto my-2 mx-10 md:my-28 md:mx-40">
        {/* Two Horizontal Containers - 48-52 split with gap-2, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-2 h-auto">
          
          {/* Left Container - 48% width - Split into two containers */}
          <div className="w-full md:w-[48%] h-auto">
            <div className="flex flex-col gap-2 h-[600px]">
              
              {/* Top Left Container - Contact Card */}
              <div className="md:h-[60%]">
                <div className="bg-[#F5F6F7] rounded-lg h-full" style={{ padding: '64px 60px' }}>
                  {/* Contact Card Content - Flexible Layout */}
                  <div className="flex flex-wrap gap-6 h-full">
                    
                    {/* Connect with Title */}
                    <div className="w-full">
                      <h2 className="text-[#091E42] font-inter font-semibold text-lg leading-tight tracking-tight">
                        Connect with
                      </h2>
                    </div>
                    
                    {/* Email Section */}
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[#091E42] font-inter font-normal text-sm leading-tight">
                        E-mail
                      </h3>
                      <p className="text-[#091E42] font-inter font-medium text-sm leading-tight opacity-80">
                        {CONTACT_INFO.email}
                      </p>
                    </div>
                    
                    {/* Phone Section */}
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[#091E42] font-inter font-normal text-sm leading-tight">
                        Phone
                      </h3>
                      <p className="text-[#091E42] font-inter font-medium text-sm leading-tight opacity-80">
                        {CONTACT_INFO.phone}
                      </p>
                    </div>
                    
                    {/* Office Address Section */}
                    <div className="flex flex-col gap-0.5 w-full max-w-[359px]">
                      <h3 className="text-[#091E42] font-inter font-normal text-sm leading-tight">
                        Office Address
                      </h3>
                      <p className="text-[#091E42] font-inter font-medium text-sm leading-relaxed opacity-80">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                    
                    {/* Social Media Section */}
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[#091E42] font-inter font-normal text-sm leading-tight">
                        Social media
                      </h3>
                      <div className="flex gap-3.5 mt-1">
                        {/* Instagram Icon */}
                        <a 
                          href={SOCIAL_LINKS.Instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-[18px] h-[18px] bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#091E42" strokeWidth="1.5"/>
                          </svg>
                        </a>
                        
                        {/* Twitter Icon */}
                        <a 
                          href={SOCIAL_LINKS.Twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-[18px] h-[18px] bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <svg width="16.5" height="13.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#091E42" strokeWidth="1.5"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              
              {/* Bottom Left Container - Google Maps */}
              <div className="h-[40%]">
                <div className="bg-[#F5F6F7] rounded-lg h-full overflow-hidden relative">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed&z=16`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="White Wing Group Office Location"
                  ></iframe>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Right Container - Contact Form */}
          <div className="w-full md:w-[52%] h-auto">
            <div className="bg-[#F5F6F7] rounded-lg md:h-[600px] overflow-hidden px-6 py-8 md:px-[60px] md:py-[60px]" >
              {/* Form Content */}
              <div className="flex flex-col gap-6 h-full">
                
                {/* Form Title */}
                <div>
                  <h2 className="text-[#091E42] font-inter font-semibold text-lg leading-tight tracking-tight w-[277px]">
                    Send Us a Message
                  </h2>
                </div>
                
                {/* Form Fields Container */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                  
                  {/* Name and Surname Row */}
                  <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                    {/* Name Field */}
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-black font-inter font-medium text-sm leading-tight">
                        Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder="Piyush"
                          required
                          className="w-full px-4 py-2 bg-white border border-[#7A8699] rounded-lg text-black placeholder-black/50 text-sm font-inter font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          style={{ height: '33px' }}
                        />
                      </div>
                    </div>
                    
                    {/* Surname Field */}
                    <div className="flex flex-col gap-2 flex-1 md:w-[196px] md:flex-initial">
                      <label className="text-black font-inter font-medium text-sm leading-tight">
                        Surname
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="surname"
                          placeholder="Suthar"
                          required
                          className="w-full px-4 py-2 bg-white border border-[#7A8699] rounded-lg text-black placeholder-black/50 text-sm font-inter font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          style={{ height: '33px' }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-black font-inter font-medium text-sm leading-tight">
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Looking for property."
                        required
                        className="w-full px-4 py-2 bg-white border border-[#7A8699] rounded-lg text-black placeholder-black/50 text-sm font-inter font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        style={{ height: '33px' }}
                      />
                    </div>
                  </div>
                  
                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-black font-inter font-medium text-sm leading-tight">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="FewmoreskecthesAgmail.com"
                        required
                        className="w-full px-4 py-2 bg-white border border-[#7A8699] rounded-lg text-black placeholder-black/50 text-sm font-inter font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        style={{ height: '33px' }}
                      />
                    </div>
                  </div>
                  
                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[#1E1E1E] font-inter font-normal text-base leading-relaxed">
                      Type your message
                    </label>
                    <div className="relative flex-1">
                      <textarea
                        name="message"
                        placeholder="Value"
                        className="w-full px-4 py-3 bg-white border border-[#6B788E] rounded-lg text-[#1E1E1E] placeholder-[#1E1E1E] text-base font-inter font-normal focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-full min-h-[80px]"
                      ></textarea>
                    </div>
                    <p className="text-[#757575] font-inter font-normal text-base leading-normal">
                      (Optional)
                    </p>
                  </div>
                  
                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="text-green-600 text-sm font-medium text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-600 text-sm font-medium text-center">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#276EB6] hover:bg-[#1e5a9a]'} text-[#EBF4FE] font-inter font-extrabold text-xl leading-tight tracking-tight py-3 px-5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}
                    style={{ 
                      padding: '9.89px 20.4px 9.89px 12.61px',
                      fontSize: '20.35px',
                      letterSpacing: '-2.6%'
                    }}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  
                </form>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactContent; 