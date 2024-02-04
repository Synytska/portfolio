import Link from 'next/link';

import { Divider } from '@/src/ui/components/Divider';

import { MENU_LINKS } from '../../constants/headeritems';

export const NavList = () => (
    <>
        {MENU_LINKS.map((link) => {
            return (
                <Link
                    className="flex-M items-start justify-center md:flex-row gap-y-6 gap-x-6 pointer hover:underline"
                    key={link.name}
                    href={link.href}
                >
                    <p>{link.name}</p>
                    <Divider />
                </Link>
            );
        })}
    </>
);

