import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useSmoothScroll = () => {
    useEffect(() => {
        const container = document.querySelector('.snap-container');
        if (!container) return;

        let isScrolling = false;
        let scrollTimeout;

        const handleWheel = (e) => {
            if (isScrolling) {
                e.preventDefault();
                return;
            }

            const delta = e.deltaY;
            const sections = document.querySelectorAll('.snap-section');
            const currentScroll = container.scrollTop;
            const viewportHeight = window.innerHeight;
            
            // 找到当前section
            let currentIndex = Math.round(currentScroll / viewportHeight);
            
            // 确定滚动方向
            if (delta > 0 && currentIndex < sections.length - 1) {
                // 向下滚动
                e.preventDefault();
                isScrolling = true;
                
                const targetIndex = currentIndex + 1;
                const targetPosition = targetIndex * viewportHeight;
                
                gsap.to(container, {
                    scrollTop: targetPosition,
                    duration: 1, // 调整这个值来控制滚动速度（秒）
                    ease: 'power2.inOut',
                    onComplete: () => {
                        isScrolling = false;
                    }
                });
            } else if (delta < 0 && currentIndex > 0) {
                // 向上滚动
                e.preventDefault();
                isScrolling = true;
                
                const targetIndex = currentIndex - 1;
                const targetPosition = targetIndex * viewportHeight;
                
                gsap.to(container, {
                    scrollTop: targetPosition,
                    duration: 1, // 调整这个值来控制滚动速度（秒）
                    ease: 'power2.inOut',
                    onComplete: () => {
                        isScrolling = false;
                    }
                });
            }

            // 清除之前的超时
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1500);
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
            clearTimeout(scrollTimeout);
        };
    }, []);
};

