import { usePageConfig } from '@/hooks';

import { Wrapper } from '@/layouts';
import {
    Header,
    PrimaryNavigation,
    Hero,
    Main,
    AboutSection,
    ServicesSection,
    FeaturesSection,
    Footer,
} from '@/pages/blogr/layouts';

import { ContactInfo } from '@/pages/blogr/components/ui';

import { Logo } from '@/components/ui';
import logoSrc from '@/assets/blogr/images/logo.svg';
import { ROUTES } from '@/constants';

export default function Blogr() {
    usePageConfig({ title: 'Blogr landing page', page: 'blogr' });

    return (
        <Wrapper
            className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] gap-y-40 overflow-hidden
            tablet-md:gap-y-28
            tablet-sm:gap-y-24
            mobile-lg:gap-y-20
            mobile-md:gap-y-16"
        >
            <Header>
                <PrimaryNavigation />
                <Hero />
            </Header>

            <Main>
                <AboutSection />
                <ServicesSection />
                <FeaturesSection />
            </Main>

            <Footer>
                <Logo
                    link={ROUTES.BLOGR}
                    src={logoSrc}
                    alt="Blogr"
                />
                <ContactInfo />
            </Footer>
        </Wrapper>
    );
}
