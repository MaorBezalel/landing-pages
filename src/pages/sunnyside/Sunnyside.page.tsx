import { usePageConfig } from '@/hooks';

export default function SunnysidePage() {
    usePageConfig({ title: 'Sunnyside agency landing page', page: 'sunnyside' });

    return (
        <div>
            <h1 className="text-sunnyside-soft-red text-3xl">Sunny Side</h1>
        </div>
    );
}
