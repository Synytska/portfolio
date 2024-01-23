import Link from "next/link";
import Divider from "./divider";
{/* <import { usePathname } from "next/navigation"; */ }

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
            {/* // <div className="flex items-start justify-center flex-col md:flex-row gap-y-8 gap-x-8"> */}
            {links.map(link => {
                return (
                    // <div className="flex items-start justify-center flex-col md:flex-row gap-y-8 gap-x-8">
                    <Link
                        className="flex items-start justify-center flex-col md:flex-row gap-y-6 gap-x-6"
                        key={link.name}
                        href={link.href}>
                        <p>{link.name}</p>
                        <Divider /> 
                    </Link>
                    // </div>
                )
            }
            )}
            {/* // </div> */}
        </>


    )
}

