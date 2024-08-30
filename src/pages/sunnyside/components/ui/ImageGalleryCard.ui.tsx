type ImageGalleryCardProps = {
    image: 'milk-bottles' | 'orange' | 'cone' | 'sugar-cubes';
};

export function ImageGalleryCard({ image }: ImageGalleryCardProps) {
    const imageMap = {
        'milk-bottles': {
            desktop: "bg-[url('@/assets/sunnyside/images/desktop/image-gallery-milk-bottles.jpg')]",
            mobile: "tablet-md:bg-[url('@/assets/sunnyside/images/mobile/image-gallery-milk-bottles.jpg')]",
        },
        orange: {
            desktop: "bg-[url('@/assets/sunnyside/images/desktop/image-gallery-orange.jpg')]",
            mobile: "tablet-md:bg-[url('@/assets/sunnyside/images/mobile/image-gallery-orange.jpg')]",
        },
        cone: {
            desktop: "bg-[url('@/assets/sunnyside/images/desktop/image-gallery-cone.jpg')]",
            mobile: "tablet-md:bg-[url('@/assets/sunnyside/images/mobile/image-gallery-cone.jpg')]",
        },
        'sugar-cubes': {
            desktop: "bg-[url('@/assets/sunnyside/images/desktop/image-gallery-sugar-cubes.jpg')]",
            mobile: "tablet-md:bg-[url('@/assets/sunnyside/images/mobile/image-gallery-sugar-cubes.jpg')]",
        },
    };

    return (
        <div
            className={`h-[600px] ${imageMap[image].desktop} bg-cover bg-center bg-no-repeat
            tablet-lg:h-[400px]
            tablet-md:h-[300px] ${imageMap[image].mobile}
            tablet-sm:h-[250px]
            mobile-md:h-[200px]`}
        />
    );
}
