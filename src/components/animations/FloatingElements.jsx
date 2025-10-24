"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { IMAGES } from '../../config/images';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';

const FloatingElements = ({ type = 'petals', count = 10, speed = 1 }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const elements = containerRef.current.children;
        
        // 为每个元素设置随机动画
        Array.from(elements).forEach((element, index) => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 8 + Math.random() * 4;
            const randomX = (Math.random() - 0.5) * 100;
            
            gsap.set(element, {
                x: randomX,
                rotation: Math.random() * 360,
                scale: 0.5 + Math.random() * 0.5
            });

            gsap.to(element, {
                y: '100vh',
                rotation: '+=360',
                duration: randomDuration * speed,
                delay: randomDelay,
                ease: 'none',
                repeat: -1,
                yoyo: false
            });
        });
    }, [speed]);

    const renderElements = () => {
        const elements = [];
        
        for (let i = 0; i < count; i++) {
            const randomSize = 6 + Math.random() * 8;
            const randomLeft = Math.random() * 100;
            const randomDelay = Math.random() * 2;
            const randomDuration = 8 + Math.random() * 4;
            
            elements.push(
                <div
                    key={i}
                    className="absolute bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-60"
                    style={{
                        width: `${randomSize}px`,
                        height: `${randomSize}px`,
                        left: `${randomLeft}%`,
                        top: '-10px',
                        backgroundImage: type === 'petals' 
                            ? `url('${IMAGES.petals[i % IMAGES.petals.length]}')`
                            : 'none',
                        backgroundColor: type === 'dots' ? '#c8a068' : 'transparent',
                        animationDuration: `${randomDuration}s`,
                        animationDelay: `${randomDelay}s`
                    }}
                />
            );
        }
        
        return elements;
    };

    return (
        <div 
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-base overflow-hidden"
        >
            {renderElements()}
        </div>
    );
};

export default FloatingElements;
