import React from 'react';
import { motion } from 'framer-motion';

interface WorkProps {
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

const Work: React.FC<WorkProps> = ({ theme, onProjectClick }) => {
  const textLinks = [
    { id: '06', text: '《太阳》', url: '#' },
    { id: '07', text: '《花束般的恋爱》', url: '#' },
    { id: '08', text: '《可荔——圳在进行时》', url: '#' },
    { id: '09', text: '《恋与不恋之间》', url: '#' }
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
          <div className="flex flex-wrap items-end gap-16 mb-16">
            <motion.div
              className="relative group flex-shrink-0 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'THE SUN',
                projectName: '《太阳》',
                role: 'Artistic Execution',
                website: 'THE SUN',
                logo: 'S.',
                images: {
                  small: '/images/1.JPG',
                  large: '/images/1.JPG',
                  left: '/images/1.JPG',
                  center: '/images/1.JPG',
                  right: '/images/1.JPG'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[0].id}</span>
              <h3 className={`text-4xl md:text-6xl font-serif font-normal relative whitespace-nowrap ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
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
              className="relative group flex-shrink-0 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'FLOWER',
                projectName: '《花束般的恋爱》',
                role: 'Behind-the-scenes Specialist/Cinematographer',
                website: 'A romance like a bouquet of flowers',
                logo: 'F.',
                images: {
                  small: '/images/2.JPG',
                  large: '/images/2.JPG',
                  left: '/images/2.JPG',
                  center: '/images/2.JPG',
                  right: '/images/2.JPG'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[1].id}</span>
              <h3 className={`text-4xl md:text-6xl font-serif font-normal relative whitespace-nowrap ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
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

            <motion.div
              className="relative group flex-shrink-0 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'KELI',
                projectName: '《可荔——圳在进行时》',
                role: 'Editor/Planning Specialist',
                website: 'KE LI',
                logo: 'K.',
                images: {
                  small: '/images/3.jpg',
                  large: '/images/3.jpg',
                  left: '/images/3.jpg',
                  center: '/images/3.jpg',
                  right: '/images/3.jpg'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[2].id}</span>
              <h3 className={`text-4xl md:text-6xl font-serif font-normal relative whitespace-nowrap ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
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
              className="relative group flex-shrink-0 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, x: [0, -5, 5, -5, 5, 0], y: [0, -5, 5, -5, 5, 0], transition: { duration: 0.5, repeat: Infinity, repeatType: 'loop' } }}
              onClick={() => onProjectClick({
                title: 'LOVE',
                projectName: '《恋与不恋之间》',
                role: 'Editor/Planning Specialist',
                website: 'Online Psychology Experiment',
                logo: 'L.',
                images: {
                  small: '/images/4.jpg',
                  large: '/images/4.jpg',
                  left: '/images/4.jpg',
                  center: '/images/4.jpg',
                  right: '/images/4.jpg'
                }
              })}
            >
              <span className={`absolute top-[-20px] left-0 text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>{textLinks[3].id}</span>
              <h3 className={`text-4xl md:text-6xl font-serif font-normal relative whitespace-nowrap ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;