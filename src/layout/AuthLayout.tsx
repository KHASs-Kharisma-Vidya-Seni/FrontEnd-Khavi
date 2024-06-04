import { cn } from "@/lib/utils";
import React from "react";

export default function AuthLayout({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <main className={cn(className)}>{children}</main>;
}
