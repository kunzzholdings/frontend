import React from 'react';
import '@/styles/animations.css';
import '@/styles/layout.css';
import '@/styles/theme.css';

const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    onClick,
    disabled = false,
    type = 'button',
    ...props 
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
        primary: 'bg-tokyo-gold text-white hover:bg-tokyo-gold-dark focus:ring-tokyo-gold shadow-tokyo hover:shadow-tokyo-lg',
        secondary: 'bg-white text-tokyo-gold border-2 border-tokyo-gold hover:bg-tokyo-gold hover:text-white focus:ring-tokyo-gold',
        outline: 'border-2 border-tokyo-gold text-tokyo-gold hover:bg-tokyo-gold hover:text-white focus:ring-tokyo-gold',
        ghost: 'text-tokyo-gold hover:bg-tokyo-gold hover:bg-opacity-10 focus:ring-tokyo-gold',
        glass: 'glass-effect text-white border border-white border-opacity-20 hover:bg-opacity-20 focus:ring-white'
    };
    
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl'
    };
    
    const variantClasses = variants[variant] || variants.primary;
    const sizeClasses = sizes[size] || sizes.md;
    
    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
