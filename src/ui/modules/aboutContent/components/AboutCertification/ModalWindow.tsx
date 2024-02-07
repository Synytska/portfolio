'use client';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import ReactSimpleImageViewer from 'react-simple-image-viewer';

import { CERTIFICATES } from '../../constants/aboutitems';

export const ModalWindow = () => {
    const [currImg, setCurImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const srcArr: any = [];

    CERTIFICATES.map((item) => srcArr.push(item.src));

    const openViewer = useCallback((index: any) => {
        setCurImage(index);
        setIsOpen(true);
    }, []);
    const closeViewer = () => {
        setCurImage(0);
        setIsOpen(false);
    };
    return (
        <div className="flex-M gap-x-12 gap-y-8">
            <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 md:ml-0 lg:gap-12 lg:auto-cols-auto">
                {CERTIFICATES.map((item, index) => (
                    <div>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            width={360}
                            height={260}
                            className="p-[10px] rounded-proj-M h-[260px] md:h-[240px] cursor-pointer"
                            unoptimized
                            onClick={() => openViewer(index)}
                            key={index}
                        />
                        <div className="flex-justify-M">
                            <p className="text-[24px]">{item.text}</p>
                        </div>
                    </div>
                ))}

                {isOpen && (
                    <ReactSimpleImageViewer
                        src={srcArr}
                        currentIndex={currImg}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeViewer}
                    />
                )}
            </div>
        </div>
    );
};

