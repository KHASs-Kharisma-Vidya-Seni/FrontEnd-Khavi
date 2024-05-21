import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("container font-serif", className)}>
      {children}
    </section>
  );
}
