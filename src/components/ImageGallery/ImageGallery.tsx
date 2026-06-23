'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
    images: string[];
    title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps): React.JSX.Element => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <>
            <div className="image-container flex flex-col items-center mt-12 pr-6">
                <div className="flex items-center justify-center">
                    <Image
                        src={images[selectedImage]}
                        alt={title}
                        width={460}
                        height={460}
                        className="object-contain"
                    />
                </div>

                <div className="mt-6 flex gap-3">
                    {images.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => setSelectedImage(index)}
                            className={`h-10 w-10 rounded border text-sm font-medium cursor-pointer transition shadow-sm ${
                                selectedImage === index ? 'selected' : 'bg-white'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .image-container {
                    border-right: solid 2px var(--border-color-light);
                }
                button {
                    border-color: var(--border-color-extra-light);
                }
                .selected {
                    background-color: var(--color-information);
                    color: white;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
};

export default ImageGallery;
