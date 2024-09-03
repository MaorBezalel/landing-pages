import { Link } from 'react-router-dom';

type LogoProps = {
    containerClassName?: string;
    link?: string;
} & React.ComponentProps<'img'>;

export function Logo({ containerClassName, link, ...props }: LogoProps) {
    return (
        <Link
            className="inline-block w-fit"
            to={link ?? '/'}
        >
            <img {...props} />
        </Link>
    );
}
