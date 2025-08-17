import React from "react";
import { NavLink } from "react-router-dom";

type ButtonProps = {
  as?: "button" | "a" | "link";
  to?: string;                 // 當 as="link" 時使用
  href?: string;               // 當 as="a" 時使用
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  as = "button",
  to,
  href,
  children,
  className = "",
  size = "md",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition";
  const theme =
    "bg-[var(--color-brand-yellow)] text-black hover:bg-[var(--color-brand-dark)] hover:text-[var(--color-brand-yellow)]";
  const sizeCls = sizeMap[size];

  const classes = `${base} ${theme} ${sizeCls} ${className}`;

  if (as === "link" && to) return <NavLink to={to} className={classes}>{children}</NavLink>;
  if (as === "a" && href) return <a href={href} className={classes}>{children}</a>;
  return <button className={classes}>{children}</button>;
}
