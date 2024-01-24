import Image from "next/image";
import Link from "next/link";
import Button from "@/src/ui/header/button";
import Mono from "../repeated_components/mono_text";


const info = [
  { text: "Hey, I'm Khrystyna, Frontend Developer" },
  { text: "Press the button below for further information or check my " },
  { text: "More about me", href: '/about' }
];

const git = { text: 'Github', href: 'https://github.com/Synytska' };

export default function HomeAbout() {
  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="grid auto-cols-[1fr] gap-x-[3rem] gap-y-[3rem] grid-cols-[1fr] md:grid-cols-[1fr,_1fr] md:grid-rows-[auto]">
        <div className="flex flex-col justify-between items-start md:justify-center">
          <h1 className="max-w-[34rem] text-[3rem] lg:text-[4rem] mx-0 mt-0 mb-[1rem] leading-[100%] capitalize">{info[0].text}</h1>
          <div className="w-full max-w-[32rem] mb-[1.5rem] md:mb-[2.5rem] lg:mb-[3rem]">
            <p className="font-['Mier_A'] text-[1.4rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[150%]">{info[1].text}

              <Link href={git.href} className="underline">
                {git.text}
              </Link></p>
          </div>
          <Mono>
            <Button
              name={info[2].text}
              href={info[2].href}
              className="px-[1rem] py-[0.6rem] text-center border border-black rounded-tr-[10px] rounded-bl-[10px] hover:bg-black hover:text-white" />
          </Mono>
        </div>

        <Image
          src='/main-photo.png'
          alt="my photo on the main page"
          width={315}
          height={315}
          className="rounded-full mx-[auto] mb-[2rem] object cover md:w-[500px]" />
      </div>
    </div >
  )
}