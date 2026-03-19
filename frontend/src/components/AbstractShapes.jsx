import React from 'react';
import { motion } from 'framer-motion';

const AbstractShapes = () => {
  return (
    <>
      {/* Floating gradient blobs */}
      <motion.div
        className="blob-shape w-96 h-96 bg-gradient-to-br from-secondary/20 to-accent/20"
        style={{ top: '10%', left: '5%' }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="blob-shape w-80 h-80 bg-gradient-to-br from-accent/20 to-highlight/20"
        style={{ top: '50%', right: '10%' }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="blob-shape w-64 h-64 bg-gradient-to-br from-highlight/20 to-secondary/20"
        style={{ bottom: '20%', left: '15%' }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Soft blurred circles */}
      <motion.div
        className="blob-shape w-72 h-72 bg-gradient-to-br from-blue-300/10 to-orange-300/10"
        style={{ top: '30%', right: '30%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="blob-shape w-56 h-56 bg-gradient-to-br from-green-300/10 to-blue-300/10"
        style={{ bottom: '30%', right: '20%' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
    </>
  );
};

export default AbstractShapes;
