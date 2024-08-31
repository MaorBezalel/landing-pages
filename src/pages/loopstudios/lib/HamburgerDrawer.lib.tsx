import Hamburger from 'hamburger-react';
import { createPortal } from 'react-dom';
import { PropsWithChildren, Dispatch, SetStateAction } from 'react';

type HamburgerDrawerProps = {
    toggled?: boolean;
    toggle?: Dispatch<SetStateAction<boolean>>;
    container: HTMLElement;
    mount?: boolean;
} & PropsWithChildren;

export function HamburgerDrawer({ toggled, toggle, container, mount = true, children }: HamburgerDrawerProps) {
    return (
        <div
            className="hidden
            tablet-md:block"
        >
            <button
                className="relative z-20"
                aria-label="Show menu"
            >
                <Hamburger
                    color="#fff"
                    size={24}
                    rounded
                    duration={0.7}
                    easing="ease-in-out"
                    toggled={toggled}
                    toggle={toggle}
                />
            </button>

            {mount &&
                createPortal(
                    <div
                        className={`fixed left-0 z-10 h-screen overflow-hidden bg-loopstudios-black duration-700 ease-in-out [transition-property:width_opacity] ${
                            toggled ? 'w-[100%] opacity-100' : 'pointer-events-none w-0 opacity-100'
                        }`}
                        aria-label="Hamburger drawer"
                        aria-hidden={!toggled}
                        aria-modal="true"
                    >
                        {children}
                    </div>,
                    container
                )}
        </div>
    );
}
