import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoadingSpinner } from '@/components/ui';
import { ROUTES } from '@/constants';

const HomePage = lazy(() => import('@/pages/home/Home.page'));
const SunnysidePage = lazy(() => import('@/pages/sunnyside/Sunnyside.page'));
const LoopstudiosPage = lazy(() => import('@/pages/loopstudios/Loopstudios.page'));

// prettier-ignore
export function App() {
    return (
        <Router>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.SUNNYSIDE} element={<SunnysidePage />} />
                    <Route path={ROUTES.LOOPSTUDIOS} element={<LoopstudiosPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
