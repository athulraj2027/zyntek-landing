import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Target, Users, Award } from "lucide-react";

const aboutContent = {
  title: "About Us",
  description: [
    "We are a team of passionate designers and developers dedicated to",
    "creating exceptional digital experiences that inspire and engage.",
  ],
  values: [
    {
      title: "Passion",
      description:
        "We pour our heart into every project, ensuring exceptional results.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Precision",
      description:
        "Attention to detail is at the core of everything we create.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with clients to bring their vision to life.",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work.",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
    },
  ],
};

const ValueCard = ({ value, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = value.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0, rotateY: -30 }}
      animate={
        isInView
          ? { y: 0, opacity: 1, rotateY: 0 }
          : { y: 80, opacity: 0, rotateY: -30 }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="relative bg-purple-950/50 rounded-lg overflow-hidden border-none group cursor-pointer"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
        className={`absolute inset-0 bg-gradient-to-br ${value.color}`}
      />

      {/* Animated border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} origin-left`}
      />

      <div className="relative p-6">
        {/* Icon with animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200,
          }}
          className="mb-4"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <Icon
              className="text-purple-500 group-hover:text-purple-400 transition-colors"
              size={40}
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
          className="text-2xl font-bold text-purple-800 mb-3 group-hover:text-purple-700 transition-colors"
        >
          {value.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
          className="text-purple-600 text-md group-hover:text-purple-500 transition-colors"
        >
          {value.description}
        </motion.p>
      </div>

      {/* Corner decoration */}
      <motion.div
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${value.color} opacity-20 rounded-tl-full`}
      />
    </motion.div>
  );
};

const AboutUs = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isDescInView = useInView(descRef, { once: true, amount: 0.5 });

  return (
    <div className="max-w-7xl mx-auto px-6 py-16" id="about">
      {/* Title Animation */}
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={
          isTitleInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -50, scale: 0.9 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl tracking-tighter font-extrabold text-center mb-12 text-purple-800"
      >
        {aboutContent.title}
      </motion.h2>

      {/* Description Animation */}
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isDescInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center text-purple-900"
      >
        {aboutContent.description.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={
              isDescInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }
            }
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {aboutContent.values.map((value, index) => (
          <ValueCard key={index} value={value} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
