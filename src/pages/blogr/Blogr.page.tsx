import { usePageConfig } from '@/hooks';

export default function Blogr() {
    usePageConfig({ title: 'Blogr landing page', page: 'blogr' });

    return <div className="bg-gradient-blogr-cta h-80 w-80"></div>;
}
