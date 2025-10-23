import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../config/images';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const aboutContainerRef = useRef(null);
    const aboutImageRef = useRef(null);

    useEffect(() => {
        gsap.to(aboutContainerRef.current, {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        });

        gsap.to(aboutImageRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 50%',
                toggleActions: 'play none none none'
            }
        });
    }, []);

    return (
        <div className="relative min-h-screen bg-white overflow-hidden flex items-center z-[100] mt-[150vh]">
            <div className="w-full h-screen flex items-center opacity-0" ref={aboutContainerRef}>
                {/* 左侧图片 */}
                <div className="flex-1 h-screen relative -translate-x-full opacity-0 overflow-hidden" ref={aboutImageRef}>
                    <img src={IMAGES.chef} alt="日本料理制作" className="w-full h-full object-cover brightness-70" />
                    <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-r from-transparent to-white z-10"></div>
                </div>

                {/* 右侧内容 */}
                <div className="flex-1 relative text-left py-20 px-16 h-screen flex flex-col justify-center z-20 bg-white">
                    <h2 className="text-5xl font-bold text-black mb-10 relative inline-block tracking-wider">关于我们</h2>
                    <p className="text-lg leading-relaxed text-gray-800 text-left max-w-2xl">
                        我们是一家致力于提供精致料理与品越服务的日式料理餐厅。以极致的匠心打造美食。严选当季新鲜食材,融合传统与创意,呈现日本料理美。
                        餐厅环境清雅舒适,充满日式格调。宾客在此不仅能品味精妙料理,更能感受到细致入微的服务与文化魅力。我们立志将每一次用餐变成难忘的美食之旅,
                        以品越的服务和精致的料理成为世界级日料品牌。
                    </p>
                </div>
            </div>

            {/* 樱花装饰 */}
            <div className="absolute -right-24 top-0 w-96 h-full pointer-events-none z-20 opacity-80">
                <div className="absolute right-0 top-0 w-full h-full bg-no-repeat bg-contain bg-right-center" 
                     style={{backgroundImage: `url('${IMAGES.blossom}')`}}></div>
                {/* 樱花花瓣 */}
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 left-0 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[0]}')`, animationDuration: '8s', animationDelay: '0s', width: '35px', height: '35px'}}></div>
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 -left-16 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[1]}')`, animationDuration: '10s', animationDelay: '1s', width: '42px', height: '42px'}}></div>
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 left-1/2 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[2]}')`, animationDuration: '9s', animationDelay: '2s', width: '38px', height: '38px'}}></div>
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 left-16 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[3]}')`, animationDuration: '11s', animationDelay: '0.5s', width: '40px', height: '40px'}}></div>
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 left-4/5 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[4]}')`, animationDuration: '8.5s', animationDelay: '1.5s', width: '36px', height: '36px'}}></div>
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 left-1/2 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[5]}')`, animationDuration: '10.5s', animationDelay: '2.5s', width: '44px', height: '44px'}}></div>
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 left-1/3 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[6]}')`, animationDuration: '9.5s', animationDelay: '0.8s', width: '37px', height: '37px'}}></div>
                <div className="absolute w-10 h-10 bg-cover bg-center bg-no-repeat animate-fall rounded-full opacity-70 left-1/4 top-0" 
                     style={{backgroundImage: `url('${IMAGES.petals[7]}')`, animationDuration: '11.5s', animationDelay: '1.8s', width: '41px', height: '41px'}}></div>
            </div>
        </div>
    );
};

export default AboutSection;
