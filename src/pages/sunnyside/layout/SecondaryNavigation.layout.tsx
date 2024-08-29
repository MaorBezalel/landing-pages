import { Logo, SiteLinks } from '@/pages/sunnyside/components/ui';

export function SecondaryNavigation() {
    return (
        <nav
            className="flex flex-col items-center gap-10"
            aria-label="Secondary"
        >
            <Logo
                type="footer"
                className="h-[2.5rem] w-[12rem] object-contain"
            />
            <SiteLinks type="footer" />
        </nav>
    );
}
