import React from 'react';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';

const Card = ({ 
    children, 
    variant = 'default', 
    className = '', 
    hover = false,
    glass = false,
    ...props 
}) => {
    const baseClasses = 'rounded-lg transition-all duration-300';
    
    const variants = {
        default: 'bg-white shadow-md hover:shadow-lg',
        elevated: 'bg-white shadow-lg hover:shadow-xl',
        outlined: 'bg-white border-2 border-gray-200 hover:border-tokyo-gold',
        filled: 'bg-gray-50 hover:bg-gray-100',
        tokyo: 'bg-tokyo-gold text-white shadow-tokyo hover:shadow-tokyo-lg'
    };
    
    const hoverClasses = hover ? 'hover-lift' : '';
    const glassClasses = glass ? 'glass-effect' : '';
    
    const variantClasses = variants[variant] || variants.default;
    
    return (
        <div
            className={`${baseClasses} ${variantClasses} ${hoverClasses} ${glassClasses} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
