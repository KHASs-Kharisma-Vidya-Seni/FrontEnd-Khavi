import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ChildrenReact {
  children: React.ReactNode;
  style?: any;
  className?: string;
}

interface ChildrenReactWithImage extends Omit<ChildrenReact, "style" | "children"> {
  src: string;
  index?: number;
}

export const ImageAnimate = ({ src, className, index }: ChildrenReactWithImage) => {
  const calculateDuration = (index: number) => {
    const initialDuration = 1.3; // Durasi awal animasi
    const decimalIncrement = 0.1; // Nilai penambahan desimal durasi setiap kali index bertambah satu
    return initialDuration + decimalIncrement * index;
  };
  const animate = {
    initial: {
      scale: 1.5,
    },
    animate: (index: number) => ({
      scale: 1,
      transition: {
        delay: index === 0 ? 0.3 : 0.3 * index, // Menetapkan delay ke 0.3 jika index adalah 0
        duration: index === 0 ? 1.3 : calculateDuration(index), // Menggunakan durasi baru berdasarkan index
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };
  return (
    <motion.img
      variants={animate}
      initial="initial"
      animate="animate"
      custom={index}
      src={src}
      style={{ objectPosition: "top center" }}
      className={cn("h-full w-full overflow-hidden object-cover grayscale filter", className)}
    />
  );
};

export const HideAnimate = ({ i }: { i?: number }) => {
  const animate = {
    initial: {
      opacity: 1,
      y: 0,
      // width: '100%',
    },
    // animate: {
    //   // width: '0%',
    //   opacity: 1,
    //   y: '100%',
    // },
    // transition: {
    //   duration: 1.4,
    //   ease: [0.79, 0.08, 0.35, 0.65],
    // },
    animate: (index: number) => ({
      opacity: 1,
      y: "100%",
      transition: {
        duration: 1.4,
        ease: [0.79, 0.08, 0.35, 0.65],
        delay: 0.2 * index,
      },
    }),
  };
  // ease: [0.79, 0.08, 0.35, 0.65],
  return (
    <motion.div
      variants={animate}
      initial="initial"
      animate="animate"
      custom={i}
      className="absolute left-0 top-0 h-full w-full bg-white"
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
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

// ! Temp
// export const ImageAnimateTemp = ({ children, style }: ChildrenReact) => {
//   return (
//     <motion.div
//       initial={{
//         scale: 1.5,
//       }}
//       animate={{
//         scale: 1,
//       }}
//       transition={{
//         delay: 0.25,
//         duration: 1.3,
//         ease: [0.4, 0, 0.2, 1],
//       }}
//       style={style}
//     >
//       {children}
//     </motion.div>
//   );
// };
