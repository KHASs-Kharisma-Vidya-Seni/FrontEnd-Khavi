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
      transition={{
        delay: 0.2,
      }}
      className="h-full w-full">
      {children}
    </motion.div>
  );
}
