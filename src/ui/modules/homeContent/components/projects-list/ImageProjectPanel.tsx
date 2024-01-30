import Image from "next/image"

interface Img {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;

}

const classImg = "rounded-bl-[2.5rem] rounded-tr-[2.5rem] mb-[0.8rem] object-cover ";


export default function ImageProjectPanel({ src, alt, width, height }: Img) {
    return (
        <>
            <Image
                src={src}
                alt={alt || 'some photo'}
                width={1000 || width}
                height={760 || height}
                className={`${classImg} hidden md:block`}
                unoptimized
            />
            <Image
                src={src}
                alt={alt || 'some photo'}
                width={450 || width}
                height={380 || height}
                className={`${classImg} md:hidden block`}
                unoptimized
            />
        </>
    )
}
