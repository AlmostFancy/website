import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import PageContainer from '../../components/PageContainer';
import { stages } from '../../components/mint';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import Head from 'next/head';

const MintSlug: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const active = stages.find((stage) => stage.slug === slug);

    const displayStages = useMemo(() => {
        return stages.map((stage) => {
            return (
                <Link
                    key={stage.slug}
                    href={`/mint/${stage.slug}`}
                    passHref={true}
                >
                    <p
                        className={`cursor-pointer items-center pb-[13px] text-3xl font-semibold uppercase hover:opacity-75 lg:pb-[20px] ${
                            stage.slug === active?.slug
                                ? 'text-outline text-off-white'
                                : 'text-black'
                        }`}
                    >
                        {stage.display}
                    </p>
                </Link>
            );
        });
    }, [active]);

    return (
        <>
            <Head>
                <title>AlmostFancy - Minting</title>
            </Head>
            <PageContainer>
                <div className="flex flex-1 flex-col bg-off-white lg:flex-row">
                    <div className="h-auto flex-row border-b border-black pb-5 pt-10 pl-10 lg:h-full lg:w-[25%] lg:border-b-0 lg:border-r lg:pb-0">
                        <p className="text-normal font-sm pb-[13px] lowercase text-black lg:pb-[20px]">
                            the mint
                        </p>
                        {displayStages}
                    </div>
                    <div className="flex max-w-full flex-1 flex-col overflow-x-hidden px-10 py-10 md:max-w-[60%] md:overflow-x-visible md:py-20 lg:max-w-[50%] lg:pl-32">
                        <Transition
                            as="div"
                            appear={true}
                            enter="transition-all duration-500"
                            enterFrom="transform translate-x-full"
                            enterTo="transform translate-x-0"
                            leaveFrom="transform translate-x-0"
                            leaveTo="transform translate-x-full"
                            leave="transition-all duration-500"
                            show={true}
                        >
                            {active?.content}
                        </Transition>
                    </div>
                </div>
            </PageContainer>
        </>
    );
};

export default MintSlug;
