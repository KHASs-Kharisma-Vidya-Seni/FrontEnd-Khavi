import * as React from "react";
import { useController } from "react-hook-form";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border-2 border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-[#D9D9D9] text-lg text-[#2E323A]",
        secondary: "border-gray-500",
        tertiary: "border-green-500",
      },
      sizes: {
        default: "h-12",
        sm: "h-9",
        lg: "h-11",
        xl: "h-13sss",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      sizes: "default",
    },
  }
);

// ! Versi 1
// export interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// Input.displayName = "Input";

// export { Input };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, sizes, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, sizes, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
export { Input };
