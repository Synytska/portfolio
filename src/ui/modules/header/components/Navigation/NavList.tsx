'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Divider } from '@/src/ui/components/Divider';

import { MENU_LINKS } from '../../constants/headeritems';

import clsx from 'clsx';

export const NavList = () => {
    const pathname = usePathname();
    return (
        <>
            {MENU_LINKS.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex-M items-start justify-center md:flex-row gap-y-6 gap-x-6 pointer hover:underline',
                        { underline: pathname === link.href }
                    )}
                >
                    <p>{link.name}</p>
                    <Divider />
                </Link>
            ))}
        </>
    );
};

