import { usePageConfig } from '@/hooks';
import {
    Wrapper,
    Header,
    PrimaryNavigation,
    Hero,
    Main,
    AboutSection,
    CreationSection,
} from '@/pages/loopstudios/layouts';

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

            <footer></footer>
        </Wrapper>
    );
}
