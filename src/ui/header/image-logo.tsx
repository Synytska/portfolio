import Image from "next/image"


export default function Logo() {
    return (
            <Image
                src='/Logo.png'
                width={60}
                height={60}
                alt="logo"
                unoptimized
                className="md:hidden lg:block"
            />
    )
}