"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollIndicator = () => {
    const indicatorRef = useRef(null);

    useEffect(() => {
        if (!indicatorRef.current) return;

        // 创建滚动指示器动画
        gsap.to(indicatorRef.current, {
            y: 20,
            opacity: 0.3,
            duration: 1.5,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true
        });

        // 当用户开始滚动时隐藏指示器
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                if (self.progress > 0.1) {
                    gsap.to(indicatorRef.current, {
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(indicatorRef.current, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            }
        });
    }, []);

    return (
        <div 
            ref={indicatorRef}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-modal pointer-events-none"
        >
            <div className="flex flex-col items-center text-white">
                <span className="text-sm mb-2 text-shadow-sm">向下滚动</span>
                <div className="w-6 h-10 border-2 border-white border-opacity-60 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white bg-opacity-60 rounded-full mt-2 animate-scroll"></div>
                </div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
