import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  href,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-orange-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    ghost: 'text-secondary hover:bg-blue-50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const Component = href ? 'a' : 'button';
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Component 
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export default Button;
