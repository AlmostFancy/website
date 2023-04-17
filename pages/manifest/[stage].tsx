import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import PageContainer from '../../components/PageContainer';
import { stages } from '../../components/manifest';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import Head from 'next/head';

const ManifestPage: NextPage = () => {
    const router = useRouter();
    const { stage } = router.query;
    const active = stages.find((other) => other.slug === stage);

    const displayStages = useMemo(() => {
        return stages.map((stage) => {
            return (
                <Link
                    key={stage.slug}
                    href={`/manifest/${stage.slug}`}
                    passHref={true}
                >
                    {stage.display(stage.slug === active?.slug)}
                </Link>
            );
        });
    }, [active]);

    return (
        <>
            <Head>
                <title>AlmostFancy - Manifest</title>
            </Head>
            <PageContainer borderColor="border-white">
                <div className="flex flex-1 flex-col bg-black text-white lg:flex-row">
                    <div className="h-auto flex-row border-b border-white pb-5 pt-10 pl-10 lg:h-full lg:w-[25%] lg:border-b-0 lg:border-r lg:pb-0">
                        <p className="pb-[13px] font-mono text-sm lowercase lg:pb-[20px]">
                            manifest
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

export default ManifestPage;
