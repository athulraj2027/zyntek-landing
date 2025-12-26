"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Heart,
} from "lucide-react";

const footerContent = {
  brand: {
    name: "Zyntek",
    tagline: "Building the future, one line at a time",
  },
  contact: {
    title: "Get in Touch",
    items: [
      { icon: Mail, text: "hello@zyntek.com", link: "mailto:hello@zyntek.com" },
      { icon: Phone, text: "+1 (555) 123-4567", link: "tel:+15551234567" },
      { icon: MapPin, text: "San Francisco, CA", link: "#" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    items: [
      { text: "About Us", link: "#about" },
      { text: "Services", link: "#services" },
      { text: "Portfolio", link: "#portfolio" },
      { text: "Contact", link: "#contact" },
    ],
  },
  social: {
    title: "Follow Us",
    items: [
      { icon: Github, link: "https://github.com", label: "Github" },
      { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: Twitter, link: "https://twitter.com", label: "Twitter" },
    ],
  },
  copyright: "Copyright © 2025 Zyntek. All rights reserved.",
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full flex justify-center px-4 py-10">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-7xl bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 p-10 rounded-2xl shadow-2xl relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
        />

        <div className="relative z-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              >
                {footerContent.brand.name}
              </motion.h1>
              <p className="text-purple-300 text-sm leading-relaxed">
                {footerContent.brand.tagline}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-purple-400 text-sm"
              >
                Made with{" "}
                <Heart size={14} className="text-red-400 fill-red-400" /> by
                developers
              </motion.div>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold text-purple-300 mb-4">
                {footerContent.contact.title}
              </h3>
              <div className="space-y-3">
                {footerContent.contact.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ x: 5, color: "#c084fc" }}
                      className="flex items-center gap-3 text-purple-400 text-sm group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={16} />
                      </motion.div>
                      <span className="group-hover:underline">{item.text}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold text-purple-300 mb-4">
                {footerContent.quickLinks.title}
              </h3>
              <div className="space-y-3">
                {footerContent.quickLinks.items.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    whileHover={{ x: 5, color: "#c084fc" }}
                    className="block text-purple-400 text-sm hover:underline cursor-pointer"
                  >
                    {item.text}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold text-purple-300 mb-4">
                {footerContent.social.title}
              </h3>
              <div className="flex gap-4">
                {footerContent.social.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 flex items-center justify-center bg-purple-800/50 rounded-full text-purple-300 hover:bg-purple-700 hover:text-white transition-colors cursor-pointer"
                      aria-label={item.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"
          />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-purple-400 text-sm text-center md:text-left">
              {footerContent.copyright}
            </p>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center bg-purple-700 hover:bg-purple-600 rounded-full text-white shadow-lg hover:shadow-purple-500/50 transition-all cursor-pointer group"
              aria-label="Scroll to top"
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
