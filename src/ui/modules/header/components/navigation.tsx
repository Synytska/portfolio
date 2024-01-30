import NavList from "./NavList";
import Button from "../../../repeated_components/Button";
import VLine from "../../../repeated_components/VLine";
import Social from "./SocialCircles";
import Logo from "./Logo";
import Burger from "./Burger";
import { HEADER_BUTTON_TEXT } from "../constants/headeritems";

const buttons = { name: "Let's Talk", href: '/about' };


export default function Navigation() {
    return (
        <header>
            <div className="grid gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[1fr_auto] md:grid-cols-[auto_1fr] auto-cols-[1fr] justify-between items-center py-6">
                <div className="flex justify-between w-full">
                    <Logo />
                    <Burger />
                </div>

                <div className="hidden md:block mx-auto w-full max-w-7xl z-100">
                    <div className="flex items-center justify-end gap-x-8 gap-y-8">
                        <NavList />
                        <div className="grid justify-items-end items-center gap-x-4 gap-y-4 grid-rows-[auto] grid-cols-[auto_minmax(1px,_1fr)_auto] auto-cols-fr">
                        <Button
                            name={HEADER_BUTTON_TEXT.name}
                            href={HEADER_BUTTON_TEXT.href}
                            className="text-white bg-[#191919] py-[0.6rem] px-[1rem] text-center rounded-tr-[10px] rounded-bl-[10px] md:hidden lg:block"
                        />
                        <VLine />
                        <Social />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}



