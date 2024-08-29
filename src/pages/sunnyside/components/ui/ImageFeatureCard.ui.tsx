type ImageFeatureCardProps = {
    order: number;
    mobileOrder?: number;
    image: 'transform' | 'stand-out';
};

export function ImageFeatureCard({ image, order, mobileOrder }: ImageFeatureCardProps) {
    return (
        <div
            className={`order-${order} h-[600px] w-full bg-[url('@/assets/sunnyside/images/desktop/image-${image}.jpg')] bg-cover bg-center bg-no-repeat 
            desktop-sm:h-[500px]
            tablet-lg:h-[400px] 
            ${mobileOrder !== undefined ? `tablet-sm:order-[${mobileOrder}]` : ''}`}
        />
    );
}
