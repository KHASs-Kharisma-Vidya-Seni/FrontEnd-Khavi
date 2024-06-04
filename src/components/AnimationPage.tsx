import { motion } from "framer-motion";

export default function AnimationPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      layout
      className="h-full w-full">
      {children}
    </motion.div>
  );
}
