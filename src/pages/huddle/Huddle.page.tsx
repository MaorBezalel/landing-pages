import { usePageConfig } from '@/hooks';
import { Wrapper } from '@/layouts';
import { Header, PrimaryNavigation, Hero } from '@/pages/huddle/layouts';

export default function HuddlePage() {
    usePageConfig({ title: 'Huddle landing page', page: 'huddle' });

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
