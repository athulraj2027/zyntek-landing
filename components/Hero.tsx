import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  //   const buttonVariants = {
  //     hover: {
  //       scale: 1.05,
  //       boxShadow: "0px 15px 30px rgba(126, 58, 237, 0.4)",
  //       transition: {
  //         duration: 0.3,
  //         yoyo: Infinity,
  //       },
  //     },
  //     tap: { scale: 0.95 },
  //   };

  // Blinking star variants
  const starVariants = {
    initial: { opacity: 0, scale: 0, rotate: 0 },
    animate: {
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut" as const,
      },
    },
  };

  // Different stars with different delays
  const stars = [
    { top: "15%", left: "10%", delay: 0, size: 24 },
    { top: "25%", right: "15%", delay: 0.8, size: 20 },
    { top: "60%", left: "20%", delay: 1.6, size: 28 },
    { top: "70%", right: "25%", delay: 0.4, size: 22 },
    { top: "40%", left: "5%", delay: 1.2, size: 18 },
  ];

  return (
    <div
      id="home"
      className="relative flex flex-col gap-8 justify-center items-center min-h-screen text-center mt-[10%] lg:mt-0 px-4 overflow-hidden"
    >
      {/* Blinking Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          variants={starVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: star.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            right: star.right,
          }}
          className="text-purple-500"
        >
          <Sparkles size={star.size} fill="currentColor" />
        </motion.div>
      ))}

      {/* Floating gradient orbs in background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl"
      />

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:w-325 gap-8 items-center"
      >
        <motion.h1
          variants={itemVariants}
          className="tracking-tight text-5xl sm:text-6xl font-extrabold text-purple-700 sm:w-[60%] md:w-[50%] mx-[10%] leading-tight"
        >
          We Build. We Scale.
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white block"
          >
            Web Products That Perform.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl tracking-tighter font-light text-purple-700 mx-[10%] sm:w-[80%] md:w-[45%]"
        >
          We are a freelance engineering team crafting high-performance web
          applications with modern UI, real-time features, and scalable
          architectures
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-12 py-3 text-white font-bold bg-purple-900 rounded-full shadow-[0px_10px_20px_rgba(0,0,0,0.1)] border border-purple-800 shadow-purple-800 relative overflow-hidden group"
        >
          <motion.span
            className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-800"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Book a call</span>
        </motion.button>

        <motion.hr
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "25%", opacity: 0.2 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="border-t-2 border-[#222222] my-6 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
