import Image from "next/image"
import NavList from "./nav-list"

export default function Navigation() {
    return (
        <header>
            <Image
                src='/Logo.png'
                width={60}
                height={60}
                alt="logo"
            ></Image>
            <NavList />
        </header>
    )
}

{/* <header>
            <div class="page-padding">
                <div class="container">
                    <div class="head">
                        <div class="main-head">
                            <a href="#">
                                <img id="logo" src="img/Logo.png" alt="logo">
                            </a>
                            <div id="menu-bar" onclick="menuOnClick()">
                                <div id="bar1" class="bar"></div>
                                <div id="bar2" class="bar"></div>
                                <div id="bar3" class="bar"></div>
                            </div>
                        </div>
                        <nav class="nav-menu" id="navbar">
                            <div class="nav-wrap">
                                <div class="nav-list">
                                    <a href="#" class="nav-link mono">Home</a>
                                    <div class="divider mn"></div>
                                    <a href="about.html" class="nav-link mono">About</a>
                                    <div class="divider mn"></div>
                                    <a href="projects.html" class="nav-link mono">Work</a>
                                    <div class="divider mn"></div>
                                    <a href="contact.html" class="nav-link mono">Contact</a>
                                </div>
                                <div class="right-head">
                                    <a href="contact.html" class="smono mono">
                                        <div class="but blbut">Let's Talk</div>
                                    </a>
                                    <div class="vertical-line"></div>
                                    <div class="social-circles">
                                        <a href="https://www.instagram.com/kris_ireland_/" target="_blank"
                                            class="badge small mono sm">
                                            IN
                                        </a>
                                        <a href="https://www.behance.net/khrissynytska" target="_blank"
                                            class="badge small mono sm">
                                            BE
                                        </a>
                                        <a href="https://wa.me/0892579197" target="_blank" class="badge small mono sm">
                                            WA
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header> */}
