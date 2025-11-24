import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 transition-all duration-500 font-sans tracking-[0.15em] text-xs uppercase font-bold flex items-center justify-center gap-3 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gold-500 text-stone-950 hover:bg-white hover:text-stone-950 shadow-[0_0_20px_rgba(197,160,40,0.15)]",
    secondary: "bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-700",
    outline: "bg-transparent border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-stone-950 hover:border-gold-500",
    ghost: "bg-transparent text-stone-400 hover:text-gold-500 px-4"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;