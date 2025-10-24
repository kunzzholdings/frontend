"use client";

import React from 'react';
import Button from '../common/Button';
import Card from '../common/Card';
import FloatingElements from '../animations/FloatingElements';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';

const ExampleSection = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black flex-center py-16 px-5 overflow-hidden">
            {/* 浮动元素背景 */}
            <FloatingElements type="dots" count={15} speed={0.5} />
            
            <div className="max-w-6xl w-full relative z-overlay">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-6 text-shadow-lg">
                        新架构示例
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        展示 Tailwind CSS + 自定义 CSS 的完美结合
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 卡片示例 */}
                    <Card variant="glass" hover className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">玻璃效果</h3>
                        <p className="text-gray-300 mb-6">
                            使用自定义CSS实现的玻璃效果，结合Tailwind的布局系统
                        </p>
                        <Button variant="primary">了解更多</Button>
                    </Card>

                    <Card variant="tokyo" hover className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">东京主题</h3>
                        <p className="text-white mb-6">
                            使用主题变量定义的东京金色主题
                        </p>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tokyo-gold">
                            探索菜单
                        </Button>
                    </Card>

                    <Card variant="elevated" hover className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">动画效果</h3>
                        <p className="text-gray-600 mb-6">
                            结合GSAP和CSS动画的复杂交互效果
                        </p>
                        <Button variant="ghost">查看演示</Button>
                    </Card>
                </div>

                {/* 按钮展示 */}
                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-bold text-white mb-8">按钮变体展示</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="primary">主要按钮</Button>
                        <Button variant="secondary">次要按钮</Button>
                        <Button variant="outline">轮廓按钮</Button>
                        <Button variant="ghost">幽灵按钮</Button>
                        <Button variant="glass">玻璃按钮</Button>
                    </div>
                </div>

                {/* 布局工具展示 */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">布局工具展示</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white bg-opacity-10 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">精确定位</h4>
                            <div className="relative h-32 bg-gray-800 rounded">
                                <div className="absolute-center w-16 h-16 bg-tokyo-gold rounded-full"></div>
                            </div>
                            <p className="text-gray-300 mt-4">使用 .absolute-center 类实现完美居中</p>
                        </div>
                        
                        <div className="bg-white bg-opacity-10 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-white mb-4">响应式设计</h4>
                            <div className="flex-center h-32 bg-gray-800 rounded">
                                <div className="w-16 h-16 bg-tokyo-gold rounded-full animate-pulse-custom"></div>
                            </div>
                            <p className="text-gray-300 mt-4">结合Tailwind响应式类和自定义动画</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExampleSection;
