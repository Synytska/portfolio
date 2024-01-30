import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"], weight: ["400"], style: "normal" });

export default function MonoText({ children }: { children: any }) {
    return (
        <div className={`${roboto.className} uppercase text-[15px] tracking-[1px] text-blackM`}>
            {children}
        </div>
    )
}