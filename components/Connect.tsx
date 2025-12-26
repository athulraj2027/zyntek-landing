import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const connectContent = {
  title: "Let's Connect",
  fields: [
    {
      name: "name",
      placeholder: "Name",
      type: "input",
      icon: User,
    },
    {
      name: "email",
      placeholder: "Email address",
      type: "input",
      icon: Mail,
    },
    {
      name: "message",
      placeholder: "Description",
      type: "textarea",
      icon: MessageSquare,
    },
  ],
  button: {
    text: "Send Message",
    icon: Send,
  },
};

const Connect = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div
      className="max-w-7xl mx-auto flex flex-col justify-center items-center px-6 py-16"
      id="contact"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.8, y: -30 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl font-extrabold text-center mb-12 tracking-tighter text-purple-800"
      >
        {connectContent.title}
      </motion.h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative bg-purple-950 max-w-2xl w-full border-none p-8 rounded-xl shadow-2xl overflow-hidden"
      >
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="relative z-10 space-y-5">
          <motion.div variants={itemVariants} className="flex gap-5">
            {connectContent.fields.slice(0, 2).map((field, index) => {
              const Icon = field.icon;
              return (
                <motion.div
                  key={field.name}
                  className="flex-1 relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    initial={{ scale: 0, x: -10 }}
                    animate={
                      isInView ? { scale: 1, x: 0 } : { scale: 0, x: -10 }
                    }
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.4,
                      type: "spring",
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <Icon className="text-purple-600" size={18} />
                  </motion.div>

                  <input
                    type={field.name === "email" ? "email" : "text"}
                    placeholder={field.placeholder}
                    className="w-full pl-10 pr-4 py-3 bg-purple-900/50 border-2 border-purple-800 rounded-lg text-purple-100 placeholder:text-purple-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              initial={{ scale: 0, x: -10 }}
              animate={isInView ? { scale: 1, x: 0 } : { scale: 0, x: -10 }}
              transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
              className="absolute left-3 top-4 pointer-events-none"
            >
              <MessageSquare className="text-purple-600" size={18} />
            </motion.div>

            <motion.textarea
              placeholder={connectContent.fields[2].placeholder}
              rows={5}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="w-full pl-10 pr-4 py-3 bg-purple-900/50 border-2 border-purple-800 rounded-lg text-purple-100 placeholder:text-purple-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-linear-to-r from-purple-400 to-purple-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">
                {connectContent.button.text}
              </span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Send size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Connect;
