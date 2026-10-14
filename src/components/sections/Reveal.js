"use client";

import { motion } from "framer-motion";

// Fade-up on scroll, used for cards and blocks across the page sections
export default function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
