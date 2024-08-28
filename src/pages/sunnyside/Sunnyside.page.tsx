import { Link } from 'react-router-dom';
import { usePageConfig } from '@/hooks';
import { ROUTES } from '@/constants';
import { useState } from 'react';

import sunnysideLogo from '@/assets/sunnyside/images/logo.svg';
import arrowDownIcon from '@/assets/sunnyside/images/icon-arrow-down.svg';

import emilyReviewProfileImage from '@/assets/sunnyside/images/image-emily.jpg';
import jennieReviewProfileImage from '@/assets/sunnyside/images/image-jennie.jpg';
import thomasReviewProfileImage from '@/assets/sunnyside/images/image-thomas.jpg';
import { Logo } from './components/Logo.component';

import { IconFacebook, IconInstagram, IconPinterest, IconTwitter } from '@/pages/sunnyside/components/icons';

import Hamburger from 'hamburger-react';

export default function SunnysidePage() {
    const [isOpen, setOpen] = useState(false);
    usePageConfig({ title: 'Sunnyside agency landing page', page: 'sunnyside' });

    return (
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <header
                className="flex h-screen w-full flex-col gap-24 bg-[url('@/assets/sunnyside/images/desktop/image-header.jpg')] bg-cover bg-center bg-no-repeat
                mobile-lg:bg-[url('@/assets/sunnyside/images/mobile/image-header.jpg')]"
            >
                <nav
                    className="p-10
                    mobile-lg:p-6"
                >
                    <div className="relative flex w-full flex-row items-center justify-between">
                        <Logo
                            type="header"
                            className="h-[2.5rem] w-[12rem] object-contain
                            tablet-lg:h-[2rem] tablet-lg:w-[10rem]"
                        />

                        <ul
                            className="flex flex-row gap-14
                        text-sunnyside-white tablet-lg:gap-8 tablet-lg:text-base
                        tablet-md:hidden"
                        >
                            <li>
                                <Link to={ROUTES.SUNNY_SIDE}>About</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.SUNNY_SIDE}>Services</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.SUNNY_SIDE}>Projects</Link>
                            </li>
                            <li>
                                <Link
                                    to={ROUTES.SUNNY_SIDE}
                                    className="hover:bg-sunnyside-light-blue rounded-3xl bg-sunnyside-white px-6 py-[0.9rem] font-fraunces uppercase text-sunnyside-very-dark-desaturated-blue transition-colors duration-200 hover:text-sunnyside-white
                                    tablet-lg:px-4 tablet-lg:py-[0.8rem]"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <div className="hidden tablet-md:block">
                            <Hamburger
                                color="#fff"
                                rounded
                                size={24}
                                label="Show menu"
                                toggled={isOpen}
                                toggle={setOpen}
                            />

                            <div
                                className={`absolute left-1/2 top-20 w-[93%] -translate-x-1/2 border-transparent bg-sunnyside-white
                                after:absolute after:right-0 after:top-0 after:-mt-11 after:h-0 after:w-0 after:translate-x-0 after:translate-y-[10%] after:border-x-[40px] after:border-b-[40px] after:border-t-[40px] after:border-solid after:border-b-sunnyside-white after:border-l-transparent after:border-r-[white] after:border-t-transparent after:bg-transparent ${
                                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                                } transition-opacity duration-200`}
                                aria-hidden={!isOpen}
                                aria-label="Hamburger menu"
                            >
                                <ul className="flex flex-col items-center gap-10 px-20 py-10 text-center text-xl text-sunnyside-very-dark-grayish-blue">
                                    <li>
                                        <Link to={ROUTES.SUNNY_SIDE}>About</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTES.SUNNY_SIDE}>Services</Link>
                                    </li>
                                    <li>
                                        <Link to={ROUTES.SUNNY_SIDE}>Projects</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={ROUTES.SUNNY_SIDE}
                                            className="hover:bg-sunnyside-light-blue rounded-3xl bg-sunnyside-yellow px-6 py-[0.9rem] font-fraunces text-base uppercase text-sunnyside-very-dark-desaturated-blue transition-colors duration-200 hover:text-sunnyside-white"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <section
                    id="hero"
                    className="flex flex-col items-center justify-center gap-28 text-center text-sunnyside-white
                    desktop-md:gap-24
                    tablet-md:gap-20
                    mobile-lg:gap-10"
                >
                    <h1
                        className="font-fraunces text-7xl font-[900] uppercase tracking-[0.6rem]
                        desktop-md:text-6xl
                        desktop-sm:text-5xl
                        tablet-sm:text-4xl
                        mobile-lg:text-5xl
                        mobile-md:text-[2.5rem]"
                    >
                        We Are Creative
                    </h1>
                    <img
                        className="size-40 object-contain
                        desktop-md:size-32"
                        src={arrowDownIcon}
                        alt="Arrow down"
                    />
                </section>
            </header>

            <main className="flex w-full flex-col">
                <section
                    id="features"
                    className="grid h-full w-full grid-cols-2 grid-rows-3 gap-0
                    tablet-sm:grid-cols-1 tablet-sm:grid-rows-6"
                >
                    <div
                        className="order-[0] flex h-[600px] w-full flex-col justify-center gap-10 bg-sunnyside-white px-40
                        desktop-md:px-32
                        desktop-sm:px-24
                        tablet-lg:px-16
                        tablet-md:h-[400px] tablet-md:px-8
                        tablet-sm:order-1"
                    >
                        <h2
                            className="font-fraunces text-5xl font-[900] text-sunnyside-very-dark-desaturated-blue
                            desktop-lg:text-5xl
                            desktop-md:text-3xl
                            tablet-md:text-2xl"
                        >
                            Transform your brand
                        </h2>
                        <p
                            className="text-xl text-sunnyside-dark-grayish-blue
                            desktop-md:text-lg
                            tablet-md:text-base"
                        >
                            We are a full-service creative agency specializing in helping brands grow fast. Engage your
                            clients through compelling visuals that do most of the marketing for you.
                        </p>
                        <Link
                            to={ROUTES.SUNNY_SIDE}
                            className="font-fraunces font-extrabold uppercase text-sunnyside-very-dark-desaturated-blue underline decoration-sunnyside-yellow/30 decoration-8 underline-offset-1 transition-colors duration-200 hover:decoration-sunnyside-yellow
                            tablet-md:text-base"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div className="order-1 h-[600px] w-full bg-[url('@/assets/sunnyside/images/desktop/image-transform.jpg')] bg-cover bg-center bg-no-repeat tablet-md:h-[400px] tablet-sm:order-[0]" />
                    <div className="order-2 h-[600px] w-full bg-[url('@/assets/sunnyside/images/desktop/image-stand-out.jpg')] bg-cover bg-center bg-no-repeat tablet-md:h-[400px]" />
                    <div
                        className="order-3 flex h-[600px] w-full flex-col justify-center gap-10 bg-sunnyside-white px-40
                        desktop-md:px-32
                        desktop-sm:px-24
                        tablet-lg:px-16
                        tablet-md:h-[400px] tablet-md:px-8"
                    >
                        <h2
                            className="font-fraunces text-5xl font-[900] text-sunnyside-very-dark-desaturated-blue
                            desktop-lg:text-5xl
                            desktop-md:text-3xl
                            tablet-md:text-2xl"
                        >
                            Stand out to the right audience
                        </h2>
                        <p
                            className="text-xl text-sunnyside-dark-grayish-blue
                            desktop-md:text-lg
                            tablet-md:text-base"
                        >
                            Using a collaborative formula of designers, researchers, photographers, videographers, and
                            copywriters, we'll build and extend your brand in digital places.
                        </p>
                        <Link
                            to={ROUTES.SUNNY_SIDE}
                            className="font-fraunces font-extrabold uppercase text-sunnyside-very-dark-desaturated-blue underline decoration-sunnyside-soft-red/30 decoration-8 underline-offset-1 transition-colors duration-200 hover:decoration-sunnyside-soft-red
                            tablet-md:text-base"
                        >
                            Learn More
                        </Link>
                    </div>
                    <div
                        className="order-4 flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-[url('@/assets/sunnyside/images/desktop/image-graphic-design.jpg')] bg-cover bg-center bg-no-repeat py-12 text-center
                        tablet-md:h-[400px] tablet-md:gap-4 tablet-md:pt-0
                        tablet-sm:pb-6"
                    >
                        <h2
                            className="font-fraunces text-5xl font-[900] text-sunnyside-dark-desaturated-cyan
                            desktop-lg:text-5xl
                            desktop-md:text-4xl
                            tablet-lg:text-3xl"
                        >
                            Graphic Design
                        </h2>
                        {/* prettier-ignore */}
                        <pre 
                            className="font-barlow text-xl text-sunnyside-dark-desaturated-cyan
                            desktop-md:text-lg
                            tablet-md:text-base"
                        >
                            Great design makes you memorable. We deliver{'\n'}
                            artwork that underscores your brand message{'\n'}
                            and captures potential clients' attention.
                        </pre>
                    </div>
                    <div
                        className="order-5 flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-[url('@/assets/sunnyside/images/desktop/image-photography.jpg')] bg-cover bg-center bg-no-repeat py-12 text-center
                        tablet-md:h-[400px]
                        tablet-md:gap-4 tablet-md:pt-0
                        tablet-sm:pb-6"
                    >
                        <h2
                            className="font-fraunces text-5xl font-[900] text-sunnyside-dark-blue
                            desktop-lg:text-5xl
                            desktop-md:text-4xl
                            tablet-lg:text-3xl"
                        >
                            Photography
                        </h2>
                        <pre
                            className="font-barlow text-xl text-sunnyside-dark-blue
                            desktop-md:text-lg
                            tablet-md:text-base"
                        >
                            Increase your credibility by getting the most{'\n'}
                            stunning, high-quality photos that improve your{'\n'}
                            business image.
                        </pre>
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
