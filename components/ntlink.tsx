import Link from "next/link";

export default function NTLink({
    children,
    href,
    ...props
}: Readonly<{
    children: React.ReactNode;
    href: string;
    [key: string]: any;
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
