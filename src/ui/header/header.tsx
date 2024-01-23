import Navigation from "./navigation";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"], weight: ["400"], style: "normal" });




export default function Header() {
    return (
        <div className={`${roboto.className} uppercase text-[15px] tracking-[1px]`}>
            <Navigation />
        </div>
    )
}

