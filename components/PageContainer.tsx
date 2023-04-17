import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, ReactNode, useMemo } from 'react';
import Marquee from 'react-fast-marquee';
import useComponentVisible from '../hooks/useComponentVisible';
import UnderlineLink from './utilities/UnderlineLink';

type PageContainerProps = {
    children: ReactNode;
    borderColor?: string;
};

const ongoingMint = true;

function PageContainer({
    children,
    borderColor = 'border-black',
}: PageContainerProps) {
    const { ref, toggle, isComponentVisible } = useComponentVisible(false);
    const marqueeElements = useMemo(() => {
        return [...Array(10)].map((idx) => (
            <Fragment key={`marquee-${idx}`}>
                <p className="text-lg font-bold text-black">
                    mint now @{' '}
                    <UnderlineLink url="https://mint.almostfancy.com">
                        mint.almostfancy.com
                    </UnderlineLink>
                </p>
                <p className="px-2 font-mono text-black">/</p>
            </Fragment>
        ));
    }, []);

    const navbarComponents = useMemo(() => {
        return (
            <>
                <p className="cursor-not-allowed text-lg font-medium text-black line-through transition-all duration-75 hover:text-gray-600 md:text-2xl">
                    SHOP
                </p>
                <p className="cursor-not-allowed text-lg font-medium text-black line-through transition-all duration-75 hover:text-gray-600 md:pl-[28px] md:text-2xl">
                    LIFE
                </p>
                <div className="flex flex-col md:flex-row">
                    {/* <Link href="/mint/the-nfts">
                        <a className="text-lg font-medium text-black transition-all duration-75 ease-in-out hover:text-gray-600 md:pl-[28px] md:text-2xl">
                            MINT
                        </a>
                    </Link> */}
                    <Link href="/manifest/vision-not-roadmap">
                        <a className="text-lg font-medium text-black transition-all duration-75 ease-in-out hover:text-gray-600 md:pl-[28px] md:text-2xl">
                            MANIFEST
                        </a>
                    </Link>
                </div>
            </>
        );
    }, []);

    return (
        <div className="flex h-screen flex-col">
            <div
                className={`flex min-h-[80px] w-full items-center justify-between border-b ${borderColor} bg-white px-[20px] py-[15px] text-center md:px-[40px] md:py-[21px]`}
            >
                <Link href="/">
                    <a className="text-lg font-semibold uppercase text-black transition-all duration-100 hover:text-af000-blue md:text-3xl">
                        almost fancy
                    </a>
                </Link>
                <div className="hidden md:flex md:flex-row">
                    {navbarComponents}
                </div>
                <div className="block md:hidden">
                    {!isComponentVisible ? (
                        <div
                            className="cursor-pointer space-y-2"
                            onClick={toggle}
                        >
                            <span className="block h-0.5 w-8 bg-gray-600"></span>
                            <span className="block h-0.5 w-5 bg-gray-600"></span>
                        </div>
                    ) : (
                        <p
                            className="cursor-pointer text-3xl font-medium uppercase"
                            onClick={toggle}
                        >
                            X
                        </p>
                    )}
                </div>
                <div className="hidden md:block"></div>
            </div>
            {/* <div
                className={`z-0 flex h-10 min-w-full items-center border-b border-black py-2 px-2 ${
                    borderColor != 'border-black' && 'border-t'
                }`}
            >
                <Marquee speed={70} gradient={false} pauseOnHover={true}>
                    {marqueeElements}
                </Marquee>
            </div> */}
            <main className="mb-auto flex flex-1">{children}</main>
            <Transition.Root show={isComponentVisible}>
                <Transition.Child
                    as="div"
                    className="absolute top-[80px] h-auto w-full flex-col border-b border-b-black bg-white px-5 md:hidden"
                    enter="transition-all duration-300"
                    leave="transition-all duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div ref={ref}>{navbarComponents}</div>
                </Transition.Child>
            </Transition.Root>
            <div
                className={`flex h-[70px] w-full items-center justify-end border-t md:justify-between ${borderColor} bottom-0 bg-white py-[20px] px-[20px] text-center md:px-[40px]`}
            >
                <p className="hidden font-mono text-lg font-normal text-black md:block">
                    we are <span className="hover:font-extrabold">almost</span>{' '}
                    fancy
                </p>
                <div className="flex flex-row space-x-5">
                    <Link href="https://twitter.com/almostfancy">
                        <a target="_blank">
                            <Image
                                className="hover:opacity-60"
                                src="/images/twitter.svg"
                                height={25}
                                width={25}
                                alt="Twitter"
                            />
                        </a>
                    </Link>
                    <Link href="https://instagram.com/almxstfancy">
                        <a target="_blank">
                            <Image
                                className="hover:opacity-60"
                                src="/images/instagram.svg"
                                height={25}
                                width={25}
                                alt="Instagram"
                            />
                        </a>
                    </Link>
                    <Link href="https://discord.gg/almostfancy">
                        <a target="_blank">
                            <Image
                                className="hover:opacity-60"
                                src="/images/discord.svg"
                                height={25}
                                width={25}
                                alt="Discord"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageContainer;
