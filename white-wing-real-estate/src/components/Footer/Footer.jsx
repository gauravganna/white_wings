import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { BRAND_COLORS, CONTACT_INFO, NAVIGATION_ITEMS, SOCIAL_MEDIA, SOCIAL_LINKS } from '../../constants/site-data';
import logo from '../../assets/icons/logo.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // TODO: Implement newsletter subscription logic
    console.log('Subscribing email:', email);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      // You can add success notification here
    }, 1000);
  };

  // Quick links based on navigation items
  const quickLinks = [
    'Home Page',
    'Our Services', 
    'Testimonials',
    'Contact Us',
    'Blog Posts'
  ];

  // Social media icons mapping
  const socialIcons = {
    Facebook: Facebook,
    Instagram: Instagram,
    Twitter: Twitter,
    Linkedin: Linkedin,
    Youtube: Youtube
  };



  return (
    <footer className="bg-[#05112F] text-white">
      {/* Main Footer Content */}
      <div className="w-full px-6 md:px-16 py-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop Layout - Exact Figma Structure */}
          <div className="hidden md:flex gap-24">
            
            {/* Newsletter Section - 658px width */}
            <div className="flex items-center gap-4 w-[658px]">
              {/* Logo - 251x201px */}
              <div className="w-[251px] h-[201px] flex-shrink-0">
                <img 
                  src={logo} 
                  alt="White Wing Group" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Newsletter Content - Right aligned */}
              <div className="flex-1 flex flex-col items-end gap-4">
                <h2 className="text-lg font-semibold text-white self-stretch">
                  Land Development, Residential & Commercial Projects
                </h2>
                <p className="text-sm text-white/70 self-stretch opacity-70">
                  Subscribe to our newsletter for the latest updates on features and releases.
                </p>
                
                {/* Subscribe Form - 391px width */}
                <div className="w-[391px] flex flex-col gap-2">
                  <form onSubmit={handleSubscribe}>
                    <label className="block text-base font-normal text-white mb-2">
                      Subscribe
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="flex-1 px-4 py-3 bg-white border border-[#D9D9D9] rounded-lg text-black placeholder-black/50 text-base focus:outline-none focus:ring-2 focus:ring-[#3493F2]"
                        required
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-[18px] py-[10px] bg-[#276EB6] text-[#EBF4FE] font-extrabold text-xl rounded-lg hover:bg-[#2563eb] transition-colors duration-200 disabled:opacity-50 w-[112px] h-[54px]"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>
                  </form>
                  
                  <p className="text-xs text-white/70 font-medium opacity-70">
                    By subscribing, you consent to our Privacy Policy and agree to receive updates.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Links Section - Three Columns with 40px gap */}
            <div className="flex gap-2 flex-1">
              {/* Quick Links */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white mb-4 font-roboto">Quick Links</h3>
                <div className="flex flex-col">
                  {quickLinks.map((link) => (
                    <div key={link} className="py-2">
                      <a 
                        href="#" 
                        className="text-sm text-white hover:text-[#3493F2] transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect With Us - Fixed 228px width */}
              <div className="w-[228px] h-[240px]">
                <h3 className="text-base font-semibold text-white mb-4 font-roboto">
                  Connect With Us
                </h3>
                <div className="flex flex-col">
                  {/* Phone */}
                  <div className="flex items-center py-2">
                    <div className="w-[27px] h-[27px] flex items-center justify-center mr-1">
                      <Phone className="w-[18px] h-[18px] text-[#3493F2]" />
                    </div>
                    <a 
                      href="tel:+919824099444"
                      className="text-sm text-white hover:text-[#3493F2] transition-colors duration-200"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center py-2">
                    <div className="w-[27px] h-[27px] flex items-center justify-center mr-1">
                      <Mail className="w-[18px] h-[18px] text-[#3493F2]" />
                    </div>
                    <a 
                      href="mailto:mkt@whitewingsgroup.in"
                      className="text-sm text-white hover:text-[#3493F2] transition-colors duration-200"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  
                  {/* Address */}
                  <div className="flex py-2">
                    <div className="w-[27px] h-[27px] flex items-center justify-center mr-1 flex-shrink-0">
                      <MapPin className="w-[18px] h-[18px] text-[#3493F2]" />
                    </div>
                    <span className="text-sm text-white">
                      {CONTACT_INFO.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stay Updated */}
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white mb-4 font-roboto">
                  Stay Updated
                </h3>
                <div className="flex flex-col">
                  {['Facebook', 'Instagram', 'Twitter', 'Linkedin', 'Youtube'].map((platform) => {
                    const IconComponent = socialIcons[platform];
                    return (
                      <a 
                        key={platform}
                        href={SOCIAL_LINKS[platform]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center py-2 gap-3 hover:text-[#3493F2] transition-colors duration-200 group"
                      >
                        <div className="w-6 h-6 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[#F6F8F8] group-hover:text-[#3493F2] transition-colors duration-200" />
                        </div>
                        <span className="text-sm text-white group-hover:text-[#3493F2] transition-colors duration-200">{platform}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-3">
            {/* Newsletter Section Mobile */}
            <div className="space-y-1.5">
              <h2 className="text-sm font-medium text-white">
                Land Development, Residential & Commercial Projects
              </h2>
              
              {/* Subscribe Form Mobile */}
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="flex-1 px-4 py-3 bg-white border border-[#D9D9D9] rounded-lg text-black placeholder-black/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#3493F2]"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-[18px] py-[10px] bg-[#276EB6] text-[#EBF4FE] font-extrabold text-xl rounded-lg hover:bg-[#2563eb] transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submit' : 'Submit'}
                  </button>
                </div>
              </form>
              
              <p className="text-xs text-white/70 font-medium">
                By subscribing, you consent to our Privacy Policy and agree to receive updates.
              </p>
            </div>
          </div>

          {/* Mobile Only Links Section */}
          <div className="mt-3 md:hidden">
            <div className="space-y-1.5">
              {/* Connect With Us - Mobile */}
              <div className="mb-1.5">
                <h3 className="text-sm font-normal text-white mb-1">
                  Connect With Us
                </h3>
                <div className="space-y-0">
                  {/* Mobile: Phone and Email on same line */}
                                      <div className="flex items-center justify-between gap-1 py-2">
                      {/* Phone */}
                      <div className="flex items-center gap-1">
                        <div className="w-[27px] h-[27px] rounded-full flex items-center justify-center">
                          <Phone className="w-[18px] h-[18px] text-[#3493F2]" />
                        </div>
                        <a 
                          href="tel:+919824099444"
                          className="text-sm text-white hover:text-[#3493F2] transition-colors duration-200"
                        >
                          {CONTACT_INFO.phone}
                        </a>
                      </div>
                      
                      {/* Email */}
                      <div className="flex items-center gap-1">
                        <div className="w-[27px] h-[27px] rounded-full flex items-center justify-center">
                          <Mail className="w-[18px] h-[18px] text-[#3493F2]" />
                        </div>
                        <a 
                          href="mailto:mkt@whitewingsgroup.in"
                          className="text-sm text-white hover:text-[#3493F2] transition-colors duration-200"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                    </div>
                </div>
              </div>

              {/* Stay Updated - Mobile */}
              <div>
                <h3 className="text-sm font-normal text-white mb-1">
                  Stay Updated
                </h3>
                <div className="space-y-0">
                  {/* Mobile: Horizontal layout */}
                  <div className="flex justify-between gap-1">
                    {['Facebook', 'Instagram', 'Linkedin'].map((platform) => {
                      const IconComponent = socialIcons[platform];
                      return (
                        <a 
                          key={platform}
                          href={SOCIAL_LINKS[platform]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center py-2 gap-3 hover:text-[#3493F2] transition-colors duration-200 group"
                        >
                          <div className="w-6 h-6 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-[#F6F8F8] group-hover:text-[#3493F2] transition-colors duration-200" />
                          </div>
                          <span className="text-sm text-white group-hover:text-[#3493F2] transition-colors duration-200">{platform}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="px-6 md:px-16 py-2 md:py-2">
        <div className="max-w-7xl mx-auto">
          {/* Divider with spacing */}
          <div className="mb-2 md:mb-2">
            <div className="border-t border-[#F4F4F4]"></div>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-2">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <span className="text-xs md:text-sm text-[#7DAADB] font-medium">
                © 2025 White Wings Group. All rights reserved.
              </span>
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-8">
              <a href="#" className="text-xs md:text-sm text-[#7DAADB] font-medium hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-xs md:text-sm text-[#7DAADB] font-medium hover:text-white transition-colors duration-200">
                Terms of Use
              </a>
              <a href="#" className="text-xs md:text-sm text-[#7DAADB] font-medium hover:text-white transition-colors duration-200">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 