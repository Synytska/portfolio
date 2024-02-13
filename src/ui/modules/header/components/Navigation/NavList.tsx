'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { Divider } from '@/src/ui/components/Divider';

import { MENU_LINKS } from '../../constants/headeritems';

export const NavList = () => {
    const pathname = usePathname();
    return (
        <>
            {MENU_LINKS.map(({ name, href }) => {
                const isUnderline = pathname === href;
                return (
                    <Link
                        key={name}
                        href={href}
                        className={clsx(
                            'flex-M items-start justify-center md:flex-row gap-y-6 gap-x-6 pointer hover:underline',
                            { underline: isUnderline }
                        )}
                    >
                        <p>{name}</p>
                        <Divider />
                    </Link>
                );
            })}
        </>
    );
};

