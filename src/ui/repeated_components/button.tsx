import Link from "next/link"

export default function Button({name, href, className} : {name: string, href: any, className: string}) {
    return (
        <div>
            <Link
                href={href}
                className={className}
            >{name}</Link>
        </div>
    )
}

