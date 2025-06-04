'use client'
import { motion } from 'framer-motion';

export default function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}