import Link from 'next/link';
import { client, urlFor } from '../lib/client';

async function getData() {
    const data = `*[_type == 'banner']{
        largeTitle,
          buttonText,
          image,
          smallTitle,
          text
      }`;
    const hero = await client.fetch(data)
    return hero;
}

export default async function Hero() {
    const Hero = await getData();
    return (
        <div>
            {Hero.map((Hero, id) => (
                <div className="pt-24 green text-white" key={id}>
                    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <p className="uppercase tracking-loose w-full" key={id}>{Hero.smallTitle}</p>
                            <h1 className="my-4 text-5xl font-bold leading-tight">
                                {Hero.largeTitle}
                            </h1>
                            <p className="leading-normal text-2xl mb-8">
                                {Hero.text}
                            </p>
                            <Link href={'/about-us'}>
                                <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 hover:bg-green-400 hover:text-white duration-300 ease-in-out">
                                    {Hero.buttonText}
                                </button>
                            </Link>
                        </div>
                        <div className="w-full md:w-3/5 py-6 text-center">
                            <img className="w-full md:w-4/5 z-50" src={urlFor(Hero.image).url()} alt="" />
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}
