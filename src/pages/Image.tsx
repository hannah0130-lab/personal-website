import React from 'react';
import { motion } from 'framer-motion';

interface ImageProps {
  theme: string;
  onProjectClick: (project: {
    title: string;
    projectName: string;
    role: string;
    website: string;
    logo: string;
    images: {
      small: string;
      large: string;
      left: string;
      center: string;
      right: string;
    };
  }) => void;
}

const Image: React.FC<ImageProps> = ({ theme, onProjectClick }) => {
  const textLinks = [
    { id: '01', text: 'Global', url: '#' },
    { id: '02', text: 'Portrait', url: '#' },
    { id: '03', text: 'CNY/LNY', url: '#' },
    { id: '04', text: 'Animal', url: '#' },
    { id: '05', text: 'Travel', url: '#' }
  ];

  return (
    <div className={`min-h-screen ${theme === 'default' ? 'bg-[#E9E3D8]' : 'bg-[#D44720]'} flex items-center justify-center relative py-24 transition-colors duration-300`}>
      <div className="container mx-auto px-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* 第一行 */}
          <div className="flex justify-between items-end mb-12">
            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'Global',
                projectName: 'Global Project',
                role: 'Photographer/Cinematographer',
                website: 'Shenzhen University International Culture Festival',
                logo: 'G.',
                images: {
                  small: '/images/1.JPG',
                  large: '/images/13.JPG',
                  left: '/images/10.JPG',
                  center: '/images/11.JPG',
                  right: '/images/12.JPG'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[0].id}</span>
              <h3 className={`text-6xl md:text-8xl font-serif font-normal relative inline-block ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
                {textLinks[0].text}
                <span className={`absolute bottom-0 left-0 w-0 h-1 ${theme === 'default' ? 'bg-[#D44720]' : 'bg-white'} group-hover:w-full transition-all duration-300`}></span>
              </h3>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, transition: { duration: 0.3 } }}
              >
                <img src="/images/1.JPG" alt={textLinks[0].text} className="w-full h-full object-cover rounded" />
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'Portrait',
                projectName: 'Portrait Series',
                role: 'Photographer/Cinematographer',
                website: 'Hong Daiqi',
                logo: 'P.',
                images: {
                  small: '/images/4.jpg',
                  large: '/images/6.jpg',
                  left: '/images/3.jpg',
                  center: '/images/15.jpg',
                  right: '/images/14.jpg'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[1].id}</span>
              <h3 className={`text-6xl md:text-8xl font-serif font-normal relative inline-block ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
                {textLinks[1].text}
                <span className={`absolute bottom-0 left-0 w-0 h-1 ${theme === 'default' ? 'bg-[#D44720]' : 'bg-white'} group-hover:w-full transition-all duration-300`}></span>
              </h3>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, transition: { duration: 0.3 } }}
              >
                <img src="/images/2.JPG" alt={textLinks[1].text} className="w-full h-full object-cover rounded" />
              </motion.div>
            </motion.div>
          </div>

          {/* 第二行 */}
          <div className="flex justify-between items-end mb-12">
            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'CNY/LNY',
                projectName: 'CNY/LNY Celebration',
                role: 'Photographer/Cinematographer',
                website: 'Chinese New Year',
                logo: 'C.',
                images: {
                  small: '/images/17.JPG',
                  large: '/images/20.JPG',
                  left: '/images/16.JPG',
                  center: '/images/21.JPG',
                  right: '/images/21.JPG'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[2].id}</span>
              <h3 className={`text-6xl md:text-8xl font-serif font-normal relative inline-block ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
                {textLinks[2].text}
                <span className={`absolute bottom-0 left-0 w-0 h-1 ${theme === 'default' ? 'bg-[#D44720]' : 'bg-white'} group-hover:w-full transition-all duration-300`}></span>
              </h3>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, transition: { duration: 0.3 } }}
              >
                <img src="/images/3.jpg" alt={textLinks[2].text} className="w-full h-full object-cover rounded" />
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'Animal',
                projectName: 'Animal Kingdom',
                role: 'Photographer/Cinematographer',
                website: 'Cats and dogs',
                logo: 'A.',
                images: {
                  small: '/images/24.jpg',
                  large: '/images/26.jpg',
                  left: '/images/24.jpg',
                  center: '/images/28.jpg',
                  right: '/images/29.JPG'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[3].id}</span>
              <h3 className={`text-6xl md:text-8xl font-serif font-normal relative inline-block ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
                {textLinks[3].text}
                <span className={`absolute bottom-0 left-0 w-0 h-1 ${theme === 'default' ? 'bg-[#D44720]' : 'bg-white'} group-hover:w-full transition-all duration-300`}></span>
              </h3>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, transition: { duration: 0.3 } }}
              >
                <img src="/images/4.jpg" alt={textLinks[3].text} className="w-full h-full object-cover rounded" />
              </motion.div>
            </motion.div>

            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'Travel',
                projectName: 'Travel Explorer',
                role: 'Photographer/Cinematographer',
                website: 'HONG KONG',
                logo: 'T.',
                images: {
                  small: '/images/5.jpg',
                  large: '/images/5.jpg',
                  left: '/images/5.jpg',
                  center: '/images/5.jpg',
                  right: '/images/28.JPG'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[4].id}</span>
              <h3 className={`text-6xl md:text-8xl font-serif font-normal relative inline-block ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
                {textLinks[4].text}
                <span className={`absolute bottom-0 left-0 w-0 h-1 ${theme === 'default' ? 'bg-[#D44720]' : 'bg-white'} group-hover:w-full transition-all duration-300`}></span>
              </h3>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1, transition: { duration: 0.3 } }}
              >
                <img src="/images/5.jpg" alt={textLinks[4].text} className="w-full h-full object-cover rounded" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Image;