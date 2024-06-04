// import { motion } from "framer-motion";

// export default function Transition({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       {children}
//       <motion.div
//         initial={{ scaleY: 0 }}
//         animate={{
//           scaleY: 0,
//         }}
//         exit={{ scaleY: 1 }}
//         transition={{
//           duration: 1.5,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="fixed left-0 top-0 h-screen w-full origin-bottom bg-black z-20"
//       />
//       <motion.div
//         initial={{ scaleY: 1 }}
//         animate={{
//           scaleY: 0,
//         }}
//         exit={{ scaleY: 0 }}
//         transition={{
//           duration: 1.5,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="fixed left-0 top-0 h-screen w-full origin-top bg-black z-20"
//       />
//     </>
//   );
// }

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
        initial={{ clipPath: "inset(0 0 48% 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-20 h-screen w-full bg-black"
      />
      <motion.div
        initial={{ clipPath: "inset(48% 0 0 0)" }}
        animate={{ clipPath: "inset(100% 0 0 0)" }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-20 h-screen w-full bg-black"
      />
    </>
  );
}
