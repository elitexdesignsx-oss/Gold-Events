import { Link, type LinkProps } from 'react-router-dom';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  className?: string;
};

function classes(variant: ButtonProps['variant'], className = '') {
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'ghost' ? 'btn-ghost' : '';
  return `btn ${variantClass} ${className}`.trim();
}

export function Button({
  children,
  variant = 'secondary',
  icon,
  className,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, className)} {...props}>
      {icon}
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = 'secondary',
  icon,
  className,
  ...props
}: ButtonProps & LinkProps) {
  return (
    <Link className={classes(variant, className)} {...props}>
      {icon}
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  children,
  variant = 'secondary',
  icon,
  className,
  ...props
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={classes(variant, className)} {...props}>
      {icon}
      {children}
    </a>
  );
}
