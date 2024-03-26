import { client, urlFor } from "../lib/client";

async function getData(){
    const data = `*[_type == 'why']{
        title2,
        title3,
          title1,
          image3,
          image2,
          image1,
          text3,
          text2,
          text1
      }`;
    const why = await client.fetch(data);
    return why;
}
export default async function Main() {
    const whyData = await getData();
    console.log(whyData, 'why data')
    return (
        <section className="text-gray-600 body-font " style={{ backgroundColor: '#fffeeb' }}>
            { whyData.map((why,id)=>(
                <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Why Us?
                    </h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">

                    </p>
                </div>
                <div class="grid-cols-1 sm:grid md:grid-cols-3 mx-auto">
                    <div style={{ backgroundColor: '#d3d3d3' }}
                        class="mx-6 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src={urlFor(why.image1).url()}
                                alt="Hollywood Sign on The Hill" />
                        </a>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight">{why.title1}</h5>
                            <p class="mb-4 text-base">
                               {why.text1}
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#d3d3d3' }}
                        class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src={urlFor(why.image2).url()}
                                alt="Palm Springs Road" />
                        </a>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight">{why.title2}</h5>
                            <p class="mb-4 text-base">
                                {why.text2}
                            </p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#d3d3d3' }}
                        class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src={urlFor(why.image3).url()}
                                alt="Los Angeles Skyscrapers" />
                        </a>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight">{why.title3}</h5>
                            <p class="mb-4 text-base">
                                {why.text3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
    )
}