import Link from 'next/link';

export const Button = ({ name, href, className }: { name: string; href: any; className: string }) => (
    <Link href={href} className={className}>
        {name}
    </Link>
);
