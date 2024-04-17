import { ReactNode } from "react";

export function Card({
  children,
  className,
}: Readonly<{
  children?: ReactNode;
  className?: string;
}>) {
  return (
    <div className="p-6 bg-surface0 border border-overlay0 rounded-lg shadow">
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: Readonly<{
  children?: ReactNode;
  className?: string;
}>) {
  return (
    <div className="flex items-center justify-between mb-4">{children}</div>
  );
}

export function CardBody({
  children,
  className,
}: Readonly<{
  children?: ReactNode;
  className?: string;
}>) {
  return <div>{children}</div>;
}
