import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SocialIconProps {
  icon: React.ReactNode;
  label: string;
  link: string;
  index: number;
  theme: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, label, link, index, theme }) => {
  return (
    <motion.a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center mb-12 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className={`mr-16 group-hover:scale-110 transition-transform duration-300 ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}>
        {icon}
      </div>
      <motion.span 
        className={`text-6xl font-serif group-hover:text-[#FF4D1F] transition-colors duration-300 relative inline-block ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        <span className={`absolute bottom-0 left-0 w-0 h-1 ${theme === 'default' ? 'bg-[#FF4D1F]' : 'bg-white'} group-hover:w-full transition-all duration-300`}></span>
        {label}
      </motion.span>
    </motion.a>
  );
};

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const { scrollY } = useScroll();
  
  const socialLinks = [
    {
      icon: (
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: 'wangrongmiao@gmail.com',
      link: 'mailto:wangrongmiao@gmail.com'
    },
    {
      icon: (
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      label: 'WECHAT：wangrongmiao102',
      link: '#'
    },
    {
      icon: (
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
      label: 'hannah.rm0130',
      link: 'https://instagram.com/hannah.rm0130'
    }
  ];

  return (
    <div className={`min-h-screen ${theme === 'default' ? 'bg-[#E9E3D8]' : 'bg-[#D44720]'} pt-24 transition-colors duration-300`}>
      <div className="container mx-auto px-8 min-h-[80vh]">
        <div className="flex flex-col md:flex-row items-center">
          {/* 左边社交媒体图标 */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            {socialLinks.map((item, index) => {
              const y = useTransform(scrollY, [index * 200, index * 200 + 300], [50, 0]);
              
              return (
                <motion.div
                  key={index}
                  style={{ opacity: 1, y }}
                >
                  <SocialIcon 
                    icon={item.icon} 
                    label={item.label} 
                    link={item.link} 
                    index={index}
                    theme={theme}
                  />
                </motion.div>
              );
            })}
          </div>
          
          {/* 右边留白 */}
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;