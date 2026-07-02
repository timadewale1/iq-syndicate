import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary: `
      bg-primary
      text-white
      hover:bg-primary-light
      border-transparent
    `,

    secondary: `
      border
      border-border
      text-charcoal
      hover:bg-sand
    `,
  };

  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        px-6
        py-3
        text-sm
        font-medium
        tracking-wide
        transition-all
        duration-300
        ease-premium
        ${styles[variant]}
      `}
    >
      {children}
    </Link>
  );
}
