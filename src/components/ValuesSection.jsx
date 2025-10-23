import React, { useState } from 'react';
import { IMAGES } from '../config/images';

const ValuesSection = () => {
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (cardIndex) => {
        setActiveCard(activeCard === cardIndex ? null : cardIndex);
    };

    const values = [
        {
            title: '使命',
            content: '以极致的匠心和热情为每一位顾客呈现最正宗的日式料理体验我们致力于将传统日本饮食文化与现代创新完美融合'
        },
        {
            title: '愿景',
            content: '成为世界级的日料品牌让更多人感受到日本料理的精致与美好我们希望通过品越的服务和品质成为顾客心中最值得信赖的日式餐厅'
        },
        {
            title: '价值观',
            content: '专注品质追求完美尊重传统勇于创新我们相信细节决定成败每一个环节都精益求精为顾客创造难忘的用餐体验'
        },
        {
            title: '人品',
            content: '诚信为本匠心独运服务至上我们以最真诚的态度对待每一位顾客用心制作每一道料理让顾客感受到家一般的温暖和关怀'
        }
    ];

    return (
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-scroll flex items-center justify-center py-16 px-5 overflow-hidden"
             style={{backgroundImage: `url('${IMAGES.vision}')`}}>
            {/* 遮罩层 */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 z-10 pointer-events-none"></div>
            
            <div className={`relative z-20 flex flex-row items-center justify-center gap-5 transition-all duration-700 ${activeCard !== null ? 'has-active' : ''}`}>
                {values.map((value, index) => (
                    <div 
                        key={index}
                        className={`relative glass-effect rounded-2xl border border-white border-opacity-15 p-10 cursor-pointer transition-all duration-700 shadow-2xl vertical-text flex flex-col items-center justify-center h-96 w-24 flex-shrink-0 opacity-100 filter-none scale-100 ${
                            activeCard === index 
                                ? 'bg-white bg-opacity-15 scale-105 shadow-3xl opacity-100 filter-none z-10 w-72 border-white border-opacity-25' 
                                : 'bg-white bg-opacity-8'
                        }`}
                        onClick={() => toggleCard(index)}
                    >
                        <h3 className="text-4xl font-bold text-white tracking-widest text-shadow-lg transition-all duration-300 whitespace-nowrap text-center">
                            {value.title}
                        </h3>
                        <div className={`overflow-hidden transition-all duration-700 text-white text-base leading-relaxed tracking-wider text-shadow-sm mt-5 pt-5 border-t-2 border-white border-opacity-30 vertical-text transform ${
                            activeCard === index 
                                ? 'max-w-2xl opacity-100 translate-y-0' 
                                : 'max-w-0 opacity-0 translate-y-2'
                        }`}>
                            <p className="text-justify">{value.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ValuesSection;
