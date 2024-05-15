import { motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: 0,
        }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 h-screen w-full origin-bottom bg-black"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{
          scaleY: 0,
        }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 h-screen w-full origin-top bg-black"
      />
    </>
  );
}
