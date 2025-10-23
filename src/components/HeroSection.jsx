import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../config/images';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const sceneRef = useRef(null);
    const contentOverlayRef = useRef(null);
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const door1Ref = useRef(null);
    const door2Ref = useRef(null);
    const door3Ref = useRef(null);
    const door4Ref = useRef(null);
    const backgroundRef = useRef(null);
    const restaurantImageRef = useRef(null);
    const scrollHintRef = useRef(null);

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

        gsap.set([titleRef.current], {
            opacity: 0
        });

        gsap.set(subtitleRef.current, {
            opacity: 0
        });

        // 创建时间线 - 推门动画
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.scroll-container',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            }
        });

        // 门打开动画
        tl.to(door2Ref.current, {
            x: '-100%',
            scale: 1.3,
            duration: 1.5,
            ease: 'power2.inOut'
        }, 0)
        .to(door3Ref.current, {
            x: '100%',
            scale: 1.3,
            duration: 1.5,
            ease: 'power2.inOut'
        }, 0)
        .to(door1Ref.current, {
            scale: 1.3,
            duration: 1.5,
            ease: 'power2.inOut'
        }, 0)
        .to(door4Ref.current, {
            scale: 1.3,
            duration: 1.5,
            ease: 'power2.inOut'
        }, 0)
        
        // 背景内容显示并放大
        .to(backgroundRef.current, {
            opacity: 1,
            scale: 1.4,
            duration: 1.5,
            ease: 'power2.out'
        }, 0)
        .to(restaurantImageRef.current, {
            scale: 1.3,
            duration: 1.5,
            ease: 'power2.out'
        }, 0)
        
        // Logo缩小
        .to(logoRef.current, {
            width: 120,
            height: 120,
            duration: 1.5,
            ease: 'power2.out'
        }, 0)
        
        // 整体内容放大
        .to(contentOverlayRef.current, {
            scale: 1.15,
            duration: 1.5,
            ease: 'power2.out'
        }, 0.2)
        
        // 标题渐显
        .to(titleRef.current, {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        }, 0.3)
        .to(subtitleRef.current, {
            opacity: 0.9,
            duration: 0.8,
            ease: 'power2.out'
        }, 1.6)
        
        // 滚动提示淡出
        .to(scrollHintRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
        }, 2.0);

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

        // 当滚动超过第一页后，让 scene 不影响后续内容
        ScrollTrigger.create({
            trigger: '.scroll-container',
            start: 'bottom top',
            onEnter: () => {
                gsap.set(sceneRef.current, { pointerEvents: 'none', zIndex: -1 });
            },
            onLeaveBack: () => {
                gsap.set(sceneRef.current, { pointerEvents: 'auto', zIndex: 1 });
            }
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="h-[200vh] relative">
            <div className="h-screen fixed top-0 left-0 w-full overflow-hidden z-10" ref={sceneRef}>
                {/* 背景内容 */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center opacity-50 scale-100" ref={backgroundRef}>
                    <img 
                        src={IMAGES.tokyoRestaurant} 
                        alt="Japanese Restaurant" 
                        className="w-full h-full object-cover brightness-60 scale-100"
                        ref={restaurantImageRef}
                    />
                </div>

                {/* Logo和标题 */}
                <div className="absolute top-1/2 left-1/2 text-center text-white z-[25] opacity-100" ref={contentOverlayRef}>
                    <div className="w-32 h-32 bg-tokyo-gold rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl overflow-hidden" ref={logoRef}>
                        <img src={IMAGES.tokyoLogo} alt="Tokyo Logo" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-6xl font-bold tracking-widest mb-5 text-shadow-lg" ref={titleRef}>TOKYO JAPANESE CUISINE</h1>
                    <p className="text-2xl tracking-wider mb-2 opacity-90" ref={subtitleRef}>精致美食·品越服务</p>
                    <p className="text-2xl tracking-wider mb-2 opacity-90" ref={subtitleRef}>成就世界级日料品牌</p>
                </div>

                {/* 四个门 */}
                <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center" 
                         style={{backgroundImage: `url('${IMAGES.shoji}')`}} ref={door1Ref}></div>
                    <div className="absolute top-0 left-1/4 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center" 
                         style={{backgroundImage: `url('${IMAGES.shoji}')`}} ref={door2Ref}></div>
                    <div className="absolute top-0 left-1/2 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center" 
                         style={{backgroundImage: `url('${IMAGES.shoji}')`}} ref={door3Ref}></div>
                    <div className="absolute top-0 right-0 w-1/4 h-full bg-cover bg-center overflow-hidden shadow-inner origin-center" 
                         style={{backgroundImage: `url('${IMAGES.shoji}')`}} ref={door4Ref}></div>
                </div>

                {/* 滚动提示 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 text-sm tracking-wider z-[26] animate-bounce-slow" ref={scrollHintRef}>
                    <div className="w-6 h-9 border-2 border-gray-900 rounded-xl mx-auto mb-2 relative">
                        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-900 rounded-sm animate-scroll"></div>
                    </div>
                    向下滚动
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
