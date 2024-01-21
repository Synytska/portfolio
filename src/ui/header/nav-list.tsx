import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Contact', href: '/contact' }
];

export default function NavList() {
    // const pathname = usePathname();
    return (
        <>
            {links.map(link => {
                return (
                    <Link
                        key={link.name}
                        href={link.href} >
                        <p>{link.name}</p>
                    </Link>
                )
            }
            )}
        </>
    )
}

