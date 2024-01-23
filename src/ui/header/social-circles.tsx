import Link from "next/link"

const socials = [
    {name: 'GIT', href: '/', target: '_blank'},
    {name: 'WA', href: '/', target: '_blank'},
    {name: 'Gm', href: '/', target: '_blank'}

]
export default function Social(){
    return(
        <div className="flex items-center gap-x-2 gap-y-2">
        {socials.map(social => {
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