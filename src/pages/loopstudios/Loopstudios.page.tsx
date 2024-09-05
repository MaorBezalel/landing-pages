import { usePageConfig } from '@/hooks';
import { Wrapper } from '@/layouts';
import {
    Header,
    PrimaryNavigation,
    Hero,
    Main,
    AboutSection,
    CreationSection,
    Footer,
    SecondaryNavigation,
} from '@/pages/loopstudios/layouts';
import { Logo } from '@/components/ui';
import { CopyRight, SocialMediaLinks } from '@/pages/loopstudios/components/ui';
import logoSrc from '@/assets/loopstudios/images/logo.svg';
import { ROUTES } from '@/constants';

export default function LoopstudiosPage() {
    usePageConfig({ title: 'Loopstudios landing page', page: 'loopstudios' });

    return (
        <Wrapper id="wrapper">
            <Header>
                <PrimaryNavigation />
                <Hero />
            </Header>

            <Main>
                <AboutSection />
                <CreationSection />
            </Main>

            <Footer>
                <Logo
                    link={ROUTES.LOOPSTUDIOS}
                    src={logoSrc}
                    alt="Loopstudios"
                />
                <SocialMediaLinks />
                <SecondaryNavigation />
                <CopyRight />
            </Footer>
        </Wrapper>
    );
}
