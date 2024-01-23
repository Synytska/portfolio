import NavList from "./nav-list";
import Button from "./button";
import VLine from "./vertical-line";
import Social from "./social-circles";
import Logo from "./image-logo";
import Burger from "./burger"

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
                            name={buttons.name}
                            href={buttons.href}
                            className="text-white bg-[#191919] py-[0.6rem] px-[1rem] text-center rounded-tr-lg rounded-bl-lg"
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



{/* створити функцію яка буде міняти стилі якщо натиснуто бургер(nav-wrap) */ }
