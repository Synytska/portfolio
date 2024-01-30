import Image from "next/image"

interface Img {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;

}

export default function ImageProjectPanel({ src, alt, width, height }: Img) {
    return (
        <>
            <Image
                src={src}
                alt={alt || 'some photo'}
                width={1000 || width}
                height={760 || height}
                className="rounded-proj-M hidden md:block"
                unoptimized
            />
            <Image
                src={src}
                alt={alt || 'some photo'}
                width={450 || width}
                height={380 || height}
                className="rounded-proj-M md:hidden block"
                unoptimized
            />
        </>
    )
}
