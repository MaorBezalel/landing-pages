import { usePageConfig } from '@/hooks';
import { Wrapper } from '@/layouts';
import { Header, PrimaryNavigation, Hero, AboutSection, FeaturesSection } from '@/pages/blogr/layouts';

export default function Blogr() {
    usePageConfig({ title: 'Blogr landing page', page: 'blogr' });

    return (
        <Wrapper className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] gap-y-40 overflow-hidden">
            <Header>
                <PrimaryNavigation />
                <Hero />
            </Header>

            <main className="flex flex-col gap-40">
                <AboutSection />
                <FeaturesSection />
            </main>

            <footer></footer>
        </Wrapper>
    );
}
