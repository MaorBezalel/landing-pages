import { usePageConfig } from '@/hooks';
import {
    Wrapper,
    Header,
    Hero,
    PrimaryNavigation,
    Main,
    FeaturesSection,
    ReviewsSection,
    ImageGallerySection,
    SecondaryNavigation,
    Footer,
} from '@/pages/sunnyside/layouts';
import { SocialLinks } from '@/pages/sunnyside/components/ui';

export default function SunnysidePage() {
    usePageConfig({ title: 'Sunnyside agency landing page', page: 'sunnyside' });

    return (
        <Wrapper>
            <Header>
                <PrimaryNavigation />
                <Hero />
            </Header>

            <Main>
                <FeaturesSection />
                <ReviewsSection />
                <ImageGallerySection />
            </Main>

            <Footer>
                <SecondaryNavigation />
                <SocialLinks />
            </Footer>
        </Wrapper>
    );
}
