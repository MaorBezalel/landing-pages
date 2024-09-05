import { Link } from 'react-router-dom';
import { LANDING_PAGES } from '@/constants';
import { usePageConfig } from '@/hooks';

export default function HomePage() {
    usePageConfig({ title: null, page: null });

    return (
        <div className="flex w-full flex-col gap-20 p-10">
            <h1 className="self-center text-6xl text-sunnyside-soft-red">{'Landing Pages (Work In Progress)'}</h1>
            <ul className="list-disc text-blue-400">
                {LANDING_PAGES.map((page, index) => (
                    <li key={index}>
                        <Link
                            to={page.url}
                            className={page.className}
                        >
                            {page.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
