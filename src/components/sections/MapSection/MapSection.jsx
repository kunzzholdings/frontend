"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';
import './MapSection.css';

gsap.registerPlugin(ScrollTrigger);

const MapSection = () => {
    const titleRef = useRef(null);
    const mainStoreRef = useRef(null);
    const branchStoreRef = useRef(null);

    useEffect(() => {
        // 标题动画
        gsap.set(titleRef.current, { opacity: 0, y: -30 });
        gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.map-section',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });

        // 店铺卡片动画
        gsap.set([mainStoreRef.current, branchStoreRef.current], { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        });

        gsap.to(mainStoreRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.map-section',
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        });

        gsap.to(branchStoreRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.map-section',
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        });
    }, []);

    return (
        <div className="map-section relative min-h-screen py-20 px-4 md:px-8 overflow-hidden z-base">
            {/* 背景图片 */}
            <div className="map-background-image"></div>
            
            {/* 半透明遮罩 */}
            <div className="map-overlay"></div>

            {/* 内容容器 */}
            <div className="relative z-overlay max-w-7xl mx-auto">
                {/* 标题 */}
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-white mb-4 text-shadow-lg">我们在这</h2>
                    <div className="w-24 h-1 bg-tokyo-gold mx-auto"></div>
                </div>

                {/* 店铺信息网格 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* 总店 */}
                    <div ref={mainStoreRef} className="map-card">
                        <div className="map-card-header">
                            <h3 className="text-2xl md:text-3xl font-bold text-tokyo-gold mb-2">总店</h3>
                            <div className="w-16 h-1 bg-tokyo-gold"></div>
                        </div>
                        
                        <div className="map-card-content">
                            {/* 地图 */}
                            <div className="map-container mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5573740266547!2d103.77789087496756!3d1.4612851986216394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f89453e063%3A0x9c3c3c3c3c3c3c3c!2sMid%20Valley%20Southkey!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="总店地图"
                                ></iframe>
                            </div>

                            {/* 地址信息 */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-tokyo-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        T-042 Level 3, Mid Valley, The Mall, Southkey, 81100 Johor Bahru, Johor Darul Ta'zim
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-tokyo-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <a href="tel:+60197108090" className="text-gray-200 text-base md:text-lg hover:text-tokyo-gold transition-colors">
                                        +60 19-710 8090
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 分店 */}
                    <div ref={branchStoreRef} className="map-card">
                        <div className="map-card-header">
                            <h3 className="text-2xl md:text-3xl font-bold text-tokyo-gold mb-2">分店</h3>
                            <div className="w-16 h-1 bg-tokyo-gold"></div>
                        </div>
                        
                        <div className="map-card-content">
                            {/* 地图 */}
                            <div className="map-container mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5936837266755!2d103.7613471749675!3d1.4546513986346697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f4e7c8c8c3%3A0x9d9d9d9d9d9d9d9d!2sParadigm%20Mall%20Johor%20Bahru!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="分店地图"
                                ></iframe>
                            </div>

                            {/* 地址信息 */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-tokyo-gold mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        Lot UG-25, Upper Ground Floor, Paradigm Mall, Lbh Skudai, Taman Bukit Mewah, 81200 Johor Bahru, Johor Darul Ta'zim
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-tokyo-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <a href="tel:+60187738090" className="text-gray-200 text-base md:text-lg hover:text-tokyo-gold transition-colors">
                                        +60 18-773 8090
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapSection;


