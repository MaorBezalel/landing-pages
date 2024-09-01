import { ImageGalleryCard } from '@/pages/sunnyside/components/ui';

export function ImageGallerySection() {
    return (
        <section
            id="image-gallery"
            className="grid w-full grid-cols-[repeat(4,1fr)] gap-0 
            tablet-sm:grid-cols-2 tablet-sm:grid-rows-2"
        >
            <ImageGalleryCard image="milk-bottles" />
            <ImageGalleryCard image="orange" />
            <ImageGalleryCard image="cone" />
            <ImageGalleryCard image="sugar-cubes" />
        </section>
    );
}
