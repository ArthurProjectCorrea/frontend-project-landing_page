"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colorMap = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
};

export default function Alert({ message, type = "info", duration = 3000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white font-medium rounded-lg shadow-lg z-[9999] ${colorMap[type]}`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
