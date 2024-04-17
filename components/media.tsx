export function Desktop({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) {
  return <div className={`${className} hidden lg:block`}>{children}</div>;
}

export function Mobile({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode;
  className?: string;
}>) {
  return <div className={`${className} block lg:hidden`}>{children}</div>;
}
