import {
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";


// ======================================
// 1. TYPES
// ======================================

type IconButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success";

type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children"> {

  icon: ReactNode;

  variant?: IconButtonVariant;
  size?: IconButtonSize;

  tooltip?: string;
  badge?: string | number;

  loading?: boolean;
  fullWidth?: boolean;

  className?: string;

  "aria-label": string;
}


// ======================================
// 2. VARIANT STYLES
// ======================================

const variantStyles: Record<IconButtonVariant, string> = {
  primary:
    "bg-indigo-600 text-white border-transparent hover:bg-indigo-700 shadow-sm shadow-indigo-200",

  secondary:
    "bg-slate-900 text-white border-transparent hover:bg-slate-800",

  outline:
    "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300",

  ghost:
    "bg-transparent text-slate-500 border-transparent hover:bg-slate-100 hover:text-slate-900",

  danger:
    "bg-red-50 text-red-600 border-red-100 hover:bg-red-100",

  success:
    "bg-emerald-600 text-white border-transparent hover:bg-emerald-700",
};


// ======================================
// 3. SIZE STYLES
// ======================================

const sizeStyles: Record<IconButtonSize, string> = {
  sm: "h-8 w-8 [&_svg]:h-4 [&_svg]:w-4",

  md: "h-10 w-10 [&_svg]:h-[18px] [&_svg]:w-[18px]",

  lg: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
};


// ======================================
// 4. COMPONENT
// ======================================

const IconButton = ({
  icon,

  variant = "ghost",
  size = "md",

  tooltip,
  badge,

  loading = false,
  fullWidth = false,

  disabled = false,
  className = "",

  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,

  ...buttonProps
}: IconButtonProps) => {

  // Unique tooltip ID for accessibility
  const tooltipId = useId();

  // Loading button will also be disabled
  const isDisabled = disabled || loading;

  // Combine existing and tooltip descriptions
  const describedBy =
    [ariaDescribedBy, tooltip ? tooltipId : undefined]
      .filter(Boolean)
      .join(" ") || undefined;

  // Dynamic Tailwind classes
  const buttonClasses = [
    "relative inline-flex shrink-0 items-center justify-center",
    "rounded-xl border transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/20",
    "active:scale-95",

    variantStyles[variant],
    sizeStyles[size],

    fullWidth ? "w-full" : "",
    isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",

    className,
  ]
    .filter(Boolean)
    .join(" ");


  return (
    <span
      className={`group relative inline-flex ${
        fullWidth ? "w-full" : ""
      }`}
    >

      {/* MAIN BUTTON */}

      <button
        {...buttonProps}
        type={buttonProps.type ?? "button"}
        disabled={isDisabled}
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        aria-busy={loading || undefined}
        className={buttonClasses}
      >

        {/* LOADING OR ICON */}

        {loading ? (
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              opacity=".2"
            />

            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <span aria-hidden="true" className="inline-flex">
            {icon}
          </span>
        )}


        {/* NOTIFICATION BADGE */}

        {badge !== undefined && badge !== null && badge !== "" && (
          <span
            aria-hidden="true"
            className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 px-1 text-[9px] font-bold text-white"
          >
            {typeof badge === "number" && badge > 99
              ? "99+"
              : badge}
          </span>
        )}

      </button>


      {/* TOOLTIP */}

      {tooltip && (
        <span
          id={tooltipId}
          role="tooltip"
          className="
            pointer-events-none absolute bottom-full left-1/2 z-50
            mb-2 -translate-x-1/2 translate-y-1
            whitespace-nowrap rounded-lg
            bg-slate-900 px-2.5 py-1.5
            text-[11px] font-medium text-white
            opacity-0 shadow-lg transition-all duration-200
            group-hover:translate-y-0 group-hover:opacity-100
            group-focus-within:translate-y-0
            group-focus-within:opacity-100
          "
        >
          {tooltip}
        </span>
      )}

    </span>
  );
};

export default IconButton;