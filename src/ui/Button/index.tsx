import React, { ComponentPropsWithoutRef, ReactNode } from "react";

import style from "./button.module.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
}

export function Button({ children, type = "button", ...props }: ButtonProps) {
  return (
    <button
      className={`${style.button} ${style[type]} ${style.ripple}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
