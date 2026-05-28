import React, { Children } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'article';
  once?: boolean;
  amount?: number | 'some' | 'all';
}
/**
 * Drop-in scroll-reveal wrapper. Fades + lifts content as it enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
  once = true,
  amount = 0.2
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduce ? 0 : y
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const MotionTag = motion[as] as any;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once,
        amount
      }}
      variants={variants}>
      
      {children}
    </MotionTag>);

}
/**
 * Stagger container for animating a list of children in sequence.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  amount = 0.15






}: {children: React.ReactNode;className?: string;stagger?: number;delay?: number;amount?: number;}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay
          }
        }
      }}>
      
      {children}
    </motion.div>);

}
export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};