import type { ReactNode } from "react";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",

  secondary: "bg-slate-800 text-white hover:bg-slate-700",

  outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizeStyle: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-xl",
  xl: "text-2xl",
};

const Button = ({
  children = "Button",
  onClick,
  variant = "primary",
  disabled = false,
  size = "sm",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` px-4 py-2  font-medium transition active:scale-90 ${variantStyles[variant]} disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer rounded-full ${sizeStyle[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
