import { usePageConfig } from '@/hooks';
import { Wrapper, Header, PrimaryNavigation, Hero } from '@/pages/loopstudios/layouts';

export default function LoopstudiosPage() {
    usePageConfig({ title: 'Loopstudios landing page', page: 'loopstudios' });

    return (
        <Wrapper>
            <Header>
                <PrimaryNavigation />
                <Hero />
            </Header>

            <main></main>

            <footer></footer>
        </Wrapper>
    );
}
