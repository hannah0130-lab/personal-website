import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  "/images/1.JPG",
  "/images/2.JPG",
  "/images/3.jpg",
  "/images/4.jpg"
];

interface HeroProps {
  theme: string;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  React.useEffect(() => {
    let interval: number;
    if (hovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 300);
    }
    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <div className={`w-screen h-screen relative overflow-hidden ${theme === 'default' ? 'bg-[#E9E3D8]' : 'bg-[#D44720]'} transition-colors duration-300`}>
      {/* 圆形背景 */}
      <div className={`absolute w-[800px] h-[800px] rounded-full border opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${theme === 'default' ? 'border-[#6F6F6F]' : 'border-white'}`}></div>

      {/* 中心锚点（唯一坐标系） */}
      <div 
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* 图片（中心） */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            width: "300px",
            display: "block",
            zIndex: 5,
          }}
        >
          <motion.img 
            key={currentImageIndex}
            src={images[currentImageIndex]} 
            alt="WANG RONGMIAOI" 
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Rong */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translate(-120%, -50%)",
            fontSize: "120px",
            whiteSpace: "nowrap",
            zIndex: 10,
            color: "white",
            fontFamily: "serif",
            fontWeight: "bold",
          }}
        >
          Rong
        </motion.div>

        {/* Miao */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translate(120%, -50%)",
            fontSize: "120px",
            whiteSpace: "nowrap",
            zIndex: 10,
            color: "white",
            fontFamily: "serif",
            fontWeight: "bold",
          }}
        >
          Miao
        </motion.div>
      </div>


    </div>
  );
};

export default Hero;