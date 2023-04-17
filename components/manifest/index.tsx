import { ReactNode } from 'react';

export type ManifestStage = {
    slug: string;
    display: (active: boolean) => ReactNode;
    content: ReactNode;
};

const stages: ManifestStage[] = [
    {
        slug: 'vision-not-roadmap',
        display: (active) => (
            <p
                className={`cursor-pointer pb-[13px] text-3xl font-semibold uppercase hover:opacity-75 lg:pb-[20px] ${
                    active ? 'text-outline-white text-black' : 'text-white'
                }`}
            >
                vision <span className="line-through">roadmap</span>
            </p>
        ),
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    Vision, not roadmap
                </p>
                <p className="pb-5 text-base">
                    Instead of a roadmap, promising to deliver some half-baked
                    &apos;value&apos;, Almost Fancy is a 10-year vision. Our
                    vision is to build a real brand, delivering real, tangible
                    value, while building alongside a strong community that
                    wants to be a part of said vision.
                </p>
                <p className="pb-5 text-base">
                    Almost Fancy will not be releasing a token, delivering
                    half-assed print-on-demand merch, giving away ETH, or doing
                    anything else that NFT projects claim provides value.
                </p>
                <p className="text-base">
                    Join us for the journey. <br />
                    <br />❌
                </p>
            </>
        ),
    },
    {
        slug: 'brand-not-project',
        display: (active) => (
            <p
                className={`cursor-pointer pb-[13px] text-3xl font-semibold uppercase hover:opacity-75 lg:pb-[20px] ${
                    active ? 'text-outline-white text-black' : 'text-white'
                }`}
            >
                brand <span className="line-through">project</span>
            </p>
        ),
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    Brand, not project
                </p>
                <p className="pb-5 text-base">
                    Almost Fancy is not an NFT project. It is an NFT-enabled
                    brand — building and creating in parallel for both the meta
                    and physical verse.
                </p>
                <p className="pb-5 text-base">
                    As a brand, the vast majority of our funds will be
                    reinvested into executing on our 10-year vision. Unlike
                    other projects, where you often see founding teams taking
                    80-95% of the mint funds to their personal wallets, our
                    founding team is capped at 10% total from the initial mint
                    pool. This allows the founding team to be rewarded for the
                    unpaid work they&apos;ve put in, while allowing the majority
                    of funds to be used for execution.
                </p>
                <p className="pb-5 text-base">
                    After the initial sellout, the remainder of the funds will
                    be invested in hiring an extended team, producing our first
                    drop, ████████████, and other elements of our vision.
                </p>
                <p className="text-base">❌ the world with us.</p>
            </>
        ),
    },
    {
        slug: 'fashion-not-merch',
        display: (active) => (
            <p
                className={`cursor-pointer pb-[13px] text-3xl font-semibold uppercase hover:opacity-75 lg:pb-[20px] ${
                    active ? 'text-outline-white text-black' : 'text-white'
                }`}
            >
                fashion <span className="line-through">merch</span>
            </p>
        ),
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    Fashion, not merch
                </p>
                <p className="pb-5 text-base">
                    We&apos;re not your typical project, we&apos;re an
                    NFT-enabled lifestyle brand.
                </p>
                <p className="pb-5 text-base">
                    In keeping with Almost Fancy&apos;s ethos, our apparel will
                    be real clothes, not merch. This means each exclusive
                    quarterly drop for Almost Fancy members will consist of{' '}
                    <span className="font-bold">fully custom</span> apparel.
                </p>
                <p className="pb-5 text-base">
                    We&apos;re designing real clothes, from the ground up,
                    produced specifically for Almost Fancy. No print on demand,
                    no blanks, no cheap shit. The first drop will be available
                    within 1 month of minting, no waiting 6 months.
                </p>
                <p className="text-base">Wear ❌ on your sleeve.</p>
            </>
        ),
    },
    {
        slug: 'community-not-hype',
        display: (active) => (
            <p
                className={`cursor-pointer pb-[13px] text-3xl font-semibold uppercase hover:opacity-75 lg:pb-[20px] ${
                    active ? 'text-outline-white text-black' : 'text-white'
                }`}
            >
                community <span className="line-through">hype</span>
            </p>
        ),
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    Community, not hype
                </p>
                <p className="pb-5 text-base">
                    Community is at the core of everything we do. Built by an
                    experienced team who has built community-first projects for
                    years, Almost Fancy exists to build with our fans, our
                    community, and our customers. Expect to see...
                </p>
                <div className="pb-5 text-base">
                    <p>- IRL events</p>
                    <p>- Authentic and transparent communication</p>
                    <p>- Almost █████████</p>
                </div>
                <p className="pb-5 text-base">
                    As part of our community-first ethos, we will also be
                    hosting a real dutch auction as part of our minting process.
                    This means that early supporters are able to receive a
                    refund based on the difference between their price and the
                    final dutch price.
                </p>
                <p className="text-base">
                    It&apos;s time to reward community, rather than extract from
                    them ❌
                </p>
            </>
        ),
    },
    {
        slug: 'regens-not-degens',
        display: (active) => (
            <p
                className={`cursor-pointer pb-[13px] text-3xl font-semibold uppercase hover:opacity-75 lg:pb-[20px] ${
                    active ? 'text-outline-white text-black' : 'text-white'
                }`}
            >
                regens <span className="line-through">degens</span>
            </p>
        ),
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    Regens, not degens
                </p>
                <p className="pb-5 text-base">
                    Almost Fancy is{' '}
                    <span className="font-bold">regenerative</span>, not{' '}
                    <span className="line-through">degenerative</span>.
                </p>
                <p className="pb-5 text-base">
                    We believe that we need to build a better real world before
                    we can worry about disappearing into the metaverse.
                    We&apos;ll be offsetting all carbon, and be fully climate
                    positive, across all AF initiatives. This will be achieved
                    by being conscious consumers, and, in part, by:
                </p>
                <div className="pb-5 text-base">
                    <p>
                        - Planting trees and offsetting all blockchain carbon
                        created by Almost Fancy.
                    </p>
                    <p>
                        - Ongoing carbon offsets for all Almost Fancy
                        initiatives.
                    </p>
                    <p>
                        - Commitment to ethical and sustainable business
                        practices.
                    </p>
                </div>
                <p className="pb-5 text-base">
                    Almost Fancy pledges to be a fully climate positive brand
                    from day zero. There is no planet b, and it&apos;s our duty
                    to leave the world a better place than we found it.
                </p>
                <p className="text-base">There is no planet b ❌ </p>
            </>
        ),
    },
    {
        slug: 'next',
        display: (active) => (
            <p
                className={`cursor-pointer pb-[13px] text-3xl font-semibold uppercase hover:opacity-75 lg:pb-[20px] ${
                    active ? 'text-outline-white text-black' : 'text-white'
                }`}
            >
                next
            </p>
        ),
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    What&apos;s next?
                </p>
                <p className="pb-5 text-base">
                    This is just the beginning, and we have a long road ahead of
                    us. It will take us many years to achieve the full Almost
                    Fancy vision, and we hope you&apos;ll join us on the
                    journey. Stay up to date by following us on Twitter.
                </p>
                <p className="text-base">
                    Good vibes, strong community, sustainable business —
                    it&apos;s time to live life the Almost Fancy way.
                    <br /> <br /> ❌
                </p>
            </>
        ),
    },
];

export { stages };
