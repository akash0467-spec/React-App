import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourusername' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/yourusername' },
  ];

  return (
    <section className="social-section">
      <h2>Connect With Me</h2>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.name}
          >
            <i className={`fab fa-${link.icon}`}></i>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;