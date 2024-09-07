import { Link } from 'react-router-dom';
import { IconFacebook, IconTwitter, IconInstagram } from '@/components/icons';
import { ROUTES } from '@/constants';

export function SocialMedia() {
    const socialMediaItems = [
        { Icon: IconFacebook, path: ROUTES.HUDDLE },
        { Icon: IconTwitter, path: ROUTES.HUDDLE },
        { Icon: IconInstagram, path: ROUTES.HUDDLE },
    ];

    return (
        <ul
            id="social-media"
            className="flex items-start justify-start gap-2
            tablet-md:gap-4 tablet-md:justify-self-center"
        >
            {socialMediaItems.map(({ Icon, path }, index) => (
                <li key={index}>
                    <Link
                        to={path}
                        className="group block rounded-full border border-huddle-white p-2 hover:border-huddle-pink
                        tablet-md:p-3"
                    >
                        <Icon
                            className="size-4 text-huddle-white group-hover:text-huddle-pink
                            desktop-sm:size-[0.9rem]
                            tablet-lg:size-[0.8rem]
                            tablet-md:size-5"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
