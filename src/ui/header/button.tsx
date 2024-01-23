import Link from "next/link"

export default function Button({name, href, className} : {name: string, href: string, className: string}) {
    return (
        <div>
            <Link
                href={href}
                className={className}
            >{name}</Link>
        </div>
    )
}

