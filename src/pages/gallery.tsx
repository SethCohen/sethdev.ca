import * as React from "react"

const images = [
    { src: 'https://i.imgur.com/JUxqLcH.jpeg', alt: 'Burnt Out' },
    { src: 'https://i.imgur.com/TWQpu6C.png', alt: 'Golden Repair' },
    { src: 'https://i.imgur.com/ZuoCYek.png', alt: 'Plant' },
    { src: 'https://i.imgur.com/bzAWSFl.png', alt: 'Commissioned Portrait 1' },
    { src: 'https://i.imgur.com/DOY0snu.png', alt: 'Commissioned Portrait 2' },
    { src: 'https://i.imgur.com/aUeReR2.jpeg', alt: 'Ensō\'s Fallacy' },
    { src: 'https://i.imgur.com/XhPUUfa.png', alt: 'Commissioned Portrait 3' },
    { src: 'https://i.imgur.com/hprd4ml.png', alt: 'Emojis Pack' },
    { src: 'https://i.imgur.com/G45OfVR.png', alt: 'Winter Hill Sunset' },
    { src: 'https://i.imgur.com/u07AbEj.png', alt: 'Summer Beach Sunset' },
    { src: 'https://i.imgur.com/cM22HDS.png', alt: 'Commissioned University Club Logo 1' },
]

const Gallery = () => {
    const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null);

    const [isClosing, setIsClosing] = React.useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setSelectedImage(null);
        }, 500);
    };
    return (
        <div>
            <nav className="fixed top-0 w-full z-50 bg-black p-4 shadow-md">
                <a href="/" className="text-2xl font-bold">&lt; Seth Cohen /&gt;</a>
            </nav>
            <div className="container mx-auto px-4 sm:px-8 pt-24 p-8 flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-200 animate-fade-in object-cover w-full h-full"
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
                {selectedImage && (
                    <div
                        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-99 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
                        onClick={handleClose}
                    >
                        <figure className="text-center relative max-h-full pt-16 pb-16 flex flex-col items-center h-[calc(100%-6rem)]">
                            <button
                                className="absolute top-4 right-4 text-5xl"
                                onClick={handleClose}
                            >
                                &times;
                            </button>
                            <img src={selectedImage.src} alt={selectedImage.alt} className="rounded-lg object-contain max-h-full" />
                            <figcaption className="text-white mt-4 text-xl font-bold">{selectedImage.alt}</figcaption>
                        </figure>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;