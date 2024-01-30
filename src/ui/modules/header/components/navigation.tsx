import NavList from "./NavList";
import Button from "../../../repeated_components/Button";
import VLine from "../../../repeated_components/VLine";
import Social from "./SocialCircles";
import Logo from "./Logo";
import Burger from "./Burger";
import { HEADER_BUTTON_TEXT } from "../constants/headeritems";

export default function Navigation() {
    return (
        <header>
            <div className="grid-gap4-M grid-cols-[1fr_auto] md:grid-cols-[auto_1fr] justify-between py-6">
                <div className="flex-justify-M w-full">
                    <Logo />
                    <Burger />
                </div>

                <div className="hidden md:block mx-auto w-full max-w-7xl z-100">
                    <div className="flex-center-M justify-end gap-x-8 gap-y-8">
                        <NavList />
                        <div className="justify-items-end grid-gap4-M grid-cols-[auto_minmax(1px,_1fr)_auto]">
                        <Button
                            name={HEADER_BUTTON_TEXT.name}
                            href={HEADER_BUTTON_TEXT.href}
                            className="text-whiteM bg-blackM py-[0.6rem] px-[1rem] text-center rounded-M md:hidden lg:block"
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



