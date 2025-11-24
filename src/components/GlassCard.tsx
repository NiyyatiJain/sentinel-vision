import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard = ({ children, className, hover = true, glow = false }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        hover && "hover:shadow-glow cursor-pointer",
        glow && "shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
