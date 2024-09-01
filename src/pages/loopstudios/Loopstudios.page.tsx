import { usePageConfig } from '@/hooks';
import {
    Wrapper,
    Header,
    PrimaryNavigation,
    Hero,
    Main,
    AboutSection,
    CreationSection,
    Footer,
    SecondaryNavigation,
} from '@/pages/loopstudios/layouts';
import { Logo, CopyRight, SocialMediaLinks } from '@/pages/loopstudios/components/ui';

export default function LoopstudiosPage() {
    usePageConfig({ title: 'Loopstudios landing page', page: 'loopstudios' });

    return (
        <Wrapper>
            <Header>
                <PrimaryNavigation />
                <Hero />
            </Header>

            <Main>
                <AboutSection />
                <CreationSection />
            </Main>

            <Footer>
                <Logo />
                <SocialMediaLinks />
                <SecondaryNavigation />
                <CopyRight />
            </Footer>
        </Wrapper>
    );
}
