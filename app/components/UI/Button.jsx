'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-300';
  
  const variantClasses = {
    primary: 'bg-primary-dark hover:bg-primary-darker text-white',
    secondary: 'bg-white hover:bg-gray-100 text-primary-dark border border-primary-dark',
    accent: 'bg-accent-DEFAULT hover:bg-accent-dark text-white',
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href="/"
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
}