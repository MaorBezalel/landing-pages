import { Logo } from '@/components/ui';
import { DesktopPrimaryNav, MobilePrimaryNav } from '@/pages/blogr/components/ui';
import logoSrc from '@/assets/blogr/images/logo.svg';
import { ROUTES } from '@/constants';

export function PrimaryNavigation() {
    return (
        <nav
            aria-label="Primary"
            className="relative flex flex-row items-center gap-8 py-6
            tablet-md:justify-between"
        >
            <Logo
                link={ROUTES.BLOGR}
                src={logoSrc}
                alt="Blogr"
            />
            <DesktopPrimaryNav />
            <MobilePrimaryNav />
        </nav>
    );
}
