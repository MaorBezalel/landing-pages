type ImageGalleryCardProps = {
    image: 'milk-bottles' | 'orange' | 'cone' | 'sugar-cubes';
};

export function ImageGalleryCard({ image }: ImageGalleryCardProps) {
    return (
        <div
            className={`h-[600px] bg-[url('@/assets/sunnyside/images/desktop/image-gallery-${image}.jpg')] bg-cover bg-center bg-no-repeat
            tablet-lg:h-[400px]
            tablet-md:h-[300px] tablet-md:bg-[url('@/assets/sunnyside/images/mobile/image-gallery-${image}.jpg')]
            tablet-sm:h-[250px]
            mobile-md:h-[200px]`}
        />
    );
}
