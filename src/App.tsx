import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Info from './pages/Info';
import Image from './pages/Image';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [theme, setTheme] = useState('default'); // default, orange
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    title: '',
    projectName: '',
    role: '',
    website: '',
    logo: '',
    images: {
      small: '',
      large: '',
      left: '',
      center: '',
      right: ''
    }
  });
  const lenisRef = useRef<Lenis | null>(null);

  // 初始化 Lenis 实现平滑滚动
  useEffect(() => {
    lenisRef.current = new Lenis();
    
    const animate = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // 添加全局样式来隐藏滚动条
  useEffect(() => {
    // 创建样式元素
    const style = document.createElement('style');
    style.textContent = `
      /* 隐藏滚动条 - Chrome, Safari and Opera */
      body::-webkit-scrollbar {
        display: none;
      }
      
      /* 确保 html 和 body 没有滚动条 */
      html, body {
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
      
      /* 隐藏滚动容器的滚动条 */
      .scroll-container {
        overflow-y: auto;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      
      .scroll-container::-webkit-scrollbar {
        display: none;
      }
    `;
    
    // 添加到文档头部
    document.head.appendChild(style);
    
    // 清理函数
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // 切换主题
  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'orange' : 'default');
  };

  // 滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 处理项目点击
  const handleProjectClick = (project: {
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
  }) => {
    setCurrentProject(project);
    setShowProjectDetail(true);
  };

  // 关闭项目详情
  const closeProjectDetail = () => {
    setShowProjectDetail(false);
  };

  return (
    <div className={`min-h-screen relative ${theme === 'default' ? 'bg-[#E9E3D8] text-[#1C1C1C]' : 'bg-[#D44720] text-white'}`}>
      {/* 顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-8 bg-transparent z-50">
        <div className="flex space-x-12 text-left">
          <a 
            href="#info"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('info');
              setShowProjectDetail(false);
            }}
            className="group cursor-pointer block"
          >
            <p className={`text-lg font-bold group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 group-hover:scale-105 relative inline-block ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}>
              Info
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D1F] group-hover:w-full transition-all duration-300"></span>
            </p>
            <span className={`block mt-1 text-xs font-medium group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>
              ABOUT ME
            </span>
          </a>
          <a 
            href="#image"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('image');
              setShowProjectDetail(false);
            }}
            className="group cursor-pointer block"
          >
            <p className={`text-lg font-bold group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 group-hover:scale-105 relative inline-block ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}>
              Image
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D1F] group-hover:w-full transition-all duration-300"></span>
            </p>
            <span className={`block mt-1 text-xs font-medium group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>
              SOME PICTURE
            </span>
          </a>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
              setShowProjectDetail(false);
            }}
            className={`text-xs font-medium hover:text-[#FF4D1F] transition-all duration-300 hover:scale-105 ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}
          >
            GO HOME
          </a>
        </div>
        <div className="flex space-x-12 text-right">
          <a 
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
              setShowProjectDetail(false);
            }}
            className="group cursor-pointer block"
          >
            <p className={`text-lg font-bold group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 group-hover:scale-105 relative inline-block ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}>
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D1F] group-hover:w-full transition-all duration-300"></span>
            </p>
            <span className={`block mt-1 text-xs font-medium group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>
              SOME VIDEO
            </span>
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
              setShowProjectDetail(false);
            }}
            className="group cursor-pointer block"
          >
            <p className={`text-lg font-bold group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 group-hover:scale-105 relative inline-block ${theme === 'default' ? 'text-[#1C1C1C]' : 'text-white'}`}>
              Contact me
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D1F] group-hover:w-full transition-all duration-300"></span>
            </p>
            <span className={`block mt-1 text-xs font-medium group-hover:text-[#FF4D1F] group-hover:opacity-80 transition-all duration-300 ${theme === 'default' ? 'text-[#6F6F6F]' : 'text-white'}`}>
              FOR ANY COLLABORATIONS
            </span>
          </a>
        </div>
      </nav>

      {/* 页面内容 - 滚动布局 */}
      <div className="scroll-container">
        {/* Hero Section */}
        <section id="hero" className="relative">
          <Hero theme={theme} />
          {/* 右下角文字 */}
          <div className="absolute bottom-20 right-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div 
                className="flex items-center mb-2 cursor-pointer"
                onClick={toggleTheme}
              >
                <div className={`w-6 h-6 ${theme === 'default' ? 'bg-[#D44720]' : 'bg-white'} rounded-full flex items-center justify-center mr-2 text-white font-bold`}>*</div>
                <span className={`text-sm font-medium ${theme === 'default' ? 'text-[#D44720]' : 'text-white'}`}>CLICK CLICK</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 1 - Info */}
        <section id="info" className="min-h-screen">
          <Info theme={theme} />
        </section>

        {/* Section 2 - Image */}
        <section id="image" className="min-h-screen">
          <Image theme={theme} onProjectClick={handleProjectClick} />
        </section>

        {/* Section 3 - Work */}
        <section id="work" className="min-h-screen">
          <Work theme={theme} onProjectClick={handleProjectClick} />
        </section>

        {/* Section 4 - Contact */}
        <section id="contact" className="min-h-screen">
          <Contact theme={theme} />
        </section>
      </div>

      {/* 项目详情页面 */}
      {showProjectDetail && (
        <div className="fixed inset-0 z-50">
          <ProjectDetail 
            theme={theme}
            title={currentProject.title}
            projectName={currentProject.projectName}
            role={currentProject.role}
            website={currentProject.website}
            logo={currentProject.logo}
            images={currentProject.images}
            onClose={closeProjectDetail}
          />
        </div>
      )}

      {/* 页脚 */}
      <Footer theme={theme} />
    </div>
  );
};

export default App;
