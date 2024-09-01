import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { IconFacebook, IconInstagram, IconPinterest, IconTwitter } from '@/components/icons';

export function SocialMediaLinks() {
    const socialMediaIcons = [IconFacebook, IconTwitter, IconPinterest, IconInstagram];

    return (
        <ul
            aria-label="Social media links"
            className="order-2 flex flex-row items-center gap-4 justify-self-end
            tablet-md:order-3 tablet-md:justify-self-auto"
        >
            {socialMediaIcons.map((IconSocialMedia, index) => (
                <li key={index}>
                    <Link
                        to={ROUTES.LOOPSTUDIOS}
                        className="relative before:absolute before:-bottom-2 before:left-1/2 before:h-[2px] before:w-0 before:-translate-x-1/2 before:bg-loopstudios-white before:duration-200 before:ease-in-out before:[transition-property:width] hover:before:w-[100%]"
                    >
                        <IconSocialMedia
                            className="size-6 text-loopstudios-white
                            tablet-lg:size-5"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
