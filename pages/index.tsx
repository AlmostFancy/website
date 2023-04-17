import type { NextPage } from 'next';
import Head from 'next/head';
import PageContainer from '../components/PageContainer';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>AlmostFancy</title>
            </Head>
            <PageContainer>
                <div className="flex flex-1 bg-[url('/images/af_free.png')] bg-cover bg-no-repeat md:bg-[url('/images/af_free.png')]"></div>
            </PageContainer>
        </>
    );
};

export default Home;
