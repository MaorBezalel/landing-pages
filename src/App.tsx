import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ROUTES } from '@/constants';

const HomePage = lazy(() => import('@/pages/home/Home.page'));
const SunnysidePage = lazy(() => import('@/pages/sunnyside/Sunnyside.page'));

// prettier-ignore
export function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.SUNNY_SIDE} element={<SunnysidePage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
