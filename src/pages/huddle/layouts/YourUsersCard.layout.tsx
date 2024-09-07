import { ContentCard } from '@/pages/huddle/components/ui';
import illustrationYourUsersSrc from '@/assets/huddle/images/illustration-your-users.svg';

export function YourUsersCard() {
    return (
        <ContentCard
            layout="text-image"
            title="Your Users"
            description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
            imageSrc={illustrationYourUsersSrc}
            imageAlt="Illustration of three people interacting with oversized speech bubbles, with a blue abstract background."
        />
    );
}
