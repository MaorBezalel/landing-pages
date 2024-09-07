import { usePageConfig } from '@/hooks';
import { Wrapper } from '@/layouts';
import { Copyright } from '@/components/ui';
import {
    Header,
    PrimaryNavigation,
    Hero,
    Main,
    GrowTogetherCard,
    FlowingConversationsCard,
    YourUsersCard,
    Footer,
    SecondaryNavigation,
} from '@/pages/huddle/layouts';
import { ContactInfo, SocialMedia } from '@/pages/huddle/components/ui';

import logoFooterSrc from '@/assets/huddle/images/logo-footer.svg';
import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants';

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

            <Footer>
                <Logo
                    link={ROUTES.HUDDLE}
                    src={logoFooterSrc}
                    alt="Huddle"
                    containerClassName="col-[1/-1] row-[1/2] inline-block w-fit
                    tablet-md:col-auto tablet-md:row-auto"
                />
                <ContactInfo />
                <SecondaryNavigation />
                <SocialMedia />
                <Copyright
                    className="col-[4/5] row-[3/4] justify-self-end text-sm text-huddle-white
                    desktop-sm:text-xs
                    tablet-md:col-auto tablet-md:row-auto tablet-md:justify-self-center tablet-md:text-base
                    mobile-md:text-sm"
                >
                    Copyright 2018 Huddle. All rights reserved.
                </Copyright>
            </Footer>
        </Wrapper>
    );
}
