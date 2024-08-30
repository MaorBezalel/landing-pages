import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { usePageConfig } from '@/hooks';

export default function HomePage() {
    usePageConfig({ title: null, page: null });

    return (
        <div className="flex w-full flex-col gap-20 p-10">
            <h1 className="self-center text-6xl text-sunnyside-soft-red">{'Landing Pages (Work In Progress'}</h1>
            <Link
                to={ROUTES.SUNNY_SIDE}
                className="text-cyan-600 underline"
            >
                Sunnyside
            </Link>
        </div>
    );
}
