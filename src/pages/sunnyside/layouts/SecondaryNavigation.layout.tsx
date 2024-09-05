import { Logo } from '@/components/ui';
import { DesktopSiteLinks } from '@/pages/sunnyside/components/ui';
import { ROUTES } from '@/constants';

import logoFooter from '@/assets/sunnyside/images/logo-footer.svg';

export function SecondaryNavigation() {
    return (
        <nav
            className="flex flex-col items-center gap-10"
            aria-label="Secondary"
        >
            <Logo
                link={ROUTES.SUNNYSIDE}
                src={logoFooter}
                alt="Sunnyside"
                className="h-[2.5rem] w-[12rem] object-contain"
            />
            <DesktopSiteLinks type="footer" />
        </nav>
    );
}
