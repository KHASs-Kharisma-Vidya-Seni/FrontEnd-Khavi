import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium ring-offset-background duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-400 text-white hover:bg-blue-500",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        "outline-white": "border border-white bg-transparent text-wild-sand-50 hover:bg-white hover:text-black",
        login: "bg-shark-50 text-shark-900 hover:bg-shark-500",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        logout: "bg-red-400 text-white hover:bg-red-500 transition-alls",
        update: "bg-shark-900 text-white hover:bg-shark-950",
        post: "bg-shark-900 hover:bg-shark-800 border border-white text-white",
        responsive_post: "bg-shark-900 hover:bg-shark-800 border-[1px] border-white text-white",
        auth: "mb-2 h-12 w-full rounded-lg bg-shark-900 text-base font-semibold text-white transition duration-300 transform hover:bg-gray-800 hover:shadow-md",
        "auth-google":
          "flex h-11 w-full items-center justify-center rounded-lg border-2 text-base font-semibold text-shark-900 transition duration-300 transform bg-gray-100 hover:bg-gray-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "py-2 px-10",
        icon: "h-10 w-10",
        post: " w-20 h-2.5 px-[1.1rem] py-[1.1rem] rounded-lg",
        responsive_post: " w-20 h-9 px-[1.1rem] py-3.5 rounded-lg text-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

// react-refresh/only-export-components

export { Button };
