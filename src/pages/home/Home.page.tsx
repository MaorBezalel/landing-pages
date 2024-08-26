import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { usePageConfig } from '@/hooks';

export default function HomePage() {
    usePageConfig({ title: null, page: null });

    return (
        <div>
            <h1 className="text-sunnyside-soft-red text-3xl">Hello world!</h1>
            <Link to={ROUTES.SUNNY_SIDE}>Go to Sunny Side</Link>
        </div>
    );
}
