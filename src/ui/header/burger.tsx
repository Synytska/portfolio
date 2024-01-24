'use client'

import { useState, createContext } from "react"
import Menu from "./full-menu";

export const BurgerContext = createContext(false);

export default function Burger() {
    const [isOpen, setIsOpen] = useState(false);
    const burgerClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div onClick={burgerClick} className="w-7 m-0 pt-7 cursor-pointer relative z-10 md:hidden">
                <div className="translate-y-[-9px] h-px w-full bg-[#191919] block rounded duration-[0.3s] ease-in-out"></div>
                <div className="h-px w-full bg-[#191919] block rounded duration-[0.3s] ease-in-out"></div>
                <div className="translate-y-[9px] h-px w-full bg-[#191919] block rounded duration-[0.3s] ease-in-out"></div>
            </div>
            <div className="">{isOpen ? <Menu /> : ''}</div>
        </div>

    )
}