"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

const navContent = {
  brand: "Zyntek",
  links: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
   
  ],
  cta: {
    text: "Get Started",
    href: "#contact",
  },
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const { scrollY } = useScroll();

  // Transform navbar based on scroll
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navScale = useTransform(scrollY, [0, 100], [0.95, 1]);

  const handleLinkClick = (linkName, href) => {
    setActiveLink(linkName);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ opacity: navOpacity, scale: navScale }}
        className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 shadow-[0px_10px_30px_rgba(88,28,135,0.3)] rounded-full px-8 py-3 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-2 border-purple-600/50 backdrop-blur-xl"
      >
        {/* Animated background glow */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.3)",
              "0 0 40px rgba(168, 85, 247, 0.5)",
              "0 0 20px rgba(168, 85, 247, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
        />

        <div className="relative flex items-center gap-8">
          {/* Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 mr-4 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles
                className="text-purple-400"
                size={20}
                fill="currentColor"
              />
            </motion.div>
            <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              {navContent.brand}
            </span>
          </motion.div>

          {/* Navigation Links */}
          <ul className="flex gap-1">
            {navContent.links.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <motion.a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.name, link.href);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer block ${
                    activeLink === link.name
                      ? "text-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {activeLink === link.name && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-purple-600/40 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.a
            href={navContent.cta.href}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white rounded-full font-bold text-sm overflow-hidden group cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">{navContent.cta.text}</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="md:hidden fixed top-5 left-4 right-4 z-50 shadow-[0px_10px_30px_rgba(88,28,135,0.3)] rounded-full px-6 py-3 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 border-2 border-purple-600/50 backdrop-blur-xl"
      >
        {/* Animated background glow */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(168, 85, 247, 0.3)",
              "0 0 40px rgba(168, 85, 247, 0.5)",
              "0 0 20px rgba(168, 85, 247, 0.3)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
        />

        <div className="relative flex items-center justify-center">
          {/* Navigation Links */}
          <ul className="flex gap-4">
            {navContent.links.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <motion.a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.name, link.href);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer block ${
                    activeLink === link.name
                      ? "text-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {activeLink === link.name && (
                    <motion.div
                      layoutId="activeMobileNav"
                      className="absolute inset-0 bg-purple-600/40 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
