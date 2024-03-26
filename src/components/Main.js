export default function Main() {
    return (
        <section className="text-gray-600 body-font " style={{backgroundColor:'#fffeeb'}}>
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        Why Us?
                    </h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">

                    </p>
                </div>
                <div class="grid-cols-1 sm:grid md:grid-cols-3 mx-auto">
                    <div style={{backgroundColor:'#d3d3d3'}}
                        class="mx-6 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                                alt="Hollywood Sign on The Hill" />
                        </a>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                            <p class="mb-4 text-base">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                    </div>

                    <div style={{backgroundColor:'#d3d3d3'}}
                        class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
                                alt="Palm Springs Road" />
                        </a>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                            <p class="mb-4 text-base">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#d3d3d3'}}
                        class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                                alt="Los Angeles Skyscrapers" />
                        </a>
                        <div class="p-6">
                            <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                            <p class="mb-4 text-base">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}