import { IconLocation, IconPhone, IconEmail } from '@/components/icons';

export function ContactInfo() {
    const items = [
        {
            Icon: IconLocation,
            iconSize: 'size-5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            itemProp: 'address',
        },
        {
            Icon: IconPhone,
            iconSize: 'size-4',
            text: '+1-543-123-4567',
            itemProp: 'telephone',
        },
        {
            Icon: IconEmail,
            iconSize: 'size-4',
            text: 'example@huddle.com',
            itemProp: 'email',
        },
    ];

    return (
        <address
            id="contact-info"
            itemScope
            itemType="http://schema.org/ContactPoint"
            className="col-[1/2] row-[2/3] flex flex-col items-start justify-start gap-6
            tablet-md:col-auto tablet-md:row-auto"
        >
            {items.map(({ Icon, iconSize, text, itemProp }, index) => (
                <p
                    key={index}
                    itemProp={itemProp}
                    className="flex gap-6
                    desktop-sm:gap-4
                    tablet-md:gap-10"
                >
                    <div
                        role="presentation"
                        className="inline-block"
                    >
                        <Icon className={`${iconSize} inline align-middle text-huddle-white`} />
                    </div>
                    <span
                        className="text-huddle-white
                        desktop-sm:text-base
                        tablet-lg:pt-[0.3rem] tablet-lg:text-sm
                        tablet-md:pt-[0.15rem] tablet-md:text-base"
                    >
                        {text}
                    </span>
                </p>
            ))}
        </address>
    );
}
