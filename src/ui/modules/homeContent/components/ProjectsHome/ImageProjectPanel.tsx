import Image from "next/image"

interface Img {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;

}

export const ImageProjectPanel = ({ src, alt, width, height }: Img) => {
    return (
        <>
            <Image
                src={src}
                alt={alt || 'some photo'}
                width={1000}
                height={760}
                className="rounded-proj-M hidden md:block"
                unoptimized
            />
            <Image
                src={src}
                alt={alt || 'some photo'}
                width={450}
                height={380}
                className="rounded-proj-M md:hidden block"
                unoptimized
            />
        </>
    )
}
