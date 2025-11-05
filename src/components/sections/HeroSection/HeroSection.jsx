"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../../../config/images';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';
import './HeroSection.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const sceneRef = useRef(null);
    const contentOverlayRef = useRef(null);
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef1 = useRef(null);
    const subtitleRef2 = useRef(null);
    const door1Ref = useRef(null);
    const door2Ref = useRef(null);
    const door3Ref = useRef(null);
    const door4Ref = useRef(null);
    const backgroundRef = useRef(null);
    const restaurantImageRef = useRef(null);

    useEffect(() => {
        // 设置初始状态
        gsap.set(contentOverlayRef.current, {
            xPercent: -50,
            yPercent: -50,
            opacity: 1
        });

        gsap.set(logoRef.current, {
            width: 200,
            height: 200
        });

        gsap.set([titleRef.current, subtitleRef1.current, subtitleRef2.current], {
            opacity: 0
        });

        // 使用wheel事件来控制门的打开
        let doorProgress = 0;
        let doorIsOpen = false;
        let wheelTimeout = null;

        const handleWheel = (e) => {
            if (doorIsOpen) {
                return; // 门已经打开，允许正常滚动
            }
            
            // 阻止默认滚动行为，只在门还没完全打开时
            e.preventDefault();
            e.stopPropagation();
            
            const delta = e.deltaY;
            
            // 只在向下滚动时才打开门
            if (delta > 0) {
                doorProgress = Math.max(0, Math.min(1, doorProgress + delta * 0.0015));
            } else if (delta < 0 && doorProgress > 0) {
                // 允许向上滚动来关闭门
                doorProgress = Math.max(0, doorProgress + delta * 0.0015);
            }
            
            // 更新门的动画状态
            gsap.to(door2Ref.current, {
                x: `-${doorProgress * 100}%`,
                scale: 1 + doorProgress * 0.3,
                duration: 0.2,
                ease: 'power2.out'
            });
            
            gsap.to(door3Ref.current, {
                x: `${doorProgress * 100}%`,
                scale: 1 + doorProgress * 0.3,
                duration: 0.2,
                ease: 'power2.out'
            });
            
            gsap.to([door1Ref.current, door4Ref.current], {
                scale: 1 + doorProgress * 0.3,
                duration: 0.2,
                ease: 'power2.out'
            });
            
            gsap.to(backgroundRef.current, {
                opacity: doorProgress,
                scale: 1 + doorProgress * 0.4,
                duration: 0.2,
                ease: 'power2.out'
            });
            
            gsap.to(restaurantImageRef.current, {
                scale: 1 + doorProgress * 0.3,
                duration: 0.2,
                ease: 'power2.out'
            });
            
            gsap.to(logoRef.current, {
                width: 200 - doorProgress * 80,
                height: 200 - doorProgress * 80,
                duration: 0.2,
                ease: 'power2.out'
            });
            
            gsap.to(contentOverlayRef.current, {
                scale: 1 + doorProgress * 0.15,
                duration: 0.2,
                ease: 'power2.out'
            });
            
            gsap.to([titleRef.current, subtitleRef1.current, subtitleRef2.current], {
                opacity: doorProgress,
                duration: 0.2,
                ease: 'power2.out'
            });

            // 当门完全打开时，等待一小段时间后允许滚动到下一个section
            if (doorProgress >= 0.99 && !doorIsOpen) {
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    doorIsOpen = true;
                    const firstSection = sceneRef.current?.closest('.snap-section');
                    if (firstSection) {
                        firstSection.removeEventListener('wheel', handleWheel);
                    }
                    // 触发滚动到下一个section
                    const aboutSection = document.querySelector('.about-section');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            }
        };

        const firstSection = sceneRef.current.closest('.snap-section');
        if (firstSection) {
            firstSection.addEventListener('wheel', handleWheel, { passive: false });
        }

        // 鼠标视差效果
        const handleMouseMove = (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) / 50;
            const moveY = (e.clientY - window.innerHeight / 2) / 50;
            
            gsap.to(contentOverlayRef.current, {
                x: moveX,
                y: moveY,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            const section = document.querySelector('.scroll-container');
            if (section) {
                section.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <div className="snap-section relative scroll-container">
            <div className="h-screen fixed-fullscreen overflow-hidden z-overlay" ref={sceneRef}>
                {/* 背景内容 */}
                <div className="hero-background absolute top-0 left-0 w-full h-full flex-center opacity-0 scale-100" ref={backgroundRef}>
                    <div className="hero-restaurant-image w-full h-full brightness-60 scale-100" ref={restaurantImageRef}>
                        <Image 
                            src={IMAGES.tokyoRestaurant} 
                            alt="Japanese Restaurant" 
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Logo和标题 */}
                <div className="hero-content-overlay absolute-center text-center text-white z-modal opacity-100" ref={contentOverlayRef}>
                    <div className="hero-logo w-32 h-32 bg-tokyo-gold rounded-full mx-auto mb-8 flex-center shadow-2xl overflow-hidden relative" ref={logoRef}>
                        <Image src={IMAGES.tokyoLogo} alt="Tokyo Logo" fill className="object-cover" />
                    </div>
                    <h1 className="hero-title text-6xl font-bold tracking-widest mb-5 text-shadow-lg" ref={titleRef}>TOKYO JAPANESE CUISINE</h1>
                    <p className="hero-subtitle text-2xl tracking-wider mb-2 opacity-90" ref={subtitleRef1}>精致美食·品越服务</p>
                    <p className="hero-subtitle text-2xl tracking-wider mb-2 opacity-90" ref={subtitleRef2}>成就世界级日料品牌</p>
                </div>

                {/* 四个门 */}
                <div className="absolute top-0 left-0 w-full h-full z-overlay pointer-events-none">
                    <div className="hero-door hero-door-1 absolute top-0 left-0 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center z-modal" ref={door1Ref}></div>
                    <div className="hero-door hero-door-2 absolute top-0 left-1/4 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center z-overlay" ref={door2Ref}></div>
                    <div className="hero-door hero-door-3 absolute top-0 left-1/2 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center z-overlay" ref={door3Ref}></div>
                    <div className="hero-door hero-door-4 absolute top-0 right-0 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center z-modal" ref={door4Ref}></div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
