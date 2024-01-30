import Link from "next/link"
import { SOCIAL_CIRCLES_TEXT } from "../constants/headeritems"

export default function SocialCircles(){
    return(
        <div className="flex items-center gap-x-2 gap-y-2">
        {SOCIAL_CIRCLES_TEXT.map(social => {
            return(
                <Link
                key={social.name}
                href={social.href}
                target={social.target}
                className="flex w-[32px] h-[32px] text-center border border-black rounded-full justify-center items-center leading-[100%] transition-[background-color] duration-[.2s] hover:bg-[black] hover:text-white text-[13px]"
                >{social.name}</Link>
            )
        })}
        </div>
    )
}