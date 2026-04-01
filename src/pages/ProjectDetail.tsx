import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
  theme: string;
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
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ 
  theme, 
  title, 
  projectName, 
  role, 
  website, 
  logo,
  images,
  onClose
}) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // 添加全局样式来隐藏滚动条
  useEffect(() => {
    // 创建样式元素
    const style = document.createElement('style');
    style.textContent = `
      /* 隐藏滚动条 - Chrome, Safari and Opera */
      .scroll-container::-webkit-scrollbar {
        display: none;
      }
      
      /* 确保 html 和 body 没有滚动条 */
      html, body {
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
    `;
    
    // 添加到文档头部
    document.head.appendChild(style);
    
    // 清理函数
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // 处理滚动事件
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;

    const delta = e.deltaY > 0 ? 1 : -1;
    const newScreen = Math.max(0, Math.min(2, currentScreen + delta));

    if (newScreen !== currentScreen) {
      setCurrentScreen(newScreen);
      scrollContainerRef.current?.scrollTo({
        top: newScreen * window.innerHeight,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  // 监听滚动位置变化
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollTop = scrollContainerRef.current?.scrollTop || 0;
      const screenHeight = window.innerHeight;
      const newScreen = Math.round(scrollTop / screenHeight);

      if (newScreen !== currentScreen) {
        setCurrentScreen(newScreen);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentScreen]);

  return (
    <div 
      ref={scrollContainerRef}
      onWheel={handleWheel}
      className={`h-screen overflow-y-auto snap-y snap-mandatory scroll-container ${theme === 'default' ? 'bg-white' : 'bg-[#D44720]'} transition-colors duration-300`}
      style={{ 
        scrollBehavior: 'smooth',
        /* 隐藏滚动条 */
        msOverflowStyle: 'none',  // IE and Edge
        scrollbarWidth: 'none',  // Firefox
      }}
    >
      {/* 第一屏：封面 */}
      <div className="h-screen snap-start relative flex flex-col">
        {/* 左上角：返回链接 */}
        <nav className="top-left absolute top-1/3 left-8 z-50">
          <button 
            onClick={onClose}
            className={`text-sm ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'} hover:underline transition-all duration-300 cursor-pointer`}
          >
            BACK TO ALL PROJECTS
          </button>
        </nav>

        {/* 视觉中心：大标题 */}
        <main className="flex-1 flex items-center justify-center">
          <motion.h1 
            className={`text-[120px] md:text-[180px] font-serif font-normal ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
        </main>

        {/* 左下角：引导箭头 */}
        <div className="bottom-left absolute bottom-8 left-24">
          <motion.div 
            className={`scroll-arrow text-9xl ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>

        {/* 右下角：项目详情 */}
        <aside className="bottom-right absolute bottom-8 right-1/4 text-left">
          <motion.div 
            className="project-info"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className={`${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}>{projectName}</p>
            <p className={`role text-sm mt-2 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>{role}</p>
            <a 
              href={`https://${website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`website text-sm mt-2 underline ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
            >
              {website}
            </a>
          </motion.div>
        </aside>

        {/* 底部中心：标志 */}
        <footer className="bottom-center absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.span 
            className={`logo-short text-8xl md:text-9xl font-serif font-normal ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {logo}
          </motion.span>
        </footer>
      </div>

      {/* 第二屏：示例图1 */}
      <div className="h-screen snap-start relative flex items-center justify-center bg-[#E9E3D8]">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${title === 'THE SUN' ? '/images/34.jpg' : title === 'FLOWER' ? '/images/39.png' : title === 'KELI' ? '/images/44.png' : title === 'LOVE' ? '/images/50.png' : title === 'Global' ? '/images/1.JPG' : title === 'Travel' ? '/images/31.JPG' : images.large})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
          <div className={`absolute ${title === 'THE SUN' ? 'top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2' : title === 'FLOWER' ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : title === 'KELI' ? 'top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2' : title === 'Animal' ? 'top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2' : title === 'Portrait' ? 'top-1/2 left-2/3 transform -translate-y-1/2' : title === 'Travel' ? 'top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2' : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'} ${title === 'FLOWER' ? 'w-[512px] h-auto' : title === 'Animal' ? 'w-48 h-auto' : 'w-96 h-auto'} relative`}>
            {/* 在 global 页面中调整图层顺序，将小图放到最上层 */}
            {title === 'Global' && (
              <div className="absolute w-64 h-80 z-0">
                <img 
                  src={images.small} 
                  alt="Global" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {/* 在 animal 页面中显示替换后的图片 */}
            {title === 'Animal' && (
              <img 
                src="/images/28.JPG" 
                alt="Animal" 
                className="w-full h-auto object-cover shadow-lg z-20 relative"
              />
            )}
            {/* 在非 animal 页面显示正常图片，并在 global 页面将其放到最上层 */}
            {title !== 'Animal' && (
              <img 
                src={title === 'THE SUN' ? '/images/34.jpg' : title === 'FLOWER' ? '/images/40.png' : title === 'KELI' ? '/images/45.png' : title === 'LOVE' ? '/images/49.png' : images.small} 
                alt={title} 
                className={`w-full h-auto object-cover shadow-lg ${title === 'Global' ? 'z-20 relative' : ''}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* 第三屏：示例图2 */}
      <div className="h-screen snap-start relative flex">
        <div className="w-1/2 h-full bg-[#E9E3D8] flex items-center justify-center">
          <div className="w-full h-full">
            <img 
              src={title === 'THE SUN' ? '/images/35.jpg' : title === 'FLOWER' ? '/images/41.jpg' : title === 'KELI' ? '/images/46.png' : title === 'LOVE' ? '/images/51.png' : title === 'Travel' ? '/images/32.JPG' : images.left} 
              alt="Hand" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 h-full bg-[#F5F5F5] flex items-center justify-center">
          <div className="w-3/4 h-3/4 relative">
            {/* 只在非 portrait 页面显示右侧图片 */}
            {title !== 'Portrait' && (
              <div className={`absolute top-1/2 ${title === 'Animal' ? 'left-1/2 transform -translate-x-1/2' : 'left-0'} w-1/2 h-1/2 transform -translate-y-1/2 ${title === 'Global' || title === 'Travel' ? 'z-10' : 'z-0'}`}>
                <img 
                  src={title === 'THE SUN' ? '/images/38.jpg' : title === 'FLOWER' ? '/images/43.jpg' : title === 'KELI' ? '/images/47.png' : title === 'LOVE' ? '/images/54.png' : title === 'CNY/LNY' ? '/images/19.JPG' : title === 'Travel' ? '/images/33.JPG' : images.right} 
                  alt="Model" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {/* 只在非 portrait 和非 animal 页面显示中间图片 */}
            {images.center && title !== 'Portrait' && title !== 'Animal' && (
              <div className={`absolute top-1/4 left-1/4 w-2/3 h-2/3 p-4 ${title === 'Global' || title === 'Travel' ? 'z-0' : 'z-10'}`}>
                <img 
                  src={title === 'THE SUN' ? '/images/37.jpg' : title === 'FLOWER' ? '/images/42.jpg' : title === 'KELI' ? '/images/48.png' : title === 'LOVE' ? '/images/53.png' : title === 'Travel' ? '/images/30.JPG' : images.center} 
                  alt="Model" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {/* 在 portrait 页面中将右侧图片放在中间图片的背后 */}
            {title === 'Portrait' && images.right && (
              <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                <img 
                  src={images.right} 
                  alt="Model" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;