import { Logo, SiteLinks } from '@/pages/sunnyside/components/ui';
import { HamburgerMenu } from '@/pages/sunnyside/lib';

export function PrimaryNavigation() {
    return (
        <nav
            className="p-10
            mobile-lg:p-6"
            aria-label="Primary"
        >
            <div className="relative flex w-full flex-row items-center justify-between">
                <Logo
                    type="header"
                    className="h-[2.5rem] w-[12rem] object-contain
                    tablet-lg:h-[2rem] tablet-lg:w-[10rem]"
                />
                <SiteLinks type="header" />
                <HamburgerMenu />
            </div>
        </nav>
    );
}
