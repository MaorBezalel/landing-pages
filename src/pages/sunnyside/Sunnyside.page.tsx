import { Link } from 'react-router-dom';
import { usePageConfig } from '@/hooks';
import { ROUTES } from '@/constants';

import sunnysideLogo from '@/assets/sunnyside/images/logo.svg';
import arrowDownIcon from '@/assets/sunnyside/images/icon-arrow-down.svg';

import emilyReviewProfileImage from '@/assets/sunnyside/images/image-emily.jpg';
import jennieReviewProfileImage from '@/assets/sunnyside/images/image-jennie.jpg';
import thomasReviewProfileImage from '@/assets/sunnyside/images/image-thomas.jpg';
import { Logo } from './components/Logo.component';

import { IconFacebook, IconInstagram, IconPinterest, IconTwitter } from '@/pages/sunnyside/components/icons';

export default function SunnysidePage() {
    usePageConfig({ title: 'Sunnyside agency landing page', page: 'sunnyside' });

    return (
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <header className="flex h-screen w-full flex-col gap-24 bg-[url('@/assets/sunnyside/images/desktop/image-header.jpg')] bg-cover bg-center bg-no-repeat">
                <nav className="flex flex-row items-center justify-between p-10">
                    <Logo
                        type="header"
                        className="h-[2.5rem] w-[12rem] object-contain
                        "
                    />

                    <ul className="flex flex-row gap-14">
                        <li>
                            <Link
                                to={ROUTES.SUNNY_SIDE}
                                className="text-sunnyside-white"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ROUTES.SUNNY_SIDE}
                                className="text-sunnyside-white"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ROUTES.SUNNY_SIDE}
                                className="text-sunnyside-white"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ROUTES.SUNNY_SIDE}
                                className="rounded-3xl bg-sunnyside-white px-6 py-[0.9rem] font-fraunces uppercase text-sunnyside-very-dark-desaturated-blue"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <section
                    id="hero"
                    className="flex flex-col items-center justify-center gap-28 text-center text-sunnyside-white"
                >
                    <h1
                        className="font-fraunces text-7xl font-[900] uppercase tracking-[0.6rem]
                        desktop-md:text-6xl
                        desktop-sm:text-5xl"
                    >
                        We Are Creative
                    </h1>
                    <img
                        className="size-40 object-contain"
                        src={arrowDownIcon}
                        alt="Arrow down"
                    />
                </section>
            </header>

            <main className="flex w-full flex-col">
                <section
                    id="features"
                    className="grid h-full w-full grid-cols-2 grid-rows-[repeat(auto-fill,minmax(600px,1fr))] gap-0"
                >
                    <div className="flex h-[600px] w-full flex-col gap-10 bg-sunnyside-white p-40">
                        <h2 className="font-fraunces text-5xl font-[900] text-sunnyside-very-dark-desaturated-blue">
                            Transform your brand
                        </h2>
                        <p className="text-xl text-sunnyside-dark-grayish-blue">
                            We are a full-service creative agency specializing in helping brands grow fast. Engage your
                            clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <Link
                            to={ROUTES.SUNNY_SIDE}
                            className="font-fraunces font-extrabold uppercase text-sunnyside-very-dark-desaturated-blue underline decoration-sunnyside-yellow/30 decoration-8 underline-offset-1 transition-colors duration-200 hover:decoration-sunnyside-yellow"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div className="h-[600px] w-full bg-[url('@/assets/sunnyside/images/desktop/image-transform.jpg')] bg-cover bg-center bg-no-repeat" />
                    <div className="h-[600px] w-full bg-[url('@/assets/sunnyside/images/desktop/image-stand-out.jpg')] bg-cover bg-center bg-no-repeat" />
                    <div className="flex h-[600px] w-full flex-col gap-10 bg-sunnyside-white p-40">
                        <h2 className="font-fraunces text-5xl font-[900] text-sunnyside-very-dark-desaturated-blue">
                            Stand out to the right audience
                        </h2>
                        <p className="text-xl text-sunnyside-dark-grayish-blue">
                            Using a collaborative formula of designers, researchers, photographers, videographers, and
                            copywriters, we'll build and extend your brand in digital places.
                        </p>
                        <Link
                            to={ROUTES.SUNNY_SIDE}
                            className="font-fraunces font-extrabold uppercase text-sunnyside-very-dark-desaturated-blue underline decoration-sunnyside-soft-red/30 decoration-8 underline-offset-1 transition-colors duration-200 hover:decoration-sunnyside-soft-red"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div className="flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-[url('@/assets/sunnyside/images/desktop/image-graphic-design.jpg')] bg-cover bg-center bg-no-repeat px-40 py-12 text-center">
                        <h2 className="font-fraunces text-5xl font-[900] text-sunnyside-dark-desaturated-cyan">
                            Graphic Design
                        </h2>
                        <p className="text-xl text-sunnyside-dark-desaturated-cyan">
                            Great design makes you memorable. We deliver artwork that underscores your brand message and
                            captures potential clients' attention.
                        </p>
                    </div>
                    <div className="flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-[url('@/assets/sunnyside/images/desktop/image-photography.jpg')] bg-cover bg-center bg-no-repeat px-64 py-12 text-center">
                        <h2 className="font-fraunces text-5xl font-[900] text-sunnyside-dark-blue">Photography</h2>
                        <p className="text-xl text-sunnyside-dark-blue">
                            Increase your credibility by getting the most stunning, high-quality photos that improve
                            your business image.
                        </p>
                    </div>
                </section>

                <section
                    id="reviews"
                    className="flex flex-col items-center gap-32 p-40 text-center"
                >
                    <h3 className="font-fraunces text-2xl font-[900] uppercase tracking-[0.6rem] text-sunnyside-grayish-blue">
                        Client Testimonials
                    </h3>

                    <div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,auto)] gap-x-40">
                        <article className="grid grid-rows-subgrid gap-y-12 text-center [grid-row:1/4]">
                            <img
                                className="size-28 justify-self-center rounded-full"
                                src={emilyReviewProfileImage}
                                alt="Emily R."
                            />
                            <p className="text-xl text-sunnyside-very-dark-grayish-blue">
                                We put our trust in Sunnyside and they delivered, making sure our needs were met and
                                deadlines were always hit.
                            </p>
                            <address className="flex flex-col items-center justify-center gap-2 not-italic">
                                <h4 className="font-fraunces text-xl font-[900] text-sunnyside-very-dark-desaturated-blue">
                                    Emily R.
                                </h4>
                                <p className="text-sunnyside-grayish-blue">Marketing Director</p>
                            </address>
                        </article>

                        <article className="grid grid-rows-subgrid gap-y-10 text-center [grid-row:1/4]">
                            <img
                                className="size-28 self-center justify-self-center rounded-full"
                                src={thomasReviewProfileImage}
                                alt="Thomas S."
                            />
                            <p className="text-xl text-sunnyside-very-dark-grayish-blue">
                                Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a
                                satisfying and enjoyable experience.
                            </p>
                            <address className="flex flex-col items-center justify-center gap-2 not-italic">
                                <h4 className="font-fraunces text-xl font-[900] text-sunnyside-very-dark-desaturated-blue">
                                    Thomas S.
                                </h4>
                                <p className="text-sunnyside-grayish-blue">Chief Operating Officer</p>
                            </address>
                        </article>

                        <article className="grid grid-rows-subgrid gap-y-10 text-center [grid-row:1/4]">
                            <img
                                className="size-28 self-center justify-self-center rounded-full"
                                src={jennieReviewProfileImage}
                                alt="Jennie F."
                            />
                            <p className="text-xl text-sunnyside-very-dark-grayish-blue">
                                Incredible end result! Our sales increased over 400% when we worked with Sunnyside.
                                Highly recommended!
                            </p>
                            <address className="flex flex-col items-center justify-center gap-2 not-italic">
                                <h4 className="font-fraunces text-xl font-[900] text-sunnyside-very-dark-desaturated-blue">
                                    Jennie F.
                                </h4>
                                <p className="text-sunnyside-grayish-blue">Business Owner</p>
                            </address>
                        </article>
                    </div>
                </section>

                <section
                    id="images"
                    className="grid w-full grid-cols-[repeat(4,1fr)] gap-0"
                >
                    <div className="h-[600px] bg-[url('@/assets/sunnyside/images/desktop/image-gallery-milkbottles.jpg')] bg-cover bg-center bg-no-repeat" />
                    <div className="h-[600px] bg-[url('@/assets/sunnyside/images/desktop/image-gallery-orange.jpg')] bg-cover bg-center bg-no-repeat" />
                    <div className="h-[600px] bg-[url('@/assets/sunnyside/images/desktop/image-gallery-cone.jpg')] bg-cover bg-center bg-no-repeat" />
                    <div className="h-[600px] bg-[url('@/assets/sunnyside/images/desktop/image-gallery-sugarcubes.jpg')] bg-cover bg-center bg-no-repeat" />
                </section>
            </main>

            <footer className="bg-sunnyside-light-moderate-cyan flex flex-col items-center justify-center gap-20 p-20 text-center">
                <nav
                    className="flex flex-col items-center gap-10"
                    aria-label="Site"
                >
                    <Logo
                        type="footer"
                        className="h-[2.5rem] w-[12rem] object-contain"
                    />

                    <ul className="flex flex-row gap-16">
                        <li>
                            <Link
                                to={ROUTES.SUNNY_SIDE}
                                className="text-sunnyside-dark-moderate-cyan transition-colors duration-200 hover:text-sunnyside-white"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ROUTES.SUNNY_SIDE}
                                className="text-sunnyside-dark-moderate-cyan transition-colors duration-200 hover:text-sunnyside-white"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={ROUTES.SUNNY_SIDE}
                                className="text-sunnyside-dark-moderate-cyan transition-colors duration-200 hover:text-sunnyside-white"
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>

                <nav aria-label="Social">
                    <ul className="flex flex-row items-center gap-8">
                        <li>
                            <Link to={ROUTES.SUNNY_SIDE}>
                                <IconFacebook className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES.SUNNY_SIDE}>
                                <IconInstagram className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES.SUNNY_SIDE}>
                                <IconTwitter className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                            </Link>
                        </li>
                        <li>
                            <Link to={ROUTES.SUNNY_SIDE}>
                                <IconPinterest className="text-sunnyside-dark-desaturated-cyan transition-colors duration-200 hover:text-sunnyside-white" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
