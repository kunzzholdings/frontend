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
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.set(containerRef.current, { opacity: 0, y: 24 });
        gsap.to(containerRef.current, {
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
    }, []);

    return (
        <div className="map-section relative min-h-screen overflow-hidden z-base map-background" style={{ backgroundImage: `url('/assets/images/address.webp')` }}>
            <div className="relative z-overlay max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-black mb-6 text-shadow-lg">我们在这</h2>
            </div>
        </div>
    );
};

export default MapSection;


