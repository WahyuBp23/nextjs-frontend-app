import Link from "next/link";
import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type: "button" | "link";
  isExternal?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  href?: string;
  className?: string[];
  title?: string;
  style?: string;
  target?: string;
  onClickA?: MouseEventHandler<HTMLAnchorElement>;
  onClickButton?: MouseEventHandler<HTMLButtonElement> | Promise<void>;
  children: ReactNode;
}
export default function Button({
  type,
  isExternal,
  isDisabled,
  isLoading,
  href,
  className,
  title,
  style,
  target,
  onClickA,
  onClickButton,
  children,
}: ButtonProps) {
  if (isDisabled || isLoading) {
    if (isDisabled) className?.push("disabled");
    return (
      <span className={className?.join(' ')} style={style as CSSProperties}>
        {isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </span>
          </>
        ) : (
          children
        )}
      </span>
    );
  }
  if (type === "link") {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className?.join(' ')}
          style={style as CSSProperties}
          title={title}
          target={target}
          onClick={onClickA}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          className={className?.join(' ')}
          href={href || ''}
          style={style as CSSProperties}
          onClick={onClickA}
        >
          {children}
        </Link>
      );
    }
  }
  return (
    <button
      title={title}
      className={className?.join(' ')}
      style={style as CSSProperties}
      onClick={
        onClickButton && typeof onClickButton === "function"
          ? (event: React.MouseEvent<HTMLButtonElement>) => onClickButton(event)
          : undefined
      }
    >
      {children}
    </button>
  );
}
