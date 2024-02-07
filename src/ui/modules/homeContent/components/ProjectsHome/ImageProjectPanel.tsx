import Image from 'next/image';

export const ImageProjectPanel = ({ src, alt, className }: any) => (
    <>
        <Image
            src={src}
            alt={alt || 'some photo'}
            width={1000}
            height={760}
            className={"rounded-proj-M hidden md:block"}
            unoptimized
        />
        <Image 
            src={src}
            alt={alt || 'some photo'}
            width={450}
            height={380}
            className={className || "rounded-proj-M md:hidden block"}
            unoptimized
        />
    </>
);

