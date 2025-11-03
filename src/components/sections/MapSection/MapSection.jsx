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
    const lanternsRef = useRef([]);

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

        // 灯笼动画
        lanternsRef.current.forEach((lantern, i) => {
            if (lantern) {
                gsap.to(lantern, {
                    y: '+=15',
                    duration: 2 + i * 0.3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: i * 0.2
                });
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
        <div className="map-section relative min-h-screen py-16 px-4 md:px-8 overflow-hidden" style={{ background: '#f5f0e8' }}>
            {/* 顶部装饰边框 */}
            <div className="decorative-border-top"></div>
            
            {/* 底部装饰边框 */}
            <div className="decorative-border-bottom"></div>

            {/* 云状装饰 - 左侧 */}
            <div className="cloud-decoration cloud-left"></div>
            
            {/* 云状装饰 - 右侧 */}
            <div className="cloud-decoration cloud-right"></div>

            {/* 灯笼装饰 */}
            <div 
                ref={el => lanternsRef.current[0] = el}
                className="lantern lantern-1"
            ></div>
            <div 
                ref={el => lanternsRef.current[1] = el}
                className="lantern lantern-2"
            ></div>
            <div 
                ref={el => lanternsRef.current[2] = el}
                className="lantern lantern-3"
            ></div>
            <div 
                ref={el => lanternsRef.current[3] = el}
                className="lantern lantern-4"
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* 标题 */}
                <div ref={titleRef} className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-2" style={{ color: '#8B6F47' }}>
                        我们在这
                    </h2>
                </div>

                {/* 店铺信息网格 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* 总店 */}
                    <div ref={mainStoreRef} className="store-card">
                        <div className="store-card-inner">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#8B6F47' }}>
                                总店
                            </h3>
                            
                            {/* 地图 */}
                            <div className="map-wrapper mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5573740266547!2d103.77789087496756!3d1.4612851986216394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f89453e063%3A0x9c3c3c3c3c3c3c3c!2sMid%20Valley%20Southkey!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="总店地图"
                                ></iframe>
                            </div>

                            {/* 地址信息 */}
                            <div className="space-y-3 text-left">
                                <div className="info-row">
                                    <span className="font-semibold" style={{ color: '#8B6F47' }}>地址：</span>
                                    <span className="text-gray-700 text-sm md:text-base">
                                        T-042 Level 3, Mid Valley, The Mall, Southkey, 81100 Johor Bahru, Johor Darul Ta'zim
                                    </span>
                                </div>

                                <div className="info-row">
                                    <span className="font-semibold" style={{ color: '#8B6F47' }}>电话：</span>
                                    <a 
                                        href="tel:+60197108090" 
                                        className="text-gray-700 text-sm md:text-base hover:text-yellow-600 transition-colors"
                                    >
                                        +60 19-710 8090
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 分店 */}
                    <div ref={branchStoreRef} className="store-card">
                        <div className="store-card-inner">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#8B6F47' }}>
                                分店
                            </h3>
                            
                            {/* 地图 */}
                            <div className="map-wrapper mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5936837266755!2d103.7613471749675!3d1.4546513986346697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f4e7c8c8c3%3A0x9d9d9d9d9d9d9d9d!2sParadigm%20Mall%20Johor%20Bahru!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="分店地图"
                                ></iframe>
                            </div>

                            {/* 地址信息 */}
                            <div className="space-y-3 text-left">
                                <div className="info-row">
                                    <span className="font-semibold" style={{ color: '#8B6F47' }}>地址：</span>
                                    <span className="text-gray-700 text-sm md:text-base">
                                        Lot UG-25, Upper Ground Floor, Paradigm Mall, Lbh Skudai, Taman Bukit Mewah, 81200 Johor Bahru, Johor Darul Ta'zim
                                    </span>
                                </div>

                                <div className="info-row">
                                    <span className="font-semibold" style={{ color: '#8B6F47' }}>电话：</span>
                                    <a 
                                        href="tel:+60187738090" 
                                        className="text-gray-700 text-sm md:text-base hover:text-yellow-600 transition-colors"
                                    >
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


