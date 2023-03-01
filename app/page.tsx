import Link from 'next/link';
import Image from 'next/image';
import {
    GitHubIcon,
    StackOverFlowIcon,
} from 'components/icons';
import { name, about_me, bio, self_pic } from 'info';

export default async function HomePage() {
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif">{name}</h1>
            <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
                {about_me()}
            </p>
            <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
                <Image
                alt={name}
                className="rounded-full grayscale"
                src={self_pic}
                placeholder="blur"
                width={100}
                priority
                />
            </div>
            <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
                {bio()}
            </p>
        </section>
    );
}
