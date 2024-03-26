export default function WhatWeDo() {
    return (
        <section className=" dark:bg-gray-900 mt-19 pt-12  justify-center" style={{backgroundColor:'#fffeeb'}}>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What We Do</h2>
                    <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                    <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="/what1.jpg" alt="what we do 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/what2.jpg" alt="what we do 2" />
                </div>
            </div>
        </section>
    )
}