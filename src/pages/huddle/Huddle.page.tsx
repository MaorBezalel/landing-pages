import { usePageConfig } from '@/hooks';
import { Wrapper } from '@/layouts';

export default function HuddlePage() {
    usePageConfig({ title: 'Huddle landing page', page: 'huddle' });

    return (
        <Wrapper>
            <h1 className="text-huddle-pink">Huddle (Font should be 'Poppins... a')</h1>
            <p>Huddle (Font should be 'Open Sans... a')</p>
        </Wrapper>
    );
}
