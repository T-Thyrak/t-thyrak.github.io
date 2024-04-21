import Link from "next/link";
import React from "react";

type NTLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  href: string;
};

export default function NTLink({
  children,
  href,
  ...props
}: Readonly<{
  children: React.ReactNode;
  href: string;
  // [key: string]: any;
}>) {
  return (
    <Link
      className="underline text-sapphire"
      href={href}
      target="_blank"
      {...props}>
      {children}
    </Link>
  );
}
