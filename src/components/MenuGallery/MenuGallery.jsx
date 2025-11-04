"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './MenuGallery.css';

gsap.registerPlugin(Draggable);

const MenuGallery = ({ category, menuType }) => {
    const galleryRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const draggableInstance = useRef(null);

    useEffect(() => {
        loadMenuImages();
    }, [category, menuType]);

    useEffect(() => {
        if (images.length > 0) {
            const timer = setTimeout(() => {
                initGSAPDraggable();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [images]);

    // 清理 Draggable 实例
    useEffect(() => {
        return () => {
            if (draggableInstance.current) {
                draggableInstance.current[0].kill();
            }
        };
    }, []);

    const loadMenuImages = async () => {
        setLoading(true);
        const baseUrl = `/assets/images/${menuType}/${category}/`;
        const imageList = Array.from({ length: 20 }, (_, i) => `${i + 1}.jpg`);
        const loadedImages = [];

        for (const imageFile of imageList) {
            const imageUrl = `${baseUrl}${imageFile}`;
            try {
                const response = await fetch(imageUrl, { method: 'HEAD' });
                if (response.ok) {
                    loadedImages.push(imageUrl);
                }
            } catch (error) {
                continue;
            }
        }

        setImages(loadedImages);
        setLoading(false);
    };

    const initGSAPDraggable = () => {
        const gallery = galleryRef.current;
        const container = containerRef.current;
        
        if (!gallery || !container) return;

        const galleryWidth = gallery.offsetWidth;
        const containerWidth = container.scrollWidth;
        const maxDrag = Math.max(0, containerWidth - galleryWidth);

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
            initTouchScroll();
        } else {
            draggableInstance.current = Draggable.create(container, {
                type: "x",
                bounds: { minX: -maxDrag, maxX: 0 },
                inertia: true,
                dragResistance: 0.1,
                throwResistance: 2000,
            });
        }

        // 鼠标滚轮水平滚动
        const handleWheel = (e) => {
            e.preventDefault();
            const currentX = gsap.getProperty(container, "x") || 0;
            const newX = Math.max(-maxDrag, Math.min(0, currentX - e.deltaY * 0.5));
            gsap.to(container, { x: newX, duration: 0.3, ease: "power2.out" });
        };

        gallery.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            gallery.removeEventListener('wheel', handleWheel);
        };
    };

    const initTouchScroll = () => {
        const gallery = galleryRef.current;
        const container = containerRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        const handleTouchStart = (e) => {
            isDown = true;
            startX = e.touches[0].pageX - gallery.offsetLeft;
            scrollLeft = gsap.getProperty(container, "x") || 0;
        };

        const handleTouchEnd = () => {
            isDown = false;
        };

        const handleTouchMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - gallery.offsetLeft;
            const walk = (x - startX) * 1.5;
            const newX = scrollLeft + walk;

            const galleryWidth = gallery.offsetWidth;
            const containerWidth = container.scrollWidth;
            const maxDrag = Math.max(0, containerWidth - galleryWidth);
            const boundedX = Math.max(-maxDrag, Math.min(0, newX));

            gsap.set(container, { x: boundedX });
        };

        gallery.addEventListener('touchstart', handleTouchStart);
        gallery.addEventListener('touchend', handleTouchEnd);
        gallery.addEventListener('touchmove', handleTouchMove, { passive: false });
    };

    return (
        <div className="menu-gallery" ref={galleryRef}>
            <div className="menu-gallery-container" ref={containerRef}>
                {loading ? (
                    <div className="loading">正在加载菜单图片...</div>
                ) : images.length > 0 ? (
                    images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`菜单页面 ${index + 1}`}
                            className="menu-image"
                        />
                    ))
                ) : (
                    <div className="loading">未找到菜单图片</div>
                )}
            </div>
        </div>
    );
};

export default MenuGallery;

