type ImageFeatureCardProps = {
    order: `order-[${number}]`;
    mobileOrder?: `tablet-sm:order-[${number}]`;
    image: 'transform' | 'stand-out';
};

export function ImageFeatureCard({ image, order, mobileOrder }: ImageFeatureCardProps) {
    const imageMap = {
        transform: "bg-[url('@/assets/sunnyside/images/desktop/image-transform.jpg')]",
        'stand-out': "bg-[url('@/assets/sunnyside/images/desktop/image-stand-out.jpg')]",
    };

    return (
        <div
            className={`${order} h-[600px] w-full ${imageMap[image]} bg-cover bg-center bg-no-repeat 
            desktop-sm:h-[500px]
            tablet-lg:h-[400px] 
            ${mobileOrder !== undefined ? mobileOrder : ''}`}
        />
    );
}
