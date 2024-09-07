import { usePageConfig } from '@/hooks';
import { Wrapper } from '@/layouts';
import {
    Header,
    PrimaryNavigation,
    Hero,
    Main,
    GrowTogetherCard,
    FlowingConversationsCard,
    YourUsersCard,
} from '@/pages/huddle/layouts';

export default function HuddlePage() {
    usePageConfig({ title: 'Huddle landing page', page: 'huddle' });

    return (
        <Wrapper className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] gap-20">
            <Header>
                <PrimaryNavigation />
                <Hero />
            </Header>

            <Main>
                <GrowTogetherCard />
                <FlowingConversationsCard />
                <YourUsersCard />
            </Main>

            <footer></footer>
        </Wrapper>
    );
}
