import Link from "next/link";
import { usePathname } from "next/navigation";
import { Roboto_Mono } from "next/font/google";

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Contact', href: '/contact' }
];

const roboto = Roboto_Mono({subsets: ["latin"], weight: ["400"], style: "normal"});


export default function NavList() {
    // const pathname = usePathname();
    return (
        <>
            {links.map(link => {
                return (
                    <div className="hidden md:block mx-auto w-full max-w-7xl">
                        {/* створити функцію яка буде міняти стилі якщо натиснуто бургер(nav-wrap) */}
                        <div className="flex items-center justify-end gap-x-8 gap-y-8">
                            <div className="flex items-center justify-center flex-row gap-y-8 gap-x-8">
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${roboto.className} uppercase text-[15px] tracking-[1px]`}
                                    >
                                    <p>{link.name}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </>
    )
}

// flex-direction: column;
//         align-items: flex-start;
//         grid-column-gap: 1.5rem;
//         grid-row-gap: 1.5rem;

// large
// z-index: 9999;
// grid-column-gap: 2rem;
// grid-row-gap: 2rem;
// align-items: center;
// display: flex;