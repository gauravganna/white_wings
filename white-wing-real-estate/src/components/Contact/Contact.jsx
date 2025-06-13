import React from 'react';
import ContactVideoBackground from './ContactVideoBackground';
import ContactContent from './ContactContent';

const Contact = () => {
  return (
    <section className="relative md:min-h-screen h-full overflow-hidden">
      {/* Video Background Layer - Hidden on Mobile */}
      <ContactVideoBackground />
      
      {/* Contact Content Overlay */}
      <ContactContent />
    </section>
  );
};

export default Contact; 