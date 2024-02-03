import Image from "next/image"

import { LOGO_IMG } from "../../constants/headeritems"


export const Logo = () => {
    return (
            <Image
                src={LOGO_IMG.src}
                width={60}
                height={60}
                alt={LOGO_IMG.alt}
                unoptimized
                className="md:hidden lg:block"
            />
    )
}