import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ChildrenReact {
  children: React.ReactNode;
  style?: any;
  className?: string;
}

export const ImageAnimate = ({ children, style }: ChildrenReact) => {
  return (
    <motion.div
      initial={{
        scale: 1.5,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        delay: 0.25,
        duration: 1.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export const HideAnimate = () => {
  const animate = {
    initial: {
      width: '100%',
    },
    animate: {
      width: '0%',
      opacity: 1,
    },

    transition: {
      duration: 1.4,
      ease: [0.79, 0.08, 0.35, 0.65],
    },
  };
  // ease: [0.79, 0.08, 0.35, 0.65],
  return (
    <motion.div
      initial={animate.initial}
      animate={animate.animate}
      transition={animate.transition}
      className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl"
    />
  );
};

export const FormAnimate = ({ children, className }: ChildrenReact) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: 'easeOut',
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
