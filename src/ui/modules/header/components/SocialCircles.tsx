import Link from "next/link"
import { SOCIAL_CIRCLES_TEXT } from "../constants/headeritems"

export default function SocialCircles(){
    return(
        <div className="flex-center-M gap-x-2 gap-y-2">
        {SOCIAL_CIRCLES_TEXT.map(social => {
            return(
                <Link
                key={social.name}
                href={social.href}
                target={social.target}
                className="flex-center-M w-[32px] h-[32px] text-center border border-blackM rounded-full justify-center leading-[100%] transition-[background-color] duration-[.2s] hover:bg-[blackM] hover:text-whiteM text-[13px]"
                >{social.name}</Link>
            )
        })}
        </div>
    )
}