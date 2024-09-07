import { ContentCard } from '@/pages/huddle/components/ui';
import illustrationGrowTogetherSrc from '@/assets/huddle/images/illustration-grow-together.svg';

export function GrowTogetherCard() {
    return (
        <ContentCard
            layout="text-image"
            title="Grow Together"
            description="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
            imageSrc={illustrationGrowTogetherSrc}
            imageAlt="Illustration of a man and woman discussing while standing in front of floating data boxes. The man stands with his hands in his pockets; the woman holds a document and gestures."
        />
    );
}
