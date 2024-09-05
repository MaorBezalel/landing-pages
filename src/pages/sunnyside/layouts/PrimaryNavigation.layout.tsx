import { Logo } from '@/components/ui';
import { DesktopSiteLinks, MobileSiteLinks } from '@/pages/sunnyside/components/ui';
import { ROUTES } from '@/constants';
import logoHeader from '@/assets/sunnyside/images/logo-header.svg';

export function PrimaryNavigation() {
    return (
        <nav
            className="p-10
            mobile-lg:p-6"
            aria-label="Primary"
        >
            <div className="relative flex w-full flex-row items-center justify-between">
                <Logo
                    link={ROUTES.SUNNYSIDE}
                    src={logoHeader}
                    alt="Sunnyside"
                    className="h-[2.5rem] w-[12rem] object-contain
                    tablet-lg:h-[2rem] tablet-lg:w-[10rem]"
                />
                <DesktopSiteLinks type="header" />
                <MobileSiteLinks />
            </div>
        </nav>
    );
}
