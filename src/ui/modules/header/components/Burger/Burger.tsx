'use client'
import { useState, createContext } from "react"

import { FullMenu } from "./FullMenu";
import { Logo } from "./Logo";

import { EMPTY_SPACE } from "@/src/ui/constants/defaultValue";

export const Burger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const burgerClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="flex-justify-M w-full">
            <Logo />
            <div>
                <div onClick={burgerClick} className="w-7 m-0 pt-7 cursor-pointer relative z-10 md:hidden">
                    <div className="translate-y-[-9px] burger-M"></div>
                    <div className="burger-M"></div>
                    <div className="translate-y-[9px] burger-M"></div>
                </div>
                <div>{isOpen ? <FullMenu /> : EMPTY_SPACE}</div>
            </div>
        </div>

    )
}