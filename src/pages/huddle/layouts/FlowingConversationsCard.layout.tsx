import { ContentCard } from '@/pages/huddle/components/ui';
import illustrationFlowingConversationsSrc from '@/assets/huddle/images/illustration-flowing-conversation.svg';

export function FlowingConversationsCard() {
    return (
        <ContentCard
            layout="image-text"
            title="Flowing Conversations"
            description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
            imageSrc={illustrationFlowingConversationsSrc}
            imageAlt="Illustration of four people sit around a table outdoors, engaging in conversation. A tree with leaves is in the background, with blue sky and foliage."
        />
    );
}
