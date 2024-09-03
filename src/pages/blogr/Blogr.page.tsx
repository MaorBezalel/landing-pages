import { usePageConfig } from '@/hooks';
import { Wrapper } from '@/layouts';
import { Header, PrimaryNavigation, Hero } from '@/pages/blogr/layouts';

export default function Blogr() {
    usePageConfig({ title: 'Blogr landing page', page: 'blogr' });
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
