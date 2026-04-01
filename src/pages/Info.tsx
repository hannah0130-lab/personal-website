import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface InfoProps {
  theme: string;
}

const Info: React.FC<InfoProps> = ({ theme }) => {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const subtitleY = useTransform(scrollY, [0, 300], [0, -80]);
  const textY = useTransform(scrollY, [0, 300], [0, -60]);
  const smallTextY = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <div className={`min-h-screen ${theme === 'default' ? 'bg-[#E9E3D8]' : 'bg-[#D44720]'} pt-24 transition-colors duration-300`}>
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center min-h-[80vh]">
        {/* 左边图片 */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <div className="ml-8">
            <img 
              src="/images/5.jpg" 
              alt="Wang Rongmiao" 
              className="w-full h-[70vh] object-cover grayscale"
            />
          </div>
        </div>

        {/* 视觉呼吸区 */}
        <div className="w-full md:w-1/12"></div>

        {/* 右边文字 */}
        <div className="w-full md:w-1/2">
          <motion.h1 
            className={`text-[120px] md:text-[180px] font-semibold tracking-tight ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
            style={{ y: titleY }}
          >
            R.M.
          </motion.h1>
          <motion.h2 
            className={`text-[48px] md:text-[64px] serif-font mt-4 ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
            style={{ y: subtitleY }}
          >
            [Hi, I'm Wang Rongmiao]
          </motion.h2>
          <motion.p 
            className={`text-lg mt-8 ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
            style={{ y: textY }}
          >
            专注影像叙事与剪辑表达
          </motion.p>
          <motion.div 
            className="mt-4 max-w-[220px]"
            style={{ y: smallTextY }}
          >
            <p className={`text-sm line-height-6 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>我是王榕淼</p>
            <p className={`text-sm line-height-6 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>Editor/Production</p>
            <p className={`text-sm line-height-6 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>Designer/BTS</p>
            <p className={`text-sm line-height-6 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>Videographer</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Info;