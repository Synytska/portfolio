import Image from "next/image"
import NavList from "./nav-list"

export default function Navigation() {
    return (
        <header>
            <div className="flex justify-between">
                <Image
                    src='/Logo.png'
                    width={60}
                    height={60}
                    alt="logo"
                ></Image>
                <div className="w-7 m-0 pt-7 cursor-pointer relative z-10 md:hidden">
                    <div className="translate-y-[-9px] h-px w-full bg-[#191919] block rounded duration-[0.3s] ease-in-out"></div>
                    <div className="h-px w-full bg-[#191919] block rounded duration-[0.3s] ease-in-out"></div>
                    <div className="translate-y-[9px] h-px w-full bg-[#191919] block rounded duration-[0.3s] ease-in-out"></div>
                </div>
            </div>
            <NavList />
        </header>
    )
}


// transform: translateY(-9px);