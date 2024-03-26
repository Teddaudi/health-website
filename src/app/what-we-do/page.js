import { client, urlFor } from "../../lib/client"

async function getData() {
    const data = `*[_type == 'whatWeDo']{
        title,
          text1,
          text2,
          image1,
          image2
      }`
    const whatWeDoData = await client.fetch(data);
    return whatWeDoData;
}
export default async function WhatWeDo() {
    const whatWeDo = await getData()
    return (
        <section className=" dark:bg-gray-900 mt-19 pt-12  justify-center" style={{ backgroundColor: '#fffeeb' }}>
            {
                whatWeDo.map((whatWeDo, id) => (
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{whatWeDo.title}</h2>
                            <p className="mb-4">{whatWeDo.test1}</p>
                            <p>{whatWeDo.text2}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src={urlFor(whatWeDo.image1).url()} alt="what we do 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={urlFor(whatWeDo.image2).url()} alt="what we do 2" />
                        </div>
                    </div>
                ))
            }
        </section>
    )
}