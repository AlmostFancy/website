import Image from 'next/image';
import { ReactNode } from 'react';
import UnderlineLink from '../utilities/UnderlineLink';

export type MintStage = {
    slug: string;
    display: string;
    content: ReactNode;
};

const stages: MintStage[] = [
    {
        slug: 'the-nfts',
        display: 'The NFTS',
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">Founders Club</p>
                <div className="pb-10">
                    <p className="pb-5 font-mono text-base font-light">
                        mint date {'        '} / {'May 18th - May 19th'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        total supply {'        '} / {'1,111'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        phases {'        '} / {'02'}
                    </p>
                    <p className="font-mono text-base font-light">
                        per wallet {'        '} / {'01'}
                    </p>
                </div>
                <p className="pb-5 text-base">
                    Founders Pass (FP) holders will get access to a host of
                    ongoing perks, including:
                </p>
                <div>
                    <p className="pb-5 text-base">
                        - dedicated Almost Fancy Almost List spot w/ discounted
                        mint price
                    </p>
                    <p className="pb-5 text-base">- Founders Club access</p>
                    <p className="pb-5 text-base">
                        - Limited edition physical AF/FC ██████
                    </p>
                    <p className="pb-5 text-base">- ██████ ██ ███</p>
                </div>
                <div className="flex flex-row pb-5">
                    <Image
                        src={'/images/ticket_1.png'}
                        height={230}
                        width={230}
                        alt="Ticket 1"
                    />
                    <Image
                        src={'/images/ticket_2.png'}
                        height={230}
                        width={230}
                        alt="Ticket 2"
                    />
                    <Image
                        src={'/images/ticket_3.png'}
                        height={230}
                        width={230}
                        alt="Ticket 3"
                    />
                </div>
                <p className="pb-5 text-base">
                    there are a few ways to get yourself a Founders Pass mint
                    slot:
                </p>
                <div>
                    <p className="pb-5 text-base">
                        - own a{' '}
                        <UnderlineLink url="https://opensea.io/collection/almost-fancy-skulls">
                            genesis skull
                        </UnderlineLink>
                    </p>
                    <p className="pb-5 text-base">
                        - enter our{' '}
                        <UnderlineLink url="https://premint.xyz/almostfancy/">
                            premint raffle
                        </UnderlineLink>
                    </p>
                    <p className="pb-5 text-base">
                        - join the{' '}
                        <UnderlineLink url="https://discord.gg/almostfancy">
                            Discord
                        </UnderlineLink>{' '}
                        and score points for your team
                    </p>
                </div>
                <p className="pt-10 pb-10 text-5xl font-semibold">
                    Almost Fancy
                </p>
                <div className="pb-10">
                    <p className="pb-5 font-mono text-base font-light">
                        mint date {'        '} / {'████'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        total supply {'        '} / {'6,666'}
                    </p>
                    <p className="font-mono text-base font-light">
                        phases {'        '} / {'04'}
                    </p>
                </div>
                <p className="pb-5 text-base">
                    Almost Fancy is an{' '}
                    <span className="font-bold">NFT-enabled brand</span>,
                    enabling our community to buy in and be a part of our
                    journey, growth, and ultimate success.
                </p>
                <div className="flex flex-row pb-5">
                    <Image
                        src={'/images/preview_1.png'}
                        height={230}
                        width={230}
                        alt="Preview 1"
                    />
                    <Image
                        src={'/images/preview_2.png'}
                        height={230}
                        width={230}
                        alt="Preview 2"
                    />
                    <Image
                        src={'/images/preview_3.png'}
                        height={230}
                        width={230}
                        alt="Preview 3"
                    />
                </div>
                <p className="text-base">
                    The Almost Fancy mint will be done in 4 phases - Dutch,
                    Founders Pass, Almost List, and Public. Learn more about
                    what we&apos;re building post-mint in{' '}
                    <UnderlineLink url="/manifest/vision-not-roadmap">
                        the manifest
                    </UnderlineLink>
                    . ❌
                </p>
            </>
        ),
    },
    {
        slug: 'founders',
        display: '01_founders club',
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    Almost Fancy Founders Club
                </p>
                <div className="pb-5">
                    <p className="pb-5 font-mono text-base font-light">
                        mint date {'        '} / {'May 18th - May 19th'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        supply {'        '} / {'1,111'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        per wallet {'        '} / {'01'}
                    </p>
                </div>
                <p className="pb-5 text-base">
                    Founders Pass holders will get access to a host of ongoing
                    perks, including:
                </p>
                <div>
                    <p className="pb-5 text-base">
                        - Dedicated Almost Fancy mintlist spot w/ discounted
                        mint price
                    </p>
                    <p className="pb-5 text-base">- Founders Club access</p>
                    <p className="pb-5 text-base">
                        - Limited edition physical AF/FC ██████
                    </p>
                    <p className="text-base">- ██████ ██ ███</p>
                </div>
                <p className="pt-10 pb-10 text-5xl font-semibold">
                    01 | Founders Club
                </p>
                <p className="pb-5 font-mono text-base font-light">
                    mint date {'        '} / {'May 18th'}
                </p>
                <p className="pb-5 font-mono text-base font-light">
                    mint time {'        '} / {'10 a.m. ET'}
                </p>
                <p className="text-base">
                    Dedicated minting window for those on the Founders Club
                    Almost List. Stay tuned via Twitter or Discord to learn
                    about how to get on the Founders Club Almost List.
                </p>
                <p className="pt-10 pb-10 text-5xl font-semibold">
                    02 | Public
                </p>
                <p className="pb-5 font-mono text-base font-light">
                    mint date {'        '} / {'May 19th'}
                </p>
                <p className="pb-5 font-mono text-base font-light">
                    mint time {'        '} / {'10 a.m. ET'}
                </p>
                <p className="text-base">
                    Available to all, includes any leftover supply from phase 01
                </p>
            </>
        ),
    },
    {
        slug: 'almost-fancy',
        display: '02_almost fancy',
        content: (
            <>
                <p className="pb-10 text-5xl font-semibold">
                    01 | Dutch Auction
                </p>
                <div className="pb-10">
                    <p className="pb-5 font-mono text-base font-light">
                        supply {'        '} / {'1,111'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        time {'        '} / {'9hrs'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        price decrease {'        '} / {'15min'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        starting price {'        '} / {'0.99Ξ'}
                    </p>
                    <p className="font-mono text-base font-light">
                        ending price {'        '} / {'0.09Ξ'}
                    </p>
                </div>
                <p className="pb-5 text-base">
                    Almost Fancy will be running a{' '}
                    <span className="font-bold">true</span> dutch auction. This
                    means that all dutch minters will be able to receive a
                    refund between their dutch price and the final dutch price.
                </p>
                <p className="text-base font-light italic">
                    If you buy the dutch auction at 0.90Ξ, and the final dutch
                    auction piece sells for 0.50Ξ, you&apos;ll be able to
                    receive 0.40Ξ back.
                </p>
                <p className="pt-10 pb-10 text-5xl font-semibold">
                    02 | Founders Pass
                </p>
                <div className="pb-5">
                    <p className="pb-5 font-mono text-base font-light">
                        supply {'        '} / {'2,222'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        max mint {'        '} / {'02'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        price {'        '} / 2/3rd of last dutch sale
                    </p>
                </div>
                <p className="pb-5 text-base">
                    <UnderlineLink url="/mint/founders">
                        Founders Club
                    </UnderlineLink>{' '}
                    offers early access and special perks to those who support
                    Almost Fancy with the earliest conviction.
                </p>
                <p className="pt-10 pb-10 text-5xl font-semibold">
                    03 | Almost List
                </p>
                <div className="pb-5">
                    <p className="pb-5 font-mono text-base font-light">
                        supply {'        '} / {'2,222'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        max mint {'        '} / {'02'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        price {'        '} / last dutch sale
                    </p>
                </div>
                <p className="pb-5 text-base">
                    Dedicated minting window for those on the Almost List. Stay
                    tuned via{' '}
                    <UnderlineLink url="https://twitter.com/almostfancy">
                        Twitter
                    </UnderlineLink>{' '}
                    or{' '}
                    <UnderlineLink url="https://discord.gg/almostfancy">
                        Discord
                    </UnderlineLink>{' '}
                    to learn about how to get on the Almost List.
                </p>
                <p className="pt-10 pb-10 text-5xl font-semibold">
                    04 | Public Sale
                </p>
                <div className="pb-5">
                    <p className="pb-5 font-mono text-base font-light">
                        supply {'        '} / {'1,111'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        max mint {'        '} / {'03'}
                    </p>
                    <p className="pb-5 font-mono text-base font-light">
                        price {'        '} / last dutch sale
                    </p>
                </div>
                <p className="pb-5 text-base">
                    Available to all, includes any leftover supply from phases{' '}
                    02 and 03.
                </p>
            </>
        ),
    },
];

export { stages };
