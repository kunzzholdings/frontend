"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../config/images';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';

gsap.registerPlugin(ScrollTrigger);

const MenuSelectionSection = () => {
    const menuContainerRef = useRef(null);

    useEffect(() => {
        gsap.to(menuContainerRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.menu-selection-section',
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        });
    }, []);

    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex-center overflow-hidden py-16 px-5 font-besley z-base menu-selection-section" 
             style={{backgroundImage: `url('/assets/images/menubg.webp')`}} id="menu-selection">
            
            <div className="flex gap-16 max-w-6xl w-full opacity-0 translate-y-12 relative z-overlay" ref={menuContainerRef}>
                {/* Sushi & Sashimi 选项 */}
                <a href="sushimenu/sashimi.html" className="flex-1 relative h-[500px] tokyo-gold-border cursor-pointer transition-all duration-400 flex-center overflow-hidden no-underline group hover-lift">
                    {/* 装饰边框 */}
                    <div className="absolute w-full h-full pointer-events-none">
                        <div className="absolute top-5 left-5 w-20 h-20 border-2 border-tokyo-gold border-r-0 border-b-0"></div>
                        <div className="absolute bottom-5 right-5 w-20 h-20 border-2 border-tokyo-gold border-l-0 border-t-0"></div>
                    </div>
                    
                    <div className="text-center text-white z-base relative no-underline w-full h-full flex-center">
                        <img src={IMAGES.sushi} alt="寿司与刺身菜单" className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-400 group-hover:scale-105" />
                    </div>
                    
                    {/* 悬停效果 */}
                    <div className="absolute top-0 left-0 w-full h-full gradient-overlay opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
                </a>

                {/* Grand Menu 选项 */}
                <a href="grandmenu/zensai.html" className="flex-1 relative h-[500px] tokyo-gold-border cursor-pointer transition-all duration-400 flex-center overflow-hidden no-underline group hover-lift">
                    {/* 装饰边框 */}
                    <div className="absolute w-full h-full pointer-events-none">
                        <div className="absolute top-5 left-5 w-20 h-20 border-2 border-tokyo-gold border-r-0 border-b-0"></div>
                        <div className="absolute bottom-5 right-5 w-20 h-20 border-2 border-tokyo-gold border-l-0 border-t-0"></div>
                    </div>
                    
                    <div className="text-center text-white z-base relative no-underline w-full h-full flex-center">
                        <img src={IMAGES.grand} alt="精选菜单" className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-400 group-hover:scale-105" />
                    </div>
                    
                    {/* 悬停效果 */}
                    <div className="absolute top-0 left-0 w-full h-full gradient-overlay opacity-0 transition-opacity duration-400 group-hover:opacity-100"></div>
                </a>
            </div>
        </div>
    );
};

export default MenuSelectionSection;
