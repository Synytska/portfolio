import Link from 'next/link';

import { MonoText } from './MonoText';

interface IButton {
    className?: string;
    name: string;
    href: any;
}

export const Button = ({ name, href, className }: IButton) => (
    <MonoText>
        <Link href={href} className={className || 'button-style-M flex'} target="_blank">
            {name}
        </Link>
    </MonoText>
);

