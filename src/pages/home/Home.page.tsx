import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { usePageConfig } from '@/hooks';

export default function HomePage() {
    usePageConfig({ title: null, page: null });

    return (
        <div className="flex w-full flex-col gap-20 p-10">
            <h1 className="self-center text-6xl text-sunnyside-soft-red">{'Landing Pages (Work In Progress)'}</h1>
            <ul className="list-disc text-blue-400">
                <li>
                    <Link
                        to={ROUTES.SUNNYSIDE}
                        className="text-2xl hover:text-blue-600"
                    >
                        {'Sunny Side'}
                    </Link>
                </li>
                <li>
                    <Link
                        to={ROUTES.LOOPSTUDIOS}
                        className="text-2xl hover:text-blue-600"
                    >
                        {'Loopstudios'}
                    </Link>
                </li>
                <li>
                    <Link
                        to={ROUTES.BLOGR}
                        className="text-2xl hover:text-blue-600"
                    >
                        {'Blogr'}
                    </Link>
                </li>
            </ul>
        </div>
    );
}
