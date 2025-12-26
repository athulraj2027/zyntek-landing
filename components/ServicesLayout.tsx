import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Code2, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description:
      "Create stunning, user-friendly websites that captivate your audience and drive conversions. From wireframes to final design, we bring your vision to life.",
    icon: Palette,
  },
  {
    title: "Full-Stack Development",
    description:
      "Build scalable web applications with modern technologies. We handle everything from database architecture to responsive frontends.",
    icon: Code2,
  },
  {
    title: "Mobile Solutions",
    description:
      "Deliver seamless mobile experiences across iOS and Android platforms. Native performance with cross-platform efficiency.",
    icon: Smartphone,
  },
];

const ServiceCard = ({ service, index }: { service: any; index: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-900 to-purple-950"
    >
      {/* Background with transition */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{
          duration: 0.7,
          delay: index * 0.2 + 0.2,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-purple-950 origin-bottom z-10"
      />

      {/* Content */}
      <div className="relative z-20 p-8 pt-12 text-center min-h-[320px] flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.2 + 0.3,
            ease: "easeOut",
          }}
          className="mb-6"
        >
          <motion.div
            initial={{ color: "#ffffff" }}
            animate={isInView ? { color: "#7c3aed" } : { color: "#ffffff" }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          >
            <Icon size={64} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ color: "#e5e7eb" }}
          animate={isInView ? { color: "#7c3aed" } : { color: "#e5e7eb" }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className="text-2xl font-bold mb-4"
        >
          {service.title}
        </motion.h3>

        <motion.p
          initial={{ color: "#d1d5db" }}
          animate={isInView ? { color: "#6B21A8" } : { color: "#d1d5db" }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className="text-md font-medium "
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ServicesLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16" id="services">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl tracking-tighter font-extrabold text-center mb-12 text-purple-800"
      >
        What We Offer
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesLayout;
